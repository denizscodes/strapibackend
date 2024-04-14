'use strict';

/**
 * sohbet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sohbet.sohbet');
