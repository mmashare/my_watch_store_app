import { createSlice } from '@reduxjs/toolkit'


const initialState= {
    
  myAuthToggle:false
  }

export const AuthToggleSystem = createSlice({
    name: 'authToggle',
    initialState,
    reducers: {
      toggleChanger:(state,action)=>{
        state.myAuthToggle = action.payload;
        
      },

      
      
      
    },
  })
  
  
  export const {toggleChanger} = AuthToggleSystem.actions;
  
  export default AuthToggleSystem.reducer;