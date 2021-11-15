const Joi = require('joi'),
  messages = require('../../../translation/message.json');

const profileSchemas = {
  profileUpdateSchema: Joi.object().keys({
    first_name: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('First name')
      .messages({
        'any.required': messages['ACT-FIRSTNAME-REQUIRED'],
      }),
    last_name: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('Last name')
      .messages({
        'any.required': messages['ACT-LASTNAME-REQUIRED'],
      }),
    email: Joi.string().required().email().trim().label('Email').messages({
      'string.email': messages['ACT-EMAIL-INVALID'],
      'any.required': messages['ACT-EMAIL-REQUIRED'],
    }),
    phone_number: Joi.string()
      .trim(true)
      .required()
      .regex(/^[0-9]*$/)
      .label('phone number')
      .messages({
        'any.required': messages['ACT-PHONE-NUMBER-REQUIRED'],
      }),
    time_zone: Joi.string()
      .trim(true)
      .regex(/^(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/)
      .label('timezone')
      .messages({
        'any.required': messages['ACT-TIMEZONE-REQUIRED'],
      }),
    citizen: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('citizenship')
      .messages({
        'any.required': messages['ACT-CITIZENSHIP-REQUIRED'],
      }),
    passport_number: Joi.string()
      .trim(true)
      .required()
      .regex(/^[a-z0-9]+$/i)
      .label('citizenship')
      .messages({
        'any.required': messages['ACT-PASSPORT-NUMBER-REQUIRED'],
      }),
    signature: Joi.string().trim(true).label('Signature'),
    tax_id: Joi.string()
      .trim(true)
      .regex(/^[a-z0-9]+$/i)
      .label('tax ID'),
  }),

  addressSchema: Joi.object().keys({
    country: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('Country')
      .messages({
        'any.required': messages['ADDRESS-COUNTRY-REQUIRED'],
      }),
    state: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('State')
      .messages({
        'any.required': messages['ADDRESS-STATE-REQUIRED'],
      }),
    city: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('City')
      .messages({
        'any.required': messages['ADDRESS-CITY-REQUIRED'],
      }),
    postal_code: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Postal Code')
      .messages({
        'any.required': messages['ADDRESS-POSTAL-CODE-REQUIRED'],
      }),
    type: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('Type')
      .messages({
        'any.required': messages['ADDRESS-TYPE-REQUIRED'],
      }),
    account_id: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Type')
      .messages({
        'any.required': messages['ACT-ID-REQUIRED'],
      }),
  }),
  updateAddressSchema: Joi.object().keys({
    country: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('Country')
      .messages({
        'any.required': messages['ADDRESS-COUNTRY-REQUIRED'],
      }),
    state: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('State')
      .messages({
        'any.required': messages['ADDRESS-STATE-REQUIRED'],
      }),
    city: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('City')
      .messages({
        'any.required': messages['ADDRESS-CITY-REQUIRED'],
      }),
    postal_code: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z0-9]/)
      .label('Postal Code')
      .messages({
        'any.required': messages['ADDRESS-POSTAL-CODE-REQUIRED'],
      }),
    type: Joi.string()
      .trim(true)
      .required()
      .regex(/^[A-Za-z]/)
      .label('Type')
      .messages({
        'any.required': messages['ADDRESS-TYPE-REQUIRED'],
      }),
  }),

  getAccountsParams: Joi.object().keys({
    per_page: Joi.number().integer().positive().label('Page Limit'),
    page: Joi.number().integer().positive().label('Page Number'),
    type: Joi.string().valid('Employee', 'Employer').label('Membership type'),
  }),
  getAccountsByEmail: Joi.object().keys({
    email: Joi.string().required().email().trim().label('Email').messages({
      'string.email': messages['ACT-EMAIL-INVALID'],
      'any.required': messages['ACT-EMAIL-REQUIRED'],
    }),
  }),

  validateOptions: {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  },
};

module.exports = profileSchemas;
