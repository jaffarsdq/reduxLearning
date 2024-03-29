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
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id != itemId
            );
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            console.log(cartItem);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            cartItem.amount = cartItem.amount > 0 ? cartItem.amount - 1 : 0;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    CartSlice.actions;

export default CartSlice.reducer;
