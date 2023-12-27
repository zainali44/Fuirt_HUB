import React from "react";
import { 
    View, 
    Text,
    Image
} from "react-native";
import logo from "./assets/logo.png";
function Splash() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "#fff" }}>
            <Image source={logo} />
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
                Welcome to Fuirthub</Text>
        </View>
    );
}

export default Splash;
