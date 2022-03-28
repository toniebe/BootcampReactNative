import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";

export default function About({route,navigation}) {

  const {email} = route.params;
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 28, color: "#78BC61" }}>Tentang Saya</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/profile2.png")}
          style={styles.profile}
        />
        <View style={styles.name}>
          <Text style={{ color: "#78BC61", fontSize: 24 }}>{email}</Text>
          <Text style={{ color: "#C0C781", fontSize: 14 }}>
            React Native Developer
          </Text>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Text style={{ color: "#131200", fontSize: 40, marginVertical: 10 }}>
          Portfolio
        </Text>
        <Text>Lihat Project yang sudah saya kerjakan di</Text>
        <View style={styles.iconContainer}>
          <View>
            <AntDesign name="github" size={50} color="black" />
            <Text>@toniebe</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <AntDesign name="linkedin-square" size={50} color="black" />
            <Text>Ahmad Fathoni Zumaro</Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Text style={{ color: "#131200", fontSize: 40, marginVertical: 10 }}>
          Kontak
        </Text>
        <Text>Temukan dan terhubung dengan saya melalui</Text>
        <View style={styles.media}>
          <FontAwesome name="whatsapp" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>082320043994</Text>
        </View>
        <View style={styles.media}>
          <AntDesign name="linkedin-square" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>Ahmad Fathoni Zumaro</Text>
        </View>
        <View style={styles.media}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>ahmadfathonizumaro@gmail.com</Text>
        </View>
      </View>
      <View>
        <Button
          bgColor={"#78BC61"}
          text={"Logout"}
          textColor={"white"}
          onPress={() => handleLogout()}
        />
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
    flex: 0.5,
    marginHorizontal: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  name: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  portfolio: {
    flex: 2,
    backgroundColor: "#78BC61",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  iconContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
  },
  media: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
