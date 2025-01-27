"# l2-a2-book-shop-api"

# BookShop API

BookShop API is a simple RESTful API books in a bookshop. It allows you to perform CRUD (Create, Read, Update, Delete) operations on books and manage their stock and details.

---

## Features

Implement CRUD operations in the controller.

- Books Management
Create a new book.
Read details of a specific book or all books.
Update book details
Delete a book from the inventory.
- Order Management
Order a Book: Deducts stock quantity and updates inStock status.
Calculate Revenue: Computes the total revenue from all orders using aggregation.

---

## Technologies Used

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **TypeScript**
- **eslint**
- **prettier**
- **dotenv**
- **cors**
- **joi**


---

## install link

- node -v
- npm -v
- npm install express
- npm install mongoose
- npm install -g typescript
- tsc --init
- npm install --save-dev prettier
- npm install dotenv
- npm install cors
- npm i joi

### Project Structure

l2-a2-book-shop-api/
├── src/
│       ├── app/
│   │   ├── models/
│   │      ├── bookShop/
│   │      │   ├── bookShopRoutes/          
│   │      │   ├── bookShopInterface/          
│   │      │   ├── bookShopModel/          
│   │      │   ├── bookShopControllers/    
│   │      │   ├── bookShopServices/        
│   │      │   ├── validation/        
│   │                         
│   ├── ErrorFile/                           
│   ├── index.ts                             
├── .env                                     
├── tsconfig.json                           
├── package.json                           



## API Endpoints

- Books
POST /api/products - Create a new book.
GET /api/products - Retrieve all books.
GET /api/products/:productId - Retrieve a specific book.
PUT /api/products/:productId - Update a specific book.
DELETE /api/products/:productId - Delete a specific book.
- Orders
POST /api/orders - Place an order for a book.
GET /api/orders/revenue - Calculate total revenue.

### gitHub link

Clone the repository:

```bash
git clone https://github.com/SadikRa/l2-a2-book-shop-api

```

## For deployment 
 - Vercel
 ```bash
 npm i -g vercel
```
 - vercel --prod

- my vercel vercel deploy server link:   https://l2-a2-book-shop-api.vercel.app/"# MangaVerse_Server_A-4" 
