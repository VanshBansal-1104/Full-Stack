const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple in-memory products
const products = [
  { id: 1, name: 'Apple iPhone 14', price: 799 },
  { id: 2, name: 'Samsung Galaxy S23', price: 699 },
  { id: 3, name: 'Google Pixel 7', price: 599 }
];

app.get('/api/products', (req, res) => {
  // simulate a small delay
  setTimeout(() => {
    res.json(products);
  }, 300);
});

app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});
