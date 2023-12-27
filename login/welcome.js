import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fuirthub from '../assets/logo.png'

const Welcome = () => {
  return (
    <View style={styles.back}>
        <View style={styles.back1}>
        <Image source={fuirthub}
        style={styles.image} />

        </View>
        <View style={styles.back2}>
            <Text style={styles.text1}>Get the freshest fruit salad combo</Text>
            <Text style={styles.text2}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>

            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text>Let's Continue</Text>
            </TouchableOpacity>
        </View>
    
    </View>
  )
}

export default Welcome

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
    text2:{
        color:'black',
        fontSize:15,
        marginLeft:33,
        marginRight:50
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
        marginLeft:45
    }
})