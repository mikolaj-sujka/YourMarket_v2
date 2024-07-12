import mongoose from 'mongoose';
import dotenv from "dotenv";
import Product from './infrastrcture/models/product.js'; 

dotenv.config();

const uri = "mongodb+srv://mikolajsujka:mikolajsujka123@cluster0.i4zrhmb.mongodb.net/?authMechanism=DEFAULT"

if (!uri) {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1); // Exit the process with an error code
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to database!');
    seedProducts();
  })
  .catch((error) => {
    console.log('Connection failed!', error);
  });

const seedProducts = async () => {
  const products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.0,
      productId: '1',
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 20.0,
      productId: '2',
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 30.0,
      productId: '3',
    },
    {
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 40.0,
      productId: '4',
    },
    {
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 50.0,
      productId: '5',
    },
    {
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 60.0,
      productId: '6',
    },
    {
      name: 'Product 7',
      description: 'Description for Product 7',
      price: 70.0,
      productId: '7',
    },
    {
      name: 'Product 8',
      description: 'Description for Product 8',
      price: 80.0,
      productId: '8',
    },
    {
      name: 'Product 9',
      description: 'Description for Product 9',
      price: 90.0,
      productId: '9',
    },
    {
      name: 'Product 10',
      description: 'Description for Product 10',
      price: 100.0,
      productId: '10',
    },
  ];

  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.log('Error seeding products:', error);
    mongoose.connection.close();
  }
};

seedProducts();
