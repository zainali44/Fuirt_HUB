import React from "react";

import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from "react-native";

import { Card, Title, Paragraph, Button, Avatar, Icon } from 'react-native-paper';

import * as Progress from 'react-native-progress';

import { useNavigation } from '@react-navigation/native';

export default function AllUsers() {

    const [loading, setLoading] = React.useState(true);

    const [data, setData] = React.useState([]);

    const [quantity, setQuantity] = React.useState(1);

    const [name, setName] = React.useState("");

    const [email, setEmail] = React.useState("");

    const [password, setPassword] = React.useState("");

    const [phone, setPhone] = React.useState("");

    const [address, setAddress] = React.useState("");

    const [image, setImage] = React.useState("");

    const [role, setRole] = React.useState("");

    const [id, setId] = React.useState("");

    const navigation = useNavigation();

    React.useEffect(() => {
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/users')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    console.log("Data :", data);

    const deleteUser = (id) => {
        fetch(`https://fruit-app-m1ny.onrender.com/api/v1/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                ToastAndroid.show("User Deleted Successfully", ToastAndroid.SHORT);
                navigation.navigate('AllUsers');
            })
            .catch((error) => {
                console.error(error);
                ToastAndroid.show("User Deletion Failed", ToastAndroid.SHORT);
            });
    }

    const updateUser = (id) => {
        fetch(`https://fruit-app-m1ny.onrender.com/api/v1/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                address: address,
                image: image,
                role: role
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                ToastAndroid.show("User Updated Successfully", ToastAndroid.SHORT);
                navigation.navigate('AllUsers');
            })
            .catch((error) => {
                console.error(error);
                ToastAndroid.show("User Updation Failed", ToastAndroid.SHORT);
            });
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    // horizontal={true}
                    // showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                >
                    {/* Product Card */}
                    {data.map((item) => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 20 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Avatar.Image size={45} source={require('../assets/profile.jpg')} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>{item.displayName}</Text>
                                    <Text style={{ fontSize: 13, color: "#000", fontFamily: "poppins" }}>{item.email}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity>
                                    <Icon source="update" size={18} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteUser(item.uid)}>
                                    <Icon source="delete" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </ScrollView>
            </View>
        );
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        scrollView: {
            marginTop: 10,
            marginBottom: 20,
        },
        avatarList: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            height: 30,
            width: 30,
            marginRight: -20,
            backgroundColor: 'gray',
            borderRadius: 25,
            borderWidth: 2,
            borderColor: 'white',
            shadowColor: '#999',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
        },

    });

