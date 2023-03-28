import { configureStore } from "@reduxjs/toolkit";
import categoriaReducer from "./categoriaSlice";
import carritoReducer from "./carritoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedCategoria = persistReducer(persistConfig, categoriaReducer);
const persistedCarrito = persistReducer(persistConfig, carritoReducer);

const store = configureStore({
  reducer: {
    categoria: persistedCategoria,
    carrito: persistedCarrito,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
