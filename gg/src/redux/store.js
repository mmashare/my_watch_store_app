// store.js
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "../redux/userData.js"
import productReducer from "../redux/filterValue.js"
import AddToCartReducer from "../redux/addtoCartRedux.js"
import AuthReducer from '../redux/authToggle.js'
export const store = configureStore({
  reducer: {
   user:UserReducer,
   product:productReducer,
   addToCartt:AddToCartReducer,
   authToggle:AuthReducer,
  },

})