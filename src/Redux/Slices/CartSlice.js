import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems.js';
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
});

export default CartSlice.reducer;
