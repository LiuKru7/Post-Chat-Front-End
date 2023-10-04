import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice( {
    name:"info",
    initialState: {
        toolbar : 1,
        user: "",
        userInfo: [],
        showPost: false,
        allPosts: [],

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
        },
        setAllPosts: (state, action) => {
            state.allPosts = action.payload
        }
    }
})
export const {setUser,
    setToolbar,
    setShowPost,
    setUserInFo,
    setAllPosts


} = infoSlice.actions

export default infoSlice.reducer