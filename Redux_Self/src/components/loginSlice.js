import { createSlice } from "@reduxjs/toolkit";

import hashAccount from  '../sample_data/account.json' assert {type: 'json'};

const initialState = {
    accounts: hashAccount.accounts,
    isAuth: false,
    currentUser: null
}


const loginSlice = createSlice({
    name: 'login',
    initialState, //data 123
        reducers:{
            login(state,action){
                const {username, password} = action.payload;
                const user = state.accounts.find((acc) => acc.username===username && acc.password === password);

                if(user){
                    state.isAuth = true;
                    state.currentUser = user;
                }
                else{
                    state.isAuth = false;
                    state.currentUser = null
                }
                
            },
            signOut(state) {
                state.isAuthenticated = false;
                state.currentUser = null;
            },
        },
        
});

export const { login, signOut } = loginSlice.actions;
export default loginSlice.reducer;