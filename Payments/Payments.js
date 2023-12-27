import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";

import PaymentCard from "./card";

import PaymentInfo from "./PaymentInfo";

export default function Payments() {
  return (
    <View style={styles.container}>
      <PaymentCard />
      <PaymentInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
