import { createSlice } from '@reduxjs/toolkit'


const initialState= {
    // currentUser me user ki ID save hogi
   currentUser: null,
    loading:false,
    error:false,
    token:null
  }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginStart:(state)=>{
        state.loading = true;
      },
      loginSuccess:(state,action)=>{
          state.loading = false;
          state.currentUser = action.payload;
          
          sessionStorage.setItem(
            "userID",
            JSON.stringify(state.currentUser,)
          );
         

      },
      tokenSetter:(state,action)=>{
        state.loading = false;
        state.token = action.payload;
        sessionStorage.setItem(
          "token",
          JSON.stringify(state.token,)
        );

    },
      loginFailure:(state)=>{
        state.currentUser = null;
        state.loading = false;
        state.error=false;
      },
      logout:(state)=>{
        state.currentUser = null;
        state.loading = false;
        state.error=false;
        state.token = null;
        sessionStorage.setItem(
          "userID",
          JSON.stringify(null)
        );

      },
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginStart, loginSuccess, loginFailure,logout,tokenSetter } = userSlice.actions;
  
  export default userSlice.reducer;