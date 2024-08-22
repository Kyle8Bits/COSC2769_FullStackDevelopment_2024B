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

server.use(express.static('dist'))

server.get('/products', (req,res) =>{
    res.json(products);
  })
  
  // Start the server
  
server.listen(2222,()=>{
    console.log("Server start");
});