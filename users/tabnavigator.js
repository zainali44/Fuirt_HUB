import React from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Card, IconButton, Text } from "react-native-paper";


import HorizontalScroll2 from "./horizontalscroll2";




const Tab = createMaterialTopTabNavigator();

export default function Tabnavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, fontWeight: "bold" },
        indicatorStyle: { backgroundColor: "#000" },
      }}
    >
      <Tab.Screen name="Fruits" component={ProductList} />
      <Tab.Screen name="Vegetables" component={ProductList} />
      <Tab.Screen name="Salads" component={ProductList} />
      <Tab.Screen name="Juices" component={ProductList} />
      
    </Tab.Navigator>
  );
}

const ProductList = () => {
  
 
  return (
    <View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  
});
