import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

const welcome = () => {
    const [name, setname] = useState('')

  return (
    <View style={styles.back}>
        <View style={styles.back1}>
        <Image source={require('./fruit2.png')} style={styles.image} />

        </View>
        <View style={styles.back2}>
            <Text style={styles.text1}>What is your firstname?</Text>
            <TextInput style={styles.firstname}
            placeholder='Zain'
            placeholderTextColor={"#C8C3C3"}
            value={name}
            onChangeText={(text)=>{
                setname(text);
            }}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text>Start Ordering</Text>
            </TouchableOpacity>
        </View>
    
    </View>
  )
}

export default welcome

const styles = StyleSheet.create({
    back:{
        backgroundColor:'#23c13e',
        flex:1
    },
    back1:{
        backgroundColor:'#23c13e',
        flex:0.55
    },
    back2:{
        backgroundColor:'#fbfcf8',
        flex:0.45
    },
    text1:{
        color:'black',
        fontSize:20,
        margin:25,
        marginTop:70,
        fontFamily:'bold '

    },
    firstname:{
        color:'black',
        fontSize:15,
        marginLeft:25,
        marginRight:50,
        backgroundColor:"#F3F1F1",
        borderRadius:10,
        width:333
    },
    button:{
        backgroundColor:'#23c13e',
        margin:25,
        textAlign:'center',
        alignItems:"center",
        justifyContent:'center',
        height:65,
        borderRadius:10

    },
    image:{
        width:300,
        height:300,
        margin:100,
        marginLeft:42
    }
})