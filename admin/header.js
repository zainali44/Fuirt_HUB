import React from "react";

import { IconButton, Avatar } from 'react-native-paper';

import { View, Text, StyleSheet, TextInput, TouchableOpacity , FlatList} from "react-native";

import HorizontalScroll from "./horizontalscroll";

import Orders from "./orders";

import { useNavigation } from '@react-navigation/native';

export default function Header() {
    
    const navigation = useNavigation();

    return (
        <FlatList
        data={[{ key: 'header' }]} // Add a dummy key for FlatList
        renderItem={({ item }) => (
        <View>
            <View style={styles.container}>
                <IconButton
                    icon="format-align-left"
                    color="grey"
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
                <Text style={styles.title}>Admin</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Avatar.Image size={50} source={require('../assets/zain.jpg')} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginLeft: 30,
                }}
            >
                <Text style={{ fontSize: 23, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>
                    Hello Zain
                </Text>
                <Text style={{ fontSize: 15, color: "#000", fontFamily: "poppins" }}>
                    Welcome to Admin Panel
                </Text>
            </View>
            <TextInput
                style={{
                    height: 45,
                    margin: 12,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#F5F5F5",
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 20,
                }}
                placeholder="Find your Product"
                placeholderTextColor="grey"
            />

            {/* //Category and View All Button to right  */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 30,
                    marginRight: 30,
                }}
            >
                <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>
                    Category
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: "grey", fontFamily: "poppins" , fontSize: 15, fontFamily: "poppins" }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <HorizontalScroll />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 30,
                    marginRight: 30,
                }}
            >
                <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>
                    View latest Orders
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: "grey", fontFamily: "poppins" , fontSize: 15, fontFamily: "poppins" }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#fff", padding: 16 }}>
                <Orders />
            </View>
        </View>
        )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
});