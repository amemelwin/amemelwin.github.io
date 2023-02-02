import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
    dark: localStorage.getItem('dark') ? localStorage.getItem('dark') : 'light',
    //"https://worldtimeapi.org/api/timezone/Asia/Yangon"
    mmTime: `${new Date().toISOString()}`,
    //https://worldtimeapi.org/api/timezone/Asia/Tokyo
    jpTime: `${new Date().toISOString()}`,
    //https://worldtimeapi.org/api/timezone/Europe/London
    enTime: `${new Date().toISOString()}`,
}
export const defaultSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<string>) => {
            state.dark = action.payload;
        },
        setMmTime: (state, action: PayloadAction<string>) => {
            state.mmTime = action.payload;
        },
        setJpTime: (state, action: PayloadAction<string>) => {
            state.jpTime = action.payload;
        },
        setEnTime: (state, action: PayloadAction<string>) => {
            state.enTime = action.payload;
        },
    },
});

export const { setDarkMode, setMmTime, setJpTime, setEnTime } = defaultSlice.actions;
export default defaultSlice.reducer;