import { createSlice } from '@reduxjs/toolkit'


const initialState= {
   
   price1: false,
   price2: false,
   price3: false,
   men:false,
   women:false,
   smartWatch:false,
   patekPhilippe:false,
   rolex:false,
   audemarsPiguet:false,
   hublot:false,
   zenith:false,
   omega:false,
   Breitling:false,
   richardMille:false,
   garmin:false,
   ByNavWomen:false,
   ByNavMen:false,
   ByNavSmartWatch:false,

  }

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        myPrice1:(state,action)=>{
        state.price1 = action.payload;
      },
        myPrice2:(state,action)=>{
          state.price2 = action.payload;
      },
        myPrice3:(state,action)=>{
        state.price3 = action.payload;
      },
      mymen:(state,action)=>{
        state.men = action.payload;
        

      },
      mywomen:(state,action)=>{
        state.women = action.payload;

      },
      mysmartWatch:(state,action)=>{
        state.smartWatch = action.payload;

      },
      myPatekPhilippe:(state,action)=>{
        state.patekPhilippe = action.payload;
      },
      myrolex:(state,action)=>{
        state.rolex = action.payload;

      },
      myaudemarsPiguet:(state,action)=>{
        state.audemarsPiguet = action.payload;
      },
      myhublot:(state,action)=>{
        state.hublot = action.payload;

      },
      myzenith:(state,action)=>{
        state.zenith = action.payload;

      },
      myomega:(state,action)=>{
        state.omega = action.payload;
      },
      myBreitling:(state,action)=>{
        state.Breitling = action.payload;

      },
      myrichardMille:(state,action)=>{
        state.richardMille = action.payload;
      },
      mygarmin:(state,action)=>{
        state.garmin = action.payload;

      },
      MyByNavWomen:(state,action)=>{
        state.ByNavWomen = action.payload;
        state.ByNavMen = false;
        state.ByNavSmartWatch = false;
      },
      MyByNavMen:(state,action)=>{
        state.ByNavMen = action.payload;
        state.ByNavSmartWatch = false;
        state.ByNavWomen = false;
      },
      MyByNavSmartWatch:(state,action)=>{
        state.ByNavSmartWatch = action.payload;
        state.ByNavMen = false;
        state.ByNavWomen = false;

      },
      allValueOff:(state)=>{
        state.price1 = false;
        state.price2 = false;
        state.price3 = false;
        state.men = false;
        state.women = false;
        state.smartWatch = false;
        state.patekPhilippe = false;
        state.rolex = false;
        state.audemarsPiguet = false;
        state.hublot = false;
        state.zenith = false;
        state.omega = false;
        state.Breitling = false;
        state.richardMille = false;
        state.garmin = false;
        state.ByNavWomen = false;
        state.ByNavMen = false;
        state.ByNavSmartWatch = false;
      }
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { myPrice1,
    myPrice2,
    myPrice3,
    mymen,
    mywomen,
    mysmartWatch,
    myPatekPhilippe,
    myrolex,
    myaudemarsPiguet,
    myhublot,
    myzenith,
    myomega,
    myBreitling,
    myrichardMille,
    mygarmin,
    MyByNavWomen,
    MyByNavMen,
    MyByNavSmartWatch,
} = productSlice.actions;
  
  export default productSlice.reducer;