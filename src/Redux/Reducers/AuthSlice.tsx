import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth,createUserDocument} from "./../../fireBase"
import {
  // InitialState,
  Details} from  "./Types";

// commented code on this page is not removed for further use
export const logIn = createAsyncThunk("auth/logIn", async function (details:Details){
  const email = details.email,
  password = details.password;
  try {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(user ? user : null));
    return user;
  } catch (error:any) {
    console.log(error.response);
  }
});

export const signUp = createAsyncThunk("auth/signUp", async function (details:Details) {
  const email = details.email,
    password = details.password;
  try {
    const {user} = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
     localStorage.setItem("user", JSON.stringify(user ? user : null));
     createUserDocument(user, {
      email: user.email,
      id: user.uid,
      score:0
    });    
    return user;
  } catch (error:any) {
    console.log(error.response);
  }
});
type InitialState={
    currentUser:any;
    loading:boolean    
}
const initialState:InitialState={
    currentUser:{},
    loading:false,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(logIn.fulfilled,(state,action:{payload:any})=>{
            state.currentUser=action.payload;
        })
        .addCase(signUp.fulfilled,(state,action:{payload:any})=>{
            state.currentUser=action.payload;
        })

     
    }
})
export default authSlice.reducer;