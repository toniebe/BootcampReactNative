import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
	isSignedIn: false,
};

export const authSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isSignedIn = true;
			SecureStore.setItemAsync("token", action.payload.token);
		},
		logout: (state) => {
			state.isSignedIn = false;
			SecureStore.deleteItemAsync("token");
		},
	},
});

export const { login, logout } = authSlice.actions;
