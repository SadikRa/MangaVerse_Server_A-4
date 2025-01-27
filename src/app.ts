import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/models/bookShop/bookShopRoutes/Product.Route';
import { OrderRoutes } from './app/models/bookShop/bookShopRoutes/Order.Route';
import { errorHandler } from './ErrorFile/errorHandler';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', ProductRoutes);
app.use('/api', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('hElLo SaDik');
};

app.get('/', getAController);

app.use(errorHandler);

export default app;
