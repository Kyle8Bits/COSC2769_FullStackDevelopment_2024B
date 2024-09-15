import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'http://localhost:2222/customers';

export const getCustomer = createAsyncThunk("customer/getCustomer",async ()  => {
    try{
      const res = await fetch(URL, { method: "GET" });
      const json = await res.json();
      return json;
    }
    catch(err){
      console.log(err);
    }
  }
);

const initialState = {
    status: 'idle',
    customers:[],
  };
  
  const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
      toggleFavorite(state, action){
        const customerId = action.payload;

        const customer = state.customers.find(c => c.id === customerId)

        if(customer) {
          customer.isFavor = !customer.isFavor;
        }
      }

    },
    extraReducers(builder) {
      builder
        .addCase(getCustomer.fulfilled, (state,action)=>{
          state.status = 'success'
          state.customers = action.payload.map(newCustomer => {

            const existingCustomer = state.customers.find(c => c.id === newCustomer.id);
            
            return existingCustomer 
              ? { ...newCustomer, isFavor: existingCustomer.isFavor }
              : { ...newCustomer, isFavor: false };
          });
        })
        .addCase(getCustomer.rejected, (state)=>{
          state.status = 'rejected';
        })
    }
  })

  export const {toggleFavorite} = customerSlice.actions;
  export default customerSlice.reducer;