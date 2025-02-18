'use strict';

module.exports = ({ env }) => {
  return {
    'rest-cache': {
      enabled: env.bool('ENABLE_CACHE', true),
      config: {
        provider: {
          name: 'aws-s3',
          max: 32767,
          options: {
            accessKeyId: env('ACCESS_KEY_ID'),
            secretAccessKey: env('SECRET_ACCESS_KEY'),
          },
        },
        // loads shared config (from /shared folder)
        strategy: require('./cache-strategy')({ env }),
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'b46375d2efd1c69d8efcdcb46d3acd67a'),
      },
    },
  };
};
