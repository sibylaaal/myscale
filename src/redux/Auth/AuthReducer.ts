import { createSlice } from "@reduxjs/toolkit";



 export const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        isLogged:false,
        user:{}
    },
    reducers:{

    login:(state,action)=>{
        state.isLogged=true;
        state.user=action.payload;
    },
    logout:(state)=>{
        state.isLogged=false;
        state.user={};
    }

    }
})


export const {login,logout}=AuthSlice.actions
