
const express = require('express')
const server = express();
const cors = require('cors');

server.use(cors());

const products = [
  { id: 1, name: 'Phone',description: "Apple", price: 500.0, quantity: 3 },
  { id: 2, name: 'Laptop',description: "Apple", price: 2500.0, quantity: 5 },
  { id: 3, name: 'LCD',description:"Samsung", price: 350.0, quantity: 3 },
  { id: 4, name: 'Headset',description:"Bose", price: 100.0, quantity: 2 },
];

// GET request
server.get('/', (req, res) => {
  console.log(req)
  res.json({ message: 'get data' });
});

// POST request
// server.post('/', (req, res) => {
//   res.json({ message: 'create data' });
// });

// // PUT request
// server.put('/', (req, res) => {
//   res.json({ message: 'update data' });
// });

// // DELETE request
// server.delete('/', (req, res) => {
//   res.json({ message: 'delete data' });
// });

// // Handle all other requests
// server.use((req, res) => {
//   res.status(404).json({ message: 'not found' });
// });

server.get('/products', (req,res) =>{
  res.json(products);
})

// Start the server

server.listen(2222,()=>{
  console.log("Server start");
});