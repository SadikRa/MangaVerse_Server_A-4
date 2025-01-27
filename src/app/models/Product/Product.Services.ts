import { Product } from "./Product.Interface";
import { ProductModel } from "./Product.Model";


// create a book
const createBookIntoDB = async (book: Product) => {
  const result = await ProductModel.create(book);
  return result;
};

/// get all book
const getAllBooksFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get a book
const getABookFromDB = async (_id: string) => {
  const result = ProductModel.findOne({ _id });
  return result;
};

//update a book
const UpdateABook = async (_id: string, book: Partial<Product>) => {
  const result = await ProductModel.findByIdAndUpdate(_id, book , { new: true, runValidators: true } );
  return result;
};

//delete a book
const deleteABook = async (_id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id });
  return result;
};

export const ProductServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getABookFromDB,
  UpdateABook,
  deleteABook,
};
