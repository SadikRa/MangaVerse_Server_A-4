/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import { ProductRoutes } from './app/models/Product/Product.Route';
import { OrderRoutes } from './app/models/Order/Order.Route';
import { UserRouters } from './app/models/users/User.Route';
import notFound from './app/middlewares/notFound';
import { AuthRouters } from './app/models/Auth/Auth.Route';
import { PaymentRoutes } from './app/models/payment/Payment.Route';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cookieParser());

// CORS
app.use(cors({ origin: 'https://manga-verse-chi.vercel.app', credentials: true }));

// Application routes

//product
app.use('/api', ProductRoutes);

// order
app.use('/api', OrderRoutes);

//users
app.use('/api/users', UserRouters);

//auth
app.use('/api/auth', AuthRouters);

//auth
app.use('/api/payment', PaymentRoutes);

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
