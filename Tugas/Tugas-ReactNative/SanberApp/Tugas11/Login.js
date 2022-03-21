import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 24, color: "#78BC61",fontWeight:'bold' }}>Toni Portfolio</Text>
      </View>
      <View style={styles.containerInput}>
        <Input label={"Email"} colorText={"#78BC61"} />
        <Input label={"Password"} colorText={"#78BC61"} />
      </View>
      <View style={styles.button}>
        <Button bgColor={"#78BC61"} text={"Login"} textColor={"white"} />
      </View>
      <View style={styles.register}>
        <Text style={{ fontSize: 14, color: "white" }}>Belum punya akun?</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#78BC61" }}>Daftar Disini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131200",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  register: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
