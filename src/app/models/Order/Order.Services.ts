import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { ProductModel } from '../Product/Product.Model';
import { Order } from './Order.Interface';
import { OrderModel } from './Order.Model';
import QueryBuilder from '../../builder/QueryBuilder';
import { JwtPayload } from 'jsonwebtoken';

//order a book
const OrderABook = async (order: Order, user: JwtPayload) => {
  if (order.email !== user.email) {
    throw new AppError(StatusCodes.FORBIDDEN, "You can't create an order for another customer.");
  }

  const product = await ProductModel.findById(order.product);
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Product not found.');
  }

  if (product.quantity < order.quantity) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Insufficient stock available.');
  }

  const totalPrice = order.quantity * product.price;

  product.quantity -= order.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const result = await OrderModel.create({
    ...order,
    totalPrice,
  });

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

///change status
const changeOrderStatus = async (_id: string, status: string) => {
  const order = await OrderModel.findOneAndUpdate(
    { _id: _id },
    { status },
    { new: true },
  );

  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order Not Found');
  }

  return order;
};

//delete order

const deleteOrder = async (_id: string) => {
  const order = await OrderModel.findOne({
    _id,
    is_deleted: true,
  });
  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'order Not Found');
  }

  const result = await OrderModel.findOneAndDelete({ _id });
  return result;
};

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
  changeOrderStatus,
  deleteOrder,
};
