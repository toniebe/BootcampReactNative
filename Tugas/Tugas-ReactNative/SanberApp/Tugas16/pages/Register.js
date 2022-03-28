import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyCg0qZc97ewm2P9-KnkztPLWg7MulGyXbw",
    authDomain: "authenticationfirebasern-943c6.firebaseapp.com",
    projectId: "authenticationfirebasern-943c6",
    storageBucket: "authenticationfirebasern-943c6.appspot.com",
    messagingSenderId: "987322301253",
    appId: "1:987322301253:web:e4914e3f82b5899df71c2c",
  };

  // Initialize Firebase
  if (!getApps().length) {
    initializeApp(firebaseConfig);
    console.log(getApps());
  }

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>Register</Text>
      </View>
      <View style={styles.content}>
        {/* <Input label={"Username"} placeholder={"username"} colorText={"#131200"} /> */}
        <Input
          label={"Email"}
          placeholder={"Email"}
          colorText={"#131200"}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          label={"Password"}
          placeholder={"Password"}
          colorText={"#131200"}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {/* <Input label={"Retype Password"} placeholder={"Retype Password"} colorText={"#131200"} /> */}
      </View>
      <View style={styles.containerButton}>
        <Button
          bgColor={"#131200"}
          text={"Register"}
          textColor={"white"}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78BC61",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 2,
    // paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 50,
  },
});
