import Joi from 'joi';

// Validation schema for creating a product
export const productValidationSchema = Joi.object({
  id: Joi.string().optional(),
  title: Joi.string().trim().required().messages({
    'string.empty': 'Title is required.',
    'any.required': 'Title is required.',
  }),
  author: Joi.string().trim().required().messages({
    'string.empty': 'Author is required.',
    'any.required': 'Author is required.',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price must be a number.',
    'number.min': 'Price must be a positive number.',
    'any.required': 'Price is required.',
  }),
  category: Joi.string()
    .valid('Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious')
    .required()
    .messages({
      'any.only':
        'Category must be one of Fiction, Science, SelfDevelopment, Poetry, or Religious.',
      'any.required': 'Category is required.',
    }),
  description: Joi.string().trim().required().messages({
    'string.empty': 'Description is required.',
    'any.required': 'Description is required.',
  }),
  quantity: Joi.number().min(0).required().messages({
    'number.base': 'Quantity must be a number.',
    'number.min': 'Quantity must be at least 0.',
    'any.required': 'Quantity is required.',
  }),
  inStock: Joi.boolean().required().messages({
    'boolean.base': 'InStock must be a boolean value.',
    'any.required': 'InStock is required.',
  }),
});

// Validation schema for updating a product
export const updateProductValidationSchema = Joi.object({
  price: Joi.number().min(0).optional().messages({
    'number.base': 'Price must be a number.',
    'number.min': 'Price must be a positive number.',
  }),
  quantity: Joi.number().min(0).optional().messages({
    'number.base': 'Quantity must be a number.',
    'number.min': 'Quantity must be at least 0.',
  }),
});
