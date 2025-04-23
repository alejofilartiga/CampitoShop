import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    createOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    clearOrders: state => {
      return {
        ...state,
        orders: null,
      };
    },
  },
});

export const {
  createOrderFail,
  clearOrders
} = ordersSlice.actions;

export default ordersSlice.reducer;
