import Joi from "joi";

export const orderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  product: Joi.string().required().messages({
    "string.empty": "Product ID is required",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.min": "Quantity must be at least 1",
    "number.base": "Quantity must be a number",
    "any.required": "Quantity is required",
  }),
  totalPrice: Joi.number().min(0).required().messages({
    "number.min": "Total price must be a positive number",
    "number.base": "Total price must be a number",
    "any.required": "Total price is required",
  }),
});
