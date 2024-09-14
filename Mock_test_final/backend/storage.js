const { customers, products, orders } = require("./data");
const fs = require('fs/promises');
const path = require('path');

/**
 * <customer1_id>, <customer1_name> 
 <product1_id>, <product1_name>, <product1_price>, <quantity1>, <amount1 with sell_off deduction> 
 <product2_id>, <product2_name>, <product2_price>, <quantity2>, <amount2 with sell_off deduction> 
…
 */

const save_orders = async ()=>{

    try{
        const filePath = path.join(__dirname, "order_summary.txt");

        const sortedCustomer = customers.sort((a,b)=> a.id - b.id);

        let fileContent = '';

        sortedCustomer.forEach((c)=>{
            const customerOrder = orders.filter(o => o.customer_id === c.id);

            if(customerOrder.length > 0){
                fileContent += `${c.id}, ${c.name}\n  `  

                customerOrder.forEach(ord =>{
                    const product = products.find(p => p.id === ord.product_id);
                    let amount = product.price * ord.quantity;

                    if (product.sell_off) {
                        amount = amount * (1 - product.percent / 100);
                    }

                    fileContent += `${product.id}, ${product.name}, ${product.price}, ${ord.quantity}, ${amount}`
                })

                fileContent += "\n"
            }
        })
        console.log(fileContent)
        await fs.writeFile(filePath, fileContent, 'utf-8');
        console.log('Order summary saved successfully!');

    } catch (error) {
        console.error('Error saving orders:', error);
    }

}

module.exports = { save_orders };