import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Reducers/AuthSlice";
import functioningReducer from "./Reducers/FunctioningSlice";
const store = configureStore({
	reducer: {
		auth:authReducer,
		functioning:functioningReducer,	
	}
})
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch