import { View, Text } from "react-native";
import React from "react";
import Router from "./Router";
import UserProvider from "./Context/UserProvider";

export default function index() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
