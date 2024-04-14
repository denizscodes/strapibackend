'use strict';

/**
 * kullanici service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kullanici.kullanici');
