import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
    email: string;
};

type AuthState = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isHydrated: boolean;
};

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isHydrated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthUser>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        hydrateAuth: (state, action: PayloadAction<AuthUser | null>) => {
            state.user = action.payload;
            state.isAuthenticated = action.payload !== null;
            state.isHydrated = true;
        },
    },
});

export const { hydrateAuth, login, logout } = authSlice.actions;
export default authSlice.reducer;
