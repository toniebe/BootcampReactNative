import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { UserContext } from "../Tugas14/Context/UserProvider";

export default function Login({navigation}) {
  const {email,setEmail,password,setPassword,setIsSigned} = useContext(UserContext)
  
  const handleLogin = () => {
    setIsSigned(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 24, color: "#78BC61",fontWeight:'bold' }}>Toni Portfolio</Text>
      </View>
      <View style={styles.containerInput}>
        <Input label={"Email"} colorText={"#78BC61"} value={email} onChange={(event) => setEmail(event.nativeEvent.text)} />
        <Input label={"Password"} colorText={"#78BC61"} value={password} onChange={(event) => setPassword(event.nativeEvent.text)} secureTextEntry={true} />
      </View>
      <View style={styles.button}>
        <Button bgColor={"#78BC61"} text={"Login"} textColor={"white"} onPress={() => handleLogin()} />
      </View>
      <View style={styles.register}>
        <Text style={{ fontSize: 14, color: "white" }}>Belum punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
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
