import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    screenWidth: number,
    screenHeight: number
}

const initialStateForStyles: StateType = {
    screenWidth: 0,
    screenHeight: 0
};

const forStylesSlice = createSlice({
    name: 'forStyles',
    initialState: initialStateForStyles,
    reducers:{
        setScreenOrientation: (state, action) => {
            state.screenWidth = action.payload.screenWidth;
            state.screenHeight = action.payload.screenHeight;
        }
    }
});

export const forStylesReducer = forStylesSlice.reducer;
export const {setScreenOrientation} = forStylesSlice.actions;