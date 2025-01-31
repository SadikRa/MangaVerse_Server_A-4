import { z } from 'zod';

export const CreateOrderValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .nonempty({ message: 'Email is required' }),

    product: z
      .string()
      .nonempty({ message: 'Product ID is required' })
      .refine((id) => id.match(/^[0-9a-fA-F]{24}$/), {
        message: 'Invalid product ID format',
      }),

    status: z.enum(['pending', 'processing', 'done']).default('pending'),

    payment_status: z
      .enum(['pending', 'paid', 'failed', 'cancelled'])
      .default('pending'),

    transaction_id: z.string().optional(),

    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1' }),

    totalPrice: z
      .number()
      .min(0, { message: 'Total price must be a positive number' }),

    isDeleted: z.boolean().optional(),
  }),
});




export const OrderValidationSchema = {
  CreateOrderValidationSchema
};