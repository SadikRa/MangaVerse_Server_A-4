/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import { ProductRoutes } from './app/models/Product/Product.Route';
import { OrderRoutes } from './app/models/Order/Order.Route';
import { UserRouters } from './app/models/users/User.Route';
import { AuthRouters } from './app/models/Auth/Auth.Route';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cookieParser());

// CORS
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// Application routes
app.use('/api/product', ProductRoutes);
app.use('/api/order', OrderRoutes);
app.use('/api/users', UserRouters);
app.use('/api/auth', AuthRouters);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Sadik !');
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});

// Not Found middleware
app.use(notFound);

export default app;
