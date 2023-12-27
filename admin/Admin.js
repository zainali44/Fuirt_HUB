import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";

import Header from "./header";


export default function Admin() {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
