import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, createUserDocument } from "./../../fireBase";
import { InitialState, Details } from "./Types";
import { notifyError } from "./../../Utilities/Notifications";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async function (details: Details) {
    const email = details.email,
      password = details.password;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(user ? user : null));
      return user;
    } catch (error: any) {
      notifyError(error.response);
      console.log(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async function (details: Details) {
    const email = details.email,
      password = details.password;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(user ? user : null));
      createUserDocument(user, {
        email: user.email,
        id: user.uid,
        score: 0,
      });
      return user;
    } catch (error: any) {
      notifyError(error.response.data.error[0]);
      console.log(error.response);
    }
  }
);

const initialState: InitialState = {
  currentUser: {},
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userChecker(state) {
      const user = localStorage.getItem("user");
      if (user) state.currentUser = user;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.fulfilled, (state, action: { payload: any }) => {
        state.currentUser = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action: { payload: any }) => {
        state.currentUser = action.payload;
      });
  },
});
export const { userChecker } = authSlice.actions;
export default authSlice.reducer;
