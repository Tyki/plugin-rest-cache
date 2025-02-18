'use strict';

/**
 * @typedef {import('@strapi/strapi').Strapi} Strapi
 */

const { AWSS3CacheProvider } = require('./AWSS3CacheProvider');

module.exports = {
  provider: 'aws-s3',
  name: 'aws-s3',

  async init(options /* , { strapi } */) {
    return new AWSS3CacheProvider(options);
  },
};
