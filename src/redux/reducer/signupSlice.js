import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
    name: "signup",
    initialState:{},
    reducers:{
        add(state, action){},
        del(state, action){},
    }
});

export const {add, del} = signupSlice.actions;
export default signupSlice.reducer;