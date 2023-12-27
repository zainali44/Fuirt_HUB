import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Button, Icon, Switch } from 'react-native-paper';

export default function PaymentInfo() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addNewCard}>
                <Text style={styles.newCardText}>
                    <Icon
                        source="plus-circle"
                        color={"#23C13E"}
                        size={20}
                        style={styles.icon}
                    />
                    Add New Card
                </Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 20, color: "#595E68" , fontSize: 17, fontWeight: "bold"}}>
                Card Owner
            </Text>
            <TextInput style={styles.TextInput} placeholder="ZAIN ALI" placeholderTextColor={"#A4B0BE"} />

            <Text style={{ marginTop: 20, color: "#595E68" , fontSize: 17, fontWeight: "bold"}}>
                Card Number
            </Text>
            <TextInput style={styles.TextInput} placeholder="1234 5678 9101 1121" placeholderTextColor={"#A4B0BE"} />


            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <View style={{ width: "48%" }}>
                    <Text style={{ color: "#595E68" , fontSize: 17, fontWeight: "bold"}}>
                        Expiry Date
                    </Text>
                    <TextInput style={styles.TextInput} placeholder="MM/YY" placeholderTextColor={"#A4B0BE"} />
                </View>
                <View style={{ width: "48%" }}>
                    <Text style={{ color: "#595E68" , fontSize: 17, fontWeight: "bold"}}>
                        CVV
                    </Text>
                    <TextInput style={styles.TextInput} placeholder="123" placeholderTextColor={"#A4B0BE"} />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
                <Text style={{ marginLeft: 10, color: "#A4B0BE" , fontSize: 17, fontWeight: "bold"}}>
                    Save Card Info
                    </Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#23C13E" />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    addNewCard: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#23C13E",
        borderRadius: 10,
        alignItems: "center",
    },
    newCardText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#23C13E",
    },
    icon: {
        marginRight: 10,
    },

    TextInput: {
        marginTop: 20,
        color: "#000",
        backgroundColor: "#F5F6FA",
        borderRadius: 10,
        height: 50,
        padding: 10,
    },
});
