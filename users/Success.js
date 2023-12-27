import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const Success = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('../assets/success_img.png')}
         style={styles.image}/>

      </View>

      <View style={styles.container2}>
        <Text style={styles.text1}>Congratulations!!!</Text>
        <Text style={styles.text2}>Your order has been taken</Text>
        <Text style={styles.text2}>and is being attended to</Text>
      
      {/* </View>
      <View> */}
        <TouchableOpacity
          style={styles.trackbutton}
          onPress={()=>{navigation.navigate('DeliveryStatusScreen')}}
        >
          <Text style={styles.tracktext}>Track order</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shoppingbutton}
          onPress={()=>{navigation.navigate('User')}}

        >
          <Text style={styles.continuetext}>Continue Shopping</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,

  },
  container1:{
    flex:0.45,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  image:{
   height:200,
   width:200,
   
  },

  container2:{
    flex:0.5,
    margin:30,
    alignItems:"center",
    
    // backgroundColor:'blue'
  },

  text1:{
    color:'black',
    fontSize:28,
    margin:10
  },
  text2:{
    color:'black',
    fontSize:16,
    margin:2,
    
  },


  trackbutton:{
    backgroundColor:"#23C13E",
    width:140,
    height:60,
    borderRadius:15,
    margin:50,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  tracktext:{
    color:'white',
    fontSize:16
  },


  shoppingbutton:{
    backgroundColor:"white",
    borderWidth:1,
    borderColor:'#23C13E',
    width:200,
    height:60,
    borderRadius:15,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  continuetext:{
    color:'#23C13E'
  }

})