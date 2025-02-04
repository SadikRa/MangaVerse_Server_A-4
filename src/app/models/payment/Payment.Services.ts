import PaymentModel from './Payment.Model';
import { orderUtils } from './Payment.utils';
import QueryBuilder from '../../builder/QueryBuilder';
import { TUser } from '../users/User.Interface';
import { OrderModel } from '../Order/Order.Model';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';

const createPaymentIntent = async (
  user: TUser,
  id: string,
  client_ip: string,
): Promise<string> => {
  const order = await OrderModel.findById(id);
  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order not found');
  }

  const shurjopayPayload = {
    amount: order.totalPrice, 
    currency: 'BDT',
    customer_name: user.name,
    customer_email: user.email,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);
  return payment.checkout_url; // Ensure this is the correct field
};

const getAllPayments = async (query: Record<string, unknown>) => {
  const paymentQuery = new QueryBuilder(PaymentModel.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await paymentQuery.modelQuery;
  const meta = await paymentQuery.countTotal();
  return { result, meta };
};

export const paymentService = {
  createPaymentIntent,
  getAllPayments,
};
