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
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { forStylesReducer } from "../redux/forStylesSlice";

const forStylConfig = {
    key: 'forStyles',
    storage,
    blacklist: ['screenOrientation']
};

export const store = configureStore({
    reducer: {
        forStyles: persistReducer(forStylConfig, forStylesReducer)
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);