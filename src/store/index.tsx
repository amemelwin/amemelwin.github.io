import { configureStore } from '@reduxjs/toolkit';
import defaultSlice from './reducer/defaultSlice';

export const store = configureStore({
    reducer: {
        dark: defaultSlice
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;