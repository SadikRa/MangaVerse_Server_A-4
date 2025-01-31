import { z } from 'zod';
export const productValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    title: z.string().trim().nonempty({ message: 'Title is required.' }),
    author: z.string().trim().nonempty({ message: 'Author is required.' }),
    image: z
      .array(z.string().trim())
      .min(1, { message: 'At least one image is required.' }),
    price: z.number().min(0, { message: 'Price must be a positive number.' }),
    category: z.enum(
      [
        'Shonen',
        'Shojo',
        'Seinen',
        'Slice of life',
        'Sports manga',
        'Josei',
        'Isekai',
        'Mecha',
        'Fantasy',
        'Sci-Fi',
        'Horror',
        'Psychological',
        'Mystery',
        'Thriller',
        'Romance',
        'Supernatural',
        'Historical',
        'Adventure',
        'Comedy',
        'Drama',
      ],
      { message: 'Invalid category. Choose from the predefined manga genres.' },
    ),
    description: z
      .string()
      .trim()
      .nonempty({ message: 'Description is required.' }),
    quantity: z.number().min(0, { message: 'Quantity must be at least 0.' }),
    inStock: z.boolean(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    price: z
      .number()
      .min(0, { message: 'Price must be a positive number.' })
      .optional(),
    quantity: z
      .number()
      .min(0, { message: 'Quantity must be at least 0.' })
      .optional(),
  }),
});
