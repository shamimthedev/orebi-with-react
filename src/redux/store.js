import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import orebiReducer from "./orebiSlice";

// Persist config
const persistConfig = {
  key: "orebi", // More descriptive key instead of "root"
  version: 1,
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, orebiReducer);

// Store configuration
export const store = configureStore({
  reducer: { orebi: persistedReducer }, // Updated key for better state structure
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
