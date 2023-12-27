import React from "react";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { Icon, Text } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/config";

import { useNavigation } from "@react-navigation/native";

import zain from "../assets/zain.jpg";

export default function Profile() {

    const navigation = useNavigation();

    const auth = getAuth(app);

    const logout = () =>
        signOut(auth).then(() => {
            ToastAndroid.show("Logout Successful", ToastAndroid.SHORT);
            navigation.navigate('User Login')
        }
        ).catch((error) => {
            ToastAndroid.show("Logout Failed", ToastAndroid.SHORT);
        }
        );



    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 200 / 2, alignSelf: "center", marginTop: 20, borderColor: "black", borderWidth: 1 }}
                    source={zain}
                />
                <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center", marginTop: 30 }}>ZAIN ALI</Text>

                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: "black", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}>
                        <Text style={{ color: "white" }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Icon source="account-plus" size={30} />
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Icon source="dots-vertical" size={30} />
                    </View>
                </View>

                <View style={{ marginTop: 30, backgroundColor: "#FAF8FF", padding: 15, margin: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="map-marker" size={25} color="#FBCB0A" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>
                                Location</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "grey" }}>Street 1, House 2, Islamabad</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 10, backgroundColor: "#FAF8FF", padding: 15, margin: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="clock-time-nine-outline" size={25} color="#37E2D5" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>Local Time</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "grey" }}>24 December 2023, 12:00 PM</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 10, backgroundColor: "#FAF8FF", padding: 15, margin: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="email-outline" size={25} color="#F73D93" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>Email</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "grey" }}>zainalicomsats@gmail.com </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 10, backgroundColor: "#FAF8FF", padding: 15, margin: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="phone" size={25} color="#EE5007" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>Phone</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "grey" }}>+92 333 1234567</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 10, backgroundColor: "#FAF8FF", padding: 15, margin: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon source="lock" size={25} color="#F73D93" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>Password</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: "grey" }}>********</Text>
                        </View>
                    </View>
                </View>

                {/* Logout */}
                <View style={{ marginTop: 10, padding: 15, margin: 10, borderRadius: 10 }}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={logout}>
                        <Icon source="logout" size={25} color="red" />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 19, marginLeft: 10, fontWeight: "medium", color: "grey" }}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});
