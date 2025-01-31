import express from 'express';
import { productControllers } from './Product.Controllers';
import validateRequest from '../../middlewares/validateRequest';
import {
  productValidationSchema,
  updateProductValidationSchema,
} from './Product.Validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/User.Constant';

const router = express.Router();
//post a book
router.post(
  '/products',
    auth(USER_ROLE.admin),
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
  auth(USER_ROLE.admin),
  validateRequest(updateProductValidationSchema),
  productControllers.UpdateABook,
);

//delete a book
router.delete('/products/:productId', auth(USER_ROLE.admin), productControllers.deleteABook);

export const ProductRoutes = router;
