import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Chat({name,message,gambar,time,totalMessage}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          source={gambar}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View
        style={{ flex: 2, justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/check.png")}
            style={{ width: 12, height: 8 }}
          />
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.notify}>
          <Text style={{color:'white',fontSize:12}}>{totalMessage}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 50,
    height: 50,
  },
  content: {
    flex: 2,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginLeft: 5,
  },
  notify: {
    backgroundColor: "#4ECC5E",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
