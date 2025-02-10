import { addProduct as addProductToCart, removeProduct as removeProductFromCart } from "./cartFunctions";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    hidden: true
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: INITIAL_STATE,
        reducers:{
            addProduct: (state, action) => {
                return{
                    ...state,
                    cartItems: addProductToCart(state.cartItems, action.payload)
                }
            },
            removeProduct: (state, action) => {
                return{
                    ...state,
                    cartItems: removeProductFromCart(state.cartItems, action.payload)
                }
            },
            clearCart: state => {
                return{
                    ...state,
                    cartItems: []
                }
            },
            toggleHiddenCart: state => {
                return{
                    ...state,
                    hidden: !state.hidden
                }
            }
        }
    }
)

export const { addProduct, removeProduct, clearCart, toggleHiddenCart } = cartSlice.actions;

export default cartSlice.reducer;

