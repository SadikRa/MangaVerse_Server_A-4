import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: [
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
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const ProductModel = model('Product', productSchema);
