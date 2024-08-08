// const products = [
//     {id:1 ,name: "iPhone 14", description: "A16 Bionic Chip, Pro Model", price: 1200, weight: 0.2, quantity: 2},
//     {id:2, name: "iPad Pro", description: "M2 Processor, 12.9-inch", price: 1500, weight: 0.7, quantity: 3},
//     {id:3, name: "AirPods Max", description: "Over-ear, Active Noise Cancellation", price: 550, weight: 0.4, quantity: 4},
//     {id:4, name: "Apple Watch Series 8", description: "S8 SiP, 45mm", price: 500, weight: 0.04, quantity: 1},
//     {id:5, name: "Mac Mini", description: "M2 Processor, 16GB RAM", price: 800, weight: 1.2, quantity: 7}
// ]


// export async function getProducts(){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve(products),1000)
//     });
// }


// export async function getProductID(id){
//     return new Promise((resolve)=> {
//         let prod = {};
//         setTimeout(()=>{
//             for(let std of products){
//                 if(std.id === id){
//                     resolve(std);
//                     return;
//                 }
//             }
//             resolve(prod);
//         },1000);
//     });
// }