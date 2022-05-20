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
const initialState: {
  categories: any;
  quizes: any;
  result: number;
  resultStore: { question: string; answer: string; optionSelected: String }[];
} = {
  categories: [],
  quizes: [],
  resultStore: [],
  result: 0,
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
      const docSnapData = docSnap.data();
      return [docSnapData?.quiz1, docSnapData?.quiz2];
    } catch (error) {
      console.log(error);
    }
  }
);
const functionalitiesSlice = createSlice({
  name: "functionalities",
  initialState,
  reducers: {
    resultStoreUpdate(state, action) {
      const newArr = action.payload.map((item: any, i: number) => ({
        ...item[`Question${i + 1}`],
        optionSelected: "",
      }));
      state.resultStore = newArr;
    },
    updateResultStore(state, action) {
      // question with optionSelected

      const indexOfQuestionInStore = state.resultStore.findIndex(
        (item) => item.question === action.payload.question
      );
      state.resultStore[indexOfQuestionInStore].optionSelected =
        action.payload.optionSelected;
    },
    calculateResult(state){
    const result=state.resultStore.reduce(
        (
          acc:number,
          curr: any
        ) => {
          if(curr.optionSelected.toLowerCase()==curr.answer.toLowerCase()){return acc+=20;}
          else return acc;
        },
        0
      );
      state.result = result;
    },
  },
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
export const { resultStoreUpdate, updateResultStore, calculateResult } =
  functionalitiesSlice.actions;
export default functionalitiesSlice.reducer;
