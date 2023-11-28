import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
     name: 'carCart',
     initialState,
     reducers:{
         addtoCart(state, action){
            state.push(action.payload) 
         },

         deletefromCart(state, action){
  return state.filter(item => item.id !== action.payload.id)
         }
     }
})

export const {addtoCart, deletefromCart} = cartSlice.actions;

export default cartSlice.reducer