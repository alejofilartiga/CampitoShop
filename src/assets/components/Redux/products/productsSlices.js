import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "../../../data/ProductsData"; // Verifica que esta ruta sea correcta

const INITIAL_STATE = {
  products: ProductsData,
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;