import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [
  {id:1 ,name: "iPhone 14", description: "A16 Bionic Chip, Pro Model", price: 1200, weight: 0.2, quantity: 2},
  {id:2, name: "iPad Pro", description: "M2 Processor, 12.9-inch", price: 1500, weight: 0.7, quantity: 3},
  {id:3, name: "AirPods Max", description: "Over-ear, Active Noise Cancellation", price: 550, weight: 0.4, quantity: 4},
  {id:4, name: "Apple Watch Series 8", description: "S8 SiP, 45mm", price: 500, weight: 0.04, quantity: 1},
  {id:5, name: "Mac Mini", description: "M2 Processor, 16GB RAM", price: 800, weight: 1.2, quantity: 7}
]

export const fetchProduct =  createAsyncThunk('product/fetchProduct', async ()=>{
  const data = await getProducts();
  console.log('data', data);
  return data;
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  // continued next slide ...
    reducers: {
      increase(state, action) {
        const { id } = action.payload;
        const product = state.find((p) => p.id === id);
        if (product) {
          product.quantity++;
        }
      },
      decrease(state, action) {
        const { id } = action.payload;
        const product = state.find((p) => p.id === id);
        if (product) {
          product.quantity--;
        }
      },
    },
    extraReducers(builder){
      builder
      .addCase(fetchProduct.fulfilled, (state, action)=>{
        console.log('action', action)
        state.push(...action.payload)
      })
      .addCase(fetchProduct.pending, (state, action)=>{
        console.log('peding...')
      })
    },
  });
  
  export const { increase, decrease } = productsSlice.actions;

  export const getProducts = (state) => {
    return state.products;
  }

  export const getProduct = (state,id) => state.products.find((p)=>p.id==id)


  export default productsSlice.reducer;
  