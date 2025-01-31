import { Schema, model } from 'mongoose';
import { Product } from './Product.Interface';

const productSchema = new Schema<Product>(
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
    image: {
      type: [String],
      required: true,
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const ProductModel = model('Product', productSchema);
