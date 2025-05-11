import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        loader: "d-none",
        theme: 'light',
        isAuthenticated: false,
        user: null
    },
    reducers: {
        showLoader: (state) => {
            state.loader = "";
        },
        hideLoader: (state) => {
            state.loader = "d-none";
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { 
    showLoader, 
    hideLoader, 
    setTheme, 
    setAuth, 
    setUser 
} = settingsSlice.actions;

export default settingsSlice.reducer;
