import { z } from 'zod';

export const orderValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .nonempty({ message: 'Email is required' }),
    product: z.string().nonempty({ message: 'Product ID is required' }),
    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1' })
      .refine((value) => Number.isInteger(value), {
        message: 'Quantity must be a number',
      }),
    totalPrice: z
      .number()
      .min(0, { message: 'Total price must be a positive number' })
      .refine((value) => typeof value === 'number', {
        message: 'Total price must be a number',
      }),
  }),
});
