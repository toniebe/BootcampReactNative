import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>Register</Text>
      </View>
      <View style={styles.content}>
        <Input label={"Username"} placeholder={"username"} colorText={"#131200"} />
        <Input label={"Email"} placeholder={"Email"} colorText={"#131200"} />
        <Input label={"Password"} placeholder={"Password"} colorText={"#131200"} />
        <Input label={"Retype Password"} placeholder={"Retype Password"} colorText={"#131200"} />
      </View>
      <View style={styles.containerButton}>
          <Button bgColor={"#131200"} text={"Register"} textColor={"white"} />
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
