import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Features/Auth/authSlice";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
	},
});
