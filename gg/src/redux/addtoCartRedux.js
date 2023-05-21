import { createSlice } from '@reduxjs/toolkit'


const initialState= {
    // currentUser me user ki ID save hogi
  productID: [],
  price:[0],
  quantity:0,
  }

export const AddToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
      // productIdAdd:(state,action)=>{
      //   state.productID.push((JSON.parse(sessionStorage?.getItem("ProductID") || "{}")));
        
      // },

      // quantityAdd:(state,action)=>{
      //     state.quantity = action.payload;
      //     sessionStorage.setItem(
      //       "quantity",
      //       JSON.stringify(state.quantity)
      //     );

      // },
      priceAdder:(state,action)=>{
        state.price.push([...state.price + Number(action.payload)]);
      }
      
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {priceAdder} = AddToCartSlice.actions;
  
  export default AddToCartSlice.reducer;