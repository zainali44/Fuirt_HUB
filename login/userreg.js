import React from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";

import darklogo from "../assets/darklogo.png";
import { Text, Icon } from "react-native-paper";

import app from "../Firebase/config"; // Import the auth instance
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { ActivityIndicator } from 'react-native-paper';
import { set } from "firebase/database";

export default function UserReg({ navigation }) {

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const auth = getAuth(app); // Get the auth instance

    // Send Post Request to API https://fruit-app-m1ny.onrender.com/api/v1/users/register


    const Register = () => {
        setLoading(true); // Set loading to true when login starts
        // Send Post Request to API https://fruit-app-m1ny.onrender.com/api/v1/users/register
        if (password != confirmpassword) {
            ToastAndroid.show("Password and Confirm Password should be same", ToastAndroid.SHORT);
            setLoading(false);
            return;
        }
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                displayName: username,
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                ToastAndroid.show("Registration Successful", ToastAndroid.SHORT);
                setLoading(false); // Set loading to false when login completes (success or failure)
                navigation.navigate('Login')

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* //Welcome back! Glad to see you, Again!  */}
                <Text style={{ fontSize: 32, fontWeight: "bold", alignSelf: "center", marginTop: 30, marginEnd: 60 }}>Hello! Register to get started!</Text>

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TextInput
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        style={{ backgroundColor: "#F7F8F9", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 20, fontWeight: "semibold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey" }}
                        placeholder="Enter your Username" placeholderTextColor={"#8391A1"} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={{ backgroundColor: "#F7F8F9", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 20, fontWeight: "semibold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey" }}
                        placeholder="Enter your Email" placeholderTextColor={"#8391A1"} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        inlineImageLeft='ic_menu_black_24dp'
                        style={{ backgroundColor: "#F7F8F9", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 20, fontWeight: "semibold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey" }}
                        placeholder="Enter your Password" placeholderTextColor={"#8391A1"} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TextInput
                        value={confirmpassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={true}
                        inlineImageLeft='ic_menu_black_24dp'
                        style={{ backgroundColor: "#F7F8F9", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 20, fontWeight: "semibold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey" }}
                        placeholder="Confirm your Password" placeholderTextColor={"#8391A1"} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TouchableOpacity
                        // call register function
                        onPress={() => Register()}
                        style={{ backgroundColor: "#23C13E", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 18 }}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* //Social Login */}
                <Text style={{ fontSize: 15, fontWeight: "semibold", alignSelf: "center", marginTop: 30 }}>or Register with</Text>
                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 20 }}>
                    <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 40, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Icon source="facebook" size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 40, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Icon source="apple" size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 40, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Icon source="google-plus" size={20} />
                    </TouchableOpacity>
                </View>

                {/* //Don't have an account? */}

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30, paddingLeft: 20, paddingRight: 20, paddingTop: 10, borderRadius: 10, width: 350, fontSize: 20, fontWeight: "semibold", color: "grey" }}>
                    <View style={{ alignItems: "flex-end" }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Text style={{ color: "#8391A1" }}>Having trouble? </Text>
                            <Text style={{ flexDirection: "row", color: "#8391A1", fontWeight: "bold" }}>Contact Support</Text>
                        </View>
                    </View>
                </View>

                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator animating={true} color="black" size="large" />
                    </View>
                )}

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
})
