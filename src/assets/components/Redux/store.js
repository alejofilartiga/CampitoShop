import { combineReducers, configureStore } from "@reduxjs/toolkit" 
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"

import categoriesReducer from "./categories/categoriesSlice" 
import productsReducer from "./products/productsSlices"
const reducers = combineReducers(
    {
        categories: categoriesReducer,
        products: productsReducer
    }
)

const persistConfig = {
    key: "root",
    storage,
    whiteList: []
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
})

export const persistor = persistStore(store)