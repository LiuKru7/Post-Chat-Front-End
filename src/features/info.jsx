import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice( {
    name:"info",
    initialState: {
        toolbar : 1,
        user: [],

    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToolbar: (state,action) => {
            state.toolbar = action.payload
        }
    }
})
export const {setUser,
    setUsername,
    setToolbar

} = infoSlice.actions

export default infoSlice.reducer