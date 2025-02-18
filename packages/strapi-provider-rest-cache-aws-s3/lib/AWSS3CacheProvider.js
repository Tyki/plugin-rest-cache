'use strict';

/* eslint-disable class-methods-use-this */
const { CacheProvider } = require('strapi-plugin-rest-cache/server/types');
const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} = require('@aws-sdk/client-s3');

class AWSS3CacheProvider extends CacheProvider {
  constructor(options) {
    super();

    this.client = new S3Client({
      region: options.region,
      credentials: {
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
      },
    });

    this.bucket = options.bucketName;
  }

  /**
   * @param {string} key
   */
  async get(key) {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    try {
      const response = await this.client.send(command);
      const val = await response.Body.transformToString();

      if (!val) return;
      const parsedValue = JSON.parse(val);

      if (parsedValue?.ttl && new Date().getTime() > parsedValue.ttl) {
        // No await on purpose
        this.del(key);

        return false;
      }

      return JSON.stringify(parsedValue.value);
    } catch (e) {
      if (e.Code === 'NoSuchKey') {
        return false;
      }

      return false;
    }
  }

  /**
   * @param {string} key
   * @param {any} val
   * @param {number=} maxAge
   */
  async set(key, val, maxAge = 3600) {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: JSON.stringify({
        ttl: new Date().getTime() + maxAge,
        value: JSON.parse(val),
      }),
    });

    try {
      await this.client.send(command);

      return true;
    } catch (e) {
      console.log(e);
    }

    return false;
  }

  /**
   * @param {string|string[]} key
   */
  async del(key) {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    await this.client.send(command);
  }

  async keys() {
    try {
      let files = [];
      let continuationToken;

      do {
        const command = new ListObjectsV2Command({
          Bucket: this.bucket,
          ContinuationToken: continuationToken, // For pagination
        });

        const response = await this.client.send(command);

        if (response.Contents) {
          files = files.concat(response.Contents.map((file) => file.Key));
        }

        continuationToken = response.NextContinuationToken; // For next page
      } while (continuationToken);

      return files;
    } catch (error) {
      console.error('Error listing files:', error);
    }
  }

  get ready() {
    return true;
  }
}

module.exports = {
  AWSS3CacheProvider,
};
