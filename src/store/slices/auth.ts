import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    login: string;
    password: string;
    name: string;
}

interface IAuth {
    isAuth: boolean;
    user: IUser | null;
}

const initialState: IAuth = { isAuth: false, user: null };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuth>) {
            state.isAuth = true;
            state.user = action.payload.user;
        },
        logout(state) {
            state.isAuth = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
