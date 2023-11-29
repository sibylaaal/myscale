import { AuthSlice } from "./Auth/AuthReducer";
import { configureStore } from '@reduxjs/toolkit';

export const store=configureStore({
    reducer:{
        Auth: AuthSlice.reducer
    }
})

