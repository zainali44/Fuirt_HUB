import React from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";

import darklogo from "../assets/darklogo.png";
import { Text, Icon } from "react-native-paper";

import app  from "../Firebase/config"; // Import the auth instance
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from 'react-native-paper';

export default function Login ({navigation}) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const auth = getAuth(app); // Get the auth instance

  const login = () => {
    setLoading(true); // Set loading to true when login starts
    console.log("Email: ", email);
    console.log("Password: ", password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User: ", user);
        ToastAndroid.show("Login Successful", ToastAndroid.SHORT);
        navigation.navigate('MyTabs')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorMessage);
        console.log("Error Code: ", errorCode);
        ToastAndroid.show("Login Failed", ToastAndroid.SHORT);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when login completes (success or failure)
      });
  };

  return (
    <View style={styles.container}>
      {/* //Welcome back! Glad to see you, Again!  */}
      <Text style={{ fontSize: 32, fontWeight: "bold", alignSelf: "center", marginTop: 30, marginEnd: 30 }}>Welcome back! Glad to see you, Again!</Text>
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

      <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "flex-end", gap: 30, paddingLeft: 20, paddingRight: 20, paddingTop: 10, borderRadius: 10, width: 350, fontSize: 20, fontWeight: "semibold", color: "grey" }}>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: "#8391A1" }}>Forgot Password?</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30 }}>
        <TouchableOpacity 
        onPress={login}
        style={{ backgroundColor: "black", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 350, height: 50, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* //Social Login */}
      <Text style={{ fontSize: 20, fontWeight: "semibold", alignSelf: "center", marginTop: 30 }}>or Login with</Text>
      <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 20 }}>
        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 60, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
          <Icon source="facebook" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 60, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
          <Icon source="apple" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 10, width: 100, height: 60, fontSize: 24, fontWeight: "bold", borderColor: "#E8ECF4", borderWidth: 1, color: "grey", justifyContent: "center", alignItems: "center" }}>
          <Icon source="google-plus" size={30} />
        </TouchableOpacity>
      </View>

      {/* //Don't have an account? */}

      <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", gap: 30, paddingLeft: 20, paddingRight: 20, paddingTop: 10, borderRadius: 10, width: 350, fontSize: 20, fontWeight: "semibold", color: "grey" }}>
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row" , gap: 5}}>
            <Text style={{ color: "#8391A1" }}>Don't have an account? </Text>
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
