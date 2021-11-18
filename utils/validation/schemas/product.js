const Joi = require('joi'),
  messages = require('../../../translation/message.json');

  const productSchemas = { 
    createProductSchema: Joi.object().keys({
    name: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Name')
      .messages({
        'any.required': messages['PRODUCT-NAME-REQUIRED'],
      }),
    price: Joi.number()
      .required()
      .label('Price')
      .messages({
        'any.required': messages['PRODUCT-PRICE-REQUIRED'],
      }),
    description: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Product Description')
      .messages({
        'any.required': messages['PRODUCT-DESCRIPTION-REQUIRED'],
      }),
      countInStock: Joi.number()
      .required()
      .label('Type')
      .messages({
        'any.required': messages['COUNT-IN-STOCK-REQUIRED'],
      }),
      id: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Type')
      .messages({
        'any.required': messages['ACT-ID-REQUIRED'],
      }),
  }), 

  deleteProductSchema: Joi.object().keys({
    name: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Name')
      .messages({
        'any.required': messages['PRODUCT-NAME-REQUIRED'],
      }),
    price: Joi.number()
      .required()
      .label('Price')
      .messages({
        'any.required': messages['PRODUCT-PRICE-REQUIRED'],
      }),
    description: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Description')
      .messages({
        'any.required': messages['PRODUCT-DESCRIPTION-REQUIRED'],
      }),
    _id: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Type')
      .messages({
        'any.required': messages['ACT-ID-REQUIRED'],
      }),
  }), 

  validateOptions: {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  },
}
module.exports = productSchemas;
