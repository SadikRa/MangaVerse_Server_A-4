import Joi from 'joi';

const userValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
  role: Joi.string().valid('user', 'admin').default('user').messages({
    'any.only': "Role must be either 'user' or 'admin'",
  }),
  isBlocked: Joi.boolean().default(false).messages({
    'boolean.base': 'isBlocked must be a boolean',
  }),
  isDeleted: Joi.boolean().default(false).messages({
    'boolean.base': 'isDeleted must be a boolean',
  }),
});

export const UserValidation = {
  userValidationSchema,
};
