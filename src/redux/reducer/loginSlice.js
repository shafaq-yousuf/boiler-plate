import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers:{
        add(state, action){
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        del(state, action){},
    }
})
export const {add, del} = loginSlice.actions;
export default loginSlice.reducer;