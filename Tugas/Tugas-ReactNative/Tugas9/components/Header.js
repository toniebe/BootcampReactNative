import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/drawwer.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex:2}}>
        <Text style={styles.text}>Telegram</Text>
      </View>
      <TouchableOpacity>
        <Image source={require("../assets/search.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'space-around',
    backgroundColor: "#517DA2",
    paddingVertical:19,
    paddingHorizontal:20,
  },
  image: {
    width: 18,
    height: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});
