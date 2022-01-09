module.exports = {
  actions: [
    {
      section: 'plugins',
      displayName: 'Purge cache',
      uid: 'cache.purge',
      subCategory: 'purge',
      pluginName: 'strapi-plugin-rest-cache',
    },
    {
      section: 'plugins',
      displayName: 'Read cache strategy configuration',
      uid: 'cache.read-strategy',
      subCategory: 'read',
      pluginName: 'strapi-plugin-rest-cache',
    },
    {
      section: 'plugins',
      displayName: 'Read cache provider configuration',
      uid: 'cache.read-provider',
      subCategory: 'read',
      pluginName: 'strapi-plugin-rest-cache',
    },
  ],
};
