import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  where,
  collection,
} from "@firebase/firestore";
import { db } from "../../fireBase";
const initialState: { categories: any; quizes: any } = {
  categories: [],
  quizes: [],
};
export const getCategories = createAsyncThunk(
  "functionalities/getCategories",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "CategoryOfQuiz"));
      return querySnapshot.docs.map((item) => item.data());
    } catch (error) {
      console.log(error);
    }
  }
);
export const getACategoryQuizes = createAsyncThunk(
  "functionalities/getACategoryQuizes",
  async (category: any) => {
    try {
      const docRef = doc(db, "CategoryOfQuiz", `${category}`);
      const docSnap = await getDoc(docRef);
      const docSnapData= docSnap.data();
      return [docSnapData?.quiz1,docSnapData?.quiz2];
    } catch (error) {
      console.log(error);
    }
  }
);
const functionalitiesSlice = createSlice({
  name: "functionalities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getACategoryQuizes.fulfilled, (state, action) => {
        state.quizes = action.payload;
      });
  },
});
export default functionalitiesSlice.reducer;
