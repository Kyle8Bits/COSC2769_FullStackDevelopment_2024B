import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

const initialState = [];

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
  export default productsSlice.reducer;
  