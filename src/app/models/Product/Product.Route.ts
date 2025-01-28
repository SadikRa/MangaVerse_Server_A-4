import express from 'express';
import { productControllers } from './Product.Controllers';
import validateRequest from '../../middlewares/validateRequest';
import {
  productValidationSchema,
  updateProductValidationSchema,
} from './productValidation';

const router = express.Router();
//post a book
router.post(
  '/products',

  validateRequest(productValidationSchema),

  productControllers.createBook,
);

//get all book
router.get('/products', productControllers.GetAllBook);

//get a book
router.get('/products/:productId', productControllers.GetABook);

//update a book
router.put(
  '/products/:productId',

  validateRequest(updateProductValidationSchema),
  productControllers.UpdateABook,
);

//delete a book
router.delete('/products/:productId', productControllers.deleteABook);

export const ProductRoutes = router;
