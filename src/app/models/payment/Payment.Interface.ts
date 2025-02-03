import { Types } from 'mongoose';

type TPaymentStatus = 'pending' | 'paid' | 'failed' | 'cancelled';

export type TPayment = {
  userEmail: string;
  orderId: Types.ObjectId;
  status: TPaymentStatus;
  transaction_id: string;
  totalPrice: number;
  payment_gateway_data?: Record<string, unknown>;
};