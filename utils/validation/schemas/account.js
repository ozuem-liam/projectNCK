const Joi = require('joi'),
  messages = require('../../../translation/message.json');

const passwordSchema = Joi.string()
    .min(6)
    .regex(/^(?:(?=.*\d)(?=.*[A-Z]).*)$/)
    .trim()
    .label('Password')
    .messages({
      'string.pattern.base': messages['ACT-PASSWORD-NOT-STRONG'],
      'string.min': messages['ACT-PASSWORD-NOT-STRONG'],
      'any.required': messages['ACT-PASSWORD-REQUIRED'],
    }),
  confirmPasswordSchema = Joi.string()
    .valid(Joi.ref('password'))
    .trim()
    .label('Confirm password')
    .messages({
      'any.only': messages['ACT-CONFIRM-PASSWORD-MATCH'],
      'any.required': messages['ACT-CONFIRM-PASSWORD-REQUIRED'],
    }),
  emailSchema = Joi.string().required().email().trim().label('Email').messages({
    'string.email': messages['ACT-EMAIL-INVALID'],
    'any.required': messages['ACT-EMAIL-REQUIRED'],
  });

const accountSchemas = {
  registrationSchemaOne: Joi.object().keys({
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
    email: emailSchema,
    password: passwordSchema.required(),
    confirm_password: confirmPasswordSchema.required(),
    stage: Joi.number().integer().positive().default(1).required().valid(1, 2).label('Stage'),
    membership_type: Joi.string().required().valid('Customer', 'Admin').label('Membership type'),
    join_mailing_list: Joi.boolean().default(false),
    token: Joi.number().integer().positive().label('Token'),
  }),
  registrationSchemaTwo: Joi.object().keys({
    stage: Joi.number().integer().positive().default(1).required().valid(1, 2).label('Stage'),
    id: Joi.string().required().alphanum(),
    token: Joi.number().integer().positive().label('Token'),
  }),

  resetPasswordSchema: Joi.object().keys({
    email: emailSchema,
    token: Joi.number().integer().positive().label('Token').required().messages({
      'any.required': messages['TOKEN-REQUIRED'],
    }),
    stage: Joi.number().integer().positive().default(1).required().valid(1, 2).label('Stage'),
    password: Joi.when('stage', {
      is: 2,
      then: passwordSchema.required(),
    }),

    confirm_password: Joi.when('stage', {
      is: 2,
      then: confirmPasswordSchema.required(),
    }),
  }),

  loginSchema: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema.required(),
    otp: Joi.number().min(6).max(6).label('OTP').messages({
      'any.min': messages['ACT-INVALID-2FA'],
    }),
  }),

  emailConfirmationSchema: Joi.object().keys({
    type: Joi.string().required().valid('PasswordReset', 'EmailConfirmation').label('Type'),
    email: emailSchema.when('type', {
      is: 'PasswordReset',
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
    id: Joi.string()
      .alphanum()
      .when('type', { is: 'EmailConfirmation', then: Joi.required(), otherwise: Joi.forbidden() }),
  }),

  validateOptions: {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  },
};

module.exports = accountSchemas;
