import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Chat from "./Chat";
import Header from "./components/Header";
import { Data } from "./dummy";

export default function Telegram() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={Data}
        renderItem={({ item }) => {
          return (
            <Chat
              gambar={item.image}
              name={item.name}
              message={item.message}
              totalMessage={item.totalMessage}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
