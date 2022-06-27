// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// import { db } from "../../config/Firebase";

// export const fetchUser= createAsyncThunk("user/fetch", async () => {
//     try {
//         const usersFetched=await db.collection("users").get() 
        
//         const usersFromFirebase=[]

//         usersFetched.forEach(doc => {
//             usersFromFirebase.push({
//                 userId: doc.id,
//                 ...doc.data()
//             })
//         })
//         return usersFromFirebase
//     } catch (error) {
//         console.log("error in fetchUser action", error);
//     }
// })

// const userSlicer= createSlice({
//     name: "fetchingUser",
//     initialState: {
//         user: []
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchUser.fulfilled, (state, action) => {
//             state.user= action.payload
//         })
//     }
// })

// export default userSlicer.reducer