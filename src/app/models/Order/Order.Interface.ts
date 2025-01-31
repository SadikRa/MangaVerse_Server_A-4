import { Types } from 'mongoose';

type TPaymentStatus = 'pending' | 'paid' | 'failed' | 'cancelled';
type TStatus = 'pending' | 'processing' | 'done';

export type Order = {
  _id?: string;
  email: string;
  product: Types.ObjectId;
  status: TStatus;
  payment_status: TPaymentStatus;
  transaction_id?: string;
  quantity: number;
  totalPrice: number;
  isDeleted: boolean;
};
