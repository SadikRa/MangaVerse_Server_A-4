import express from 'express';
import { productControllers } from '../bookShopControllers/Product.Controllers';

const router = express.Router();
//post a book 
router.post('/products', productControllers.createBook);

//get all book 
router.get('/products', productControllers.GetAllBook);

//get a book
router.get('/products/:productId', productControllers.GetABook);

//update a book 
router.put('/products/:productId', productControllers.UpdateABook);

//delete a book 
router.delete('/products/:productId', productControllers.deleteABook);

export const ProductRoutes = router;