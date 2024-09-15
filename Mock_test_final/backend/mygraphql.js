const { customers, products, orders } = require("./data");
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
  } = require("graphql");

const getCustomerByLetter = (name) =>{
    if (name === "*") {
        return customers;
    }

    return customers.filter((customer) => customer.name.includes(name));
}

const getQuantity = (id) =>{
    let total = 0;
    
    const product = orders.filter(o => o.product_id === id);

    product.map(p => total+= p.quantity);

    return total
}


const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields:{
        id: { type: GraphQLInt},
        name: { type: GraphQLString },
        address: { type: GraphQLString },
    }
})

//products {id, name, price, sell_off, percent, quantity_sold} 
const ProductType = new GraphQLObjectType({
    name: "Product",
    fields:{
        id: { type: GraphQLInt},
        name: { type: GraphQLString },
        price: { type: GraphQLFloat, resolve: (prd) => {
            const price = prd.price || 0; // Provide default value if price is null or undefined
            const percent = prd.percent || 0; // Provide default value if percent is null or undefined
            return price * (1 - percent / 100); // Calculate discounted price
          }},
        sell_off: {type: GraphQLBoolean},
        percent: {type: GraphQLFloat, resolve: (prd) => (prd.sell_off ? prd.percent : 0)},
        quantity_sold: {type: GraphQLInt, 
            resolve: (prd) => getQuantity(prd.id)
        }

    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
       name: "Query",
       fields: {
        customers: {
            type: new GraphQLList(CustomerType),
            args: {name: {type: GraphQLString}},
            resolve: (parrent, args) => getCustomerByLetter(args.name)
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve: () => products,
        }
       },
    })
})



const app = express();
app.all("/graphql", createHandler({ schema }));
app.listen(2222, () => {
console.log("Server started");
});