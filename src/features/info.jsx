import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice( {
    name:"info",
    initialState: {
        toolbar : 1,
        user: "",
        userInfo: [],
        showPost: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToolbar: (state,action) => {
            state.toolbar = action.payload
        },
        setShowPost: (state,action) => {
            state.showPost = action.payload
        },
        setUserInFo: (state, action) => {
            state.userInfo = action.payload
        }
    }
})
export const {setUser,
    setToolbar,
    setShowPost,
    setUserInFo


} = infoSlice.actions

export default infoSlice.reducer