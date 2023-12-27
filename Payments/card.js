import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import card from "../assets/card.png";
import card2 from "../assets/card2.png";


export default function PaymentCard() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.card}>
          <Image source={card} style={styles.cardImage} />
        </View>
        <View style={styles.card}>
          <Image source={card2} style={styles.cardImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  scrollView: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 190,
    backgroundColor: "#3498db",
    marginRight: 20,
    borderRadius: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
