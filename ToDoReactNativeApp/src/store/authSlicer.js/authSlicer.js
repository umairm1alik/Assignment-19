const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import auth from '@react-native-firebase/auth';


import { db } from "../../config/Firebase";
import Navigation from '../../navigation/Navigation';


export const getCurrentUser = createAsyncThunk("user/currentUser", async (Navigation) => {
    try {

        const user = auth().currentUser;

        if (!user) {
            Navigation.navigate('Login');
            return;
        }   

        console.log('user in current user action', user);

        const snapShot = await db.collection('users').where("userId", "==", user?.uid || "").get()

       

        snapShot.forEach(item => {
            data = { docId: item.id, ...item.data() }
        })

        return data



        // const user= auth().onAuthStateChanged(user)
        // auth()
        //     .onAuthStateChanged((user) => {
        //         if (!user) {
                    // const currentUser=user
                    // console.log("user Email", currentUser.email);
                    // console.log("user uid", currentUser.uid);
                    // console.log("user NAme", currentUser.displayName);
                    // // return{userEmail:user.email, currentUserId:user.uid}
                    // return currentUser
                // }
                // return user


            // });
    } catch (error) {
        Navigation.navigate('Login');
        console.log("error in getting current user action", error);
    }
})


export const doSignup = createAsyncThunk("user/signup", async (user) => {

    try {
        const res = await auth()
            .createUserWithEmailAndPassword(
                user.email,
                user.password
            )

        console.log("user added ", res);



        await db.collection("users").add(
            { name: user.name, email: user.email, userId: res?.user?.uid || '' }

        )
        
            return user
    } catch (error) {
        alert(error)
    }
})

export const doLogin = createAsyncThunk("user/login", async (user, Navigation) => {
    console.log("user in do Login action", user)
    try {
        const userResponse = await auth()
            .signInWithEmailAndPassword(
                user.email,
                user.password

            )
        console.log('userResponse in doLogin action', userResponse);
        // if(!userResponse){
            // Navigation.navigate("Login")
            // return
        // }

        let snapshot = await db
            .collection('users')
            .where('userId', '==', userResponse?.user?.uid || '')
            .get();
        let data = {};
        snapshot.forEach(item => {
            data = { docId: item.id, ...item.data() };
        });

        return data;

        // console.log("user added succesfully", res);
    } catch (error) {
        alert( error);
        Navigation.navigate("Login")
        
    }
})

export const userSignOut = createAsyncThunk("user/signOut", async () => {
    try {
        auth()
            .signOut(() => {
                console.log("User SignOut");
            });

    } catch (error) {
        
        alert(error)
        
    }
})



const authSlicer = createSlice({
    name: "authentication",
    initialState: {
        user: {},
        isUserLoggedIn: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(doSignup.fulfilled, (state, action) => {
                // console.log('do sign up action', action);
                state.user = action.payload;
                alert("User created successfully!")
                state.isUserLoggedIn = true
                
            })
            .addCase(doLogin.fulfilled, (state, action) => {
                console.log('do login action', action);
            
                state.user = action.payload;
                state.isUserLoggedIn = true;
                
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                console.log('get current user reducer', action);
                if(action.payload.docId){
                    state.user = action.payload;
                    state.isUserLoggedIn = true;
                }
            })
            .addCase(userSignOut.fulfilled, (state, action) => {
                state.user = null
                state.isUserLoggedIn = false

            })
    }
})


export default authSlicer.reducer