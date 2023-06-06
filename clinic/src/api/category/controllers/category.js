'use strict';

/**
 * floor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category',
({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
  
      const entity = await strapi.db.query("api::category.category").findOne({
        populate:true,
        where: {slug},
      
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    }}))
;


  