import { COLOR_BLUE, COLOR_RED, COLOR_YELLOW } from "./saga/Type/types"


const initialState={
    colors: "white",

  }

 export const colorReducer = (state=initialState,action)=>{
      switch (action.type){
          case COLOR_RED:
              return{
                  colors:action.payload
              }
          case  COLOR_BLUE:
              return{
                  colors: action.payload
              }    
          case COLOR_YELLOW:
              return{
                  colors: action.payload
              }    
          default:
              return state;
      }
  }
  