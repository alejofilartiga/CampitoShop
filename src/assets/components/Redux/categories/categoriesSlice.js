import { createSlice } from "@reduxjs/toolkit"; 
import Categories from "../../../data/Categories"

const INITIAL_STATE = {
    categories: Categories,
    selectedCategory: null,
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        }, 
        getCategories: state => {
            return state
        }
    }
});

export const { selectCategory, getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;