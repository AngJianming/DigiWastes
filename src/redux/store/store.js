import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";

const store = configureStore({
    reducer: {
        settings: settingsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;