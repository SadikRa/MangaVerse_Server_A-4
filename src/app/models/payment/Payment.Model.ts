// Payment.Model.ts
import { Schema, model } from 'mongoose';
import { TPayment } from './Payment.Interface';

const PaymentSchema = new Schema<TPayment>(
  {
    userEmail: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'cancelled'],
      required: true,
      default: 'pending',
    },
    transaction_id: { type: String, required: true, unique: true },
    totalPrice: { type: Number, required: true },
    payment_gateway_data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

const PaymentModel = model<TPayment>('Payment', PaymentSchema);
export default PaymentModel;
