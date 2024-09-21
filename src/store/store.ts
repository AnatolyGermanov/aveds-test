import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './slices/auth';

export const store = configureStore({
    reducer: { auth: AuthReducer },
});

export type IStoreState = ReturnType<typeof store.getState>;
