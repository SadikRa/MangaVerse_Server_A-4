import PaymentModel from './Payment.Model';
import { orderUtils } from './Payment.utils';
import QueryBuilder from '../../builder/QueryBuilder';
import { OrderServices } from '../Order/Order.Services';
import { TUser } from '../users/User.Interface';

const createPaymentIntent = async (user: TUser, payload: any, client_ip: string) => {
  const shurjopayPayload = {
    amount: payload.totalPrice,
    currency: 'BDT',
    customer_name: user.name,
    customer_email: user.email,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);
  return payment.checkout_url;
};

const verifyPayment = async (order_id: string) => {
  return await OrderServices.verifyPayment(order_id);
};

const getAllPayments = async (query: Record<string, unknown>) => {
  const paymentQuery = new QueryBuilder(PaymentModel.find(), query).filter().sort().paginate().fields();
  const result = await paymentQuery.modelQuery;
  const meta = await paymentQuery.countTotal();
  return { result, meta };
};

export const paymentService = {
  createPaymentIntent,
  verifyPayment,
  getAllPayments,
};
