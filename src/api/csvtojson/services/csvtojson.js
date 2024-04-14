'use strict';

/**
 * csvtojson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::csvtojson.csvtojson');
