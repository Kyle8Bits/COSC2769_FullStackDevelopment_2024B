const express = require("express");
const { customers, products, orders } = require("./data");
const cors = require("cors")
const { save_orders } = require ('./storage')
const port = 2222;  
const app = express();


app.use(cors())

app.get('/customers', (req,res) =>{
    try{
      return res.json(customers);
    }catch{
      res.status(404).json({msg: 'Not found'})
    }
})
 
app.get('/customers/:id', (req,res) =>{
  try{
    const id = parseInt(req.params.id); 

    const customer  = customers.find(c =>{
      return c.id === id;
    })

    if (customer.length === 0){
      res.status(404).json({msg: 'Not found'})
    }

    const order = orders.filter(o=> o.customer_id === id).map(od=>{
      return {
        product_id: od.product_id,
        quantity: od.quantity
      };
    })


    const result ={
      customer,
      orders: order
    }

    return res.json(result)
  }
  catch{
    res.status(404).json({msg: 'Not found'})
  }
})

/**
 * GET "/customers/:id/total": return a JSON object {total_price: X},
 * which X is the total amount of all orders of a particular customer with the given id parameter. 
 * When calculating the total amount, the sell_off attribute applies.
 */
app.get('/customers/:id/total', (req,res)=>{
  try{  

    // get customer ID from parameters
    const customerID = parseInt(req.params.id); 

    // get array of customer orders BY customer ID
    const customerOrder = orders.filter(odr => odr.customer_id === customerID);

    // get product cost BY product ID in customer Order
    if(customerOrder.length <= 0){
      return res.status(400).json({msg: 'Cannot find the order'});
    } else {
      // calculate total cost
      return res.json({
        total_price: calculateOrderTotal(customerOrder)
      })
    }

  }catch (err){
    console.log(err)
    res.status(404).json({msg: 'Not found'})
  }
})

/**
 * This function that calculates a total
 * @param {*} customerOrder array of customer orders
 * @returns total cost of all items ordered based on a customer's order
 * Example input - [{sjajdlkas}]
 * Example output - {total: '$2000'}
 */
const calculateOrderTotal = (customerOrder) => {
  //initialize variale totalPrice
  let total = 0;

  //check for each customerOrder find products => product_id = id
  customerOrder.forEach(order => {
    // find the product in the product list by ID
   const product = products.find(x => x.id === order.product_id)
  

  // check for product sell off
  if(product.sell_off){
    //price with sell of percent
    total += product.price*order.quantity*(1-product.percent/100);
  }
  else{
    //price without sell of percent
    total += product.price*order.quantity
  }

  });
  
  //return total price
  return total;
}

app.post('/save_orders', async (req, res) => {
  try {
    // Call the asynchronous save_orders function
    await save_orders();

    // Send back a JSON response when done
    res.json({ msg: "finished" });
  } catch (error) {
    console.error('Error in /save_orders route:', error);
    res.status(500).json({ msg: "An error occurred" });
  }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  