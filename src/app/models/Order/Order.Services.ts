import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { ProductModel } from '../Product/Product.Model';
import { Order } from './Order.Interface';
import { OrderModel } from './Order.Model';
import QueryBuilder from '../../builder/QueryBuilder';

//order a book
const OrderABook = async (order: Order) => {
  const product = await ProductModel.findById(order.product);

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'book Not Found');
  }

  if (product.quantity < order.quantity) {
    throw new Error('Insufficient stock available');
  }

  product.quantity -= order.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const result = await OrderModel.create(order);
  return result;
};

//get all order
const getAllOrder = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(
    OrderModel.find().populate('product'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await orderQuery.modelQuery;
  const meta = await orderQuery.countTotal();

  return { result, meta };
};

//get a single order
const getSingleOrderById = async (_id: string) => {
  const order = await OrderModel.findOne({ _id }).populate('product');
  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order Not Found');
  }
  return order;
};

//

//Calculate Revenue Orders
const CalculateRevenueOrders = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$totalPrice', 1] } },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  OrderABook,
  getAllOrder,
  CalculateRevenueOrders,
  getSingleOrderById,
};
