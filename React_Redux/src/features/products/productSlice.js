import { createSlice } from '@reduxjs/toolkit';
// import { getProducts } from '../../api/products';

const initialState = [
  { id: 1, name: 'Phone', price: 500.00, quantity: 3 },
  { id: 2, name: 'Laptop', price: 2500.00, quantity: 5 },
  { id: 3, name: 'LCD', price: 350.00, quantity: 3 },
  { id: 4, name: 'Headset', price: 100.00, quantity: 2 },
];

// export const fetchProduct =  createAsyncThunk('product/fetchProduct', async ()=>{
//   const data = await getProducts();
//   console.log('data', data);
//   return data;
// })

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
  });
  
  export const { increase, decrease } = productsSlice.actions;
  export default productsSlice.reducer;
  