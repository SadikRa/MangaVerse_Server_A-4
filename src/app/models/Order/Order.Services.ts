import { ProductModel } from "../Product/Product.Model";
import { Order } from "./Order.Interface";
import { OrderModel } from "./Order.Model";

//order a book
const OrderABook = async (order: Order) => {
  const product = await ProductModel.findById(order.product);

  if (!product) {
    throw new Error('Product not found');
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

//Calculate Revenue Orders
const CalculateRevenueOrders = async () => {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$totalPrice", 1] } },
        },
      },
    ]);
  
    return result.length > 0 ? result[0].totalRevenue : 0;
  };

export const OrderServices = {
  OrderABook,
  CalculateRevenueOrders
};
