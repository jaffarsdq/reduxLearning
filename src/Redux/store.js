import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';
import modalReducer from './Slices/modalSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});
