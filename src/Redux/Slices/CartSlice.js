import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems.js';
const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { clearCart } = CartSlice.actions;

export default CartSlice.reducer;
