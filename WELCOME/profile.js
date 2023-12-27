import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const NewProfile = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./IMG_4105.jpg')} style={styles.profilePic} />
        <Text style={styles.name}>Mr. Haris</Text>
        <Text style={styles.location}>Islamabad</Text>
        <Text style={styles.location}>Since 2022</Text>
      </View>
      <View style={styles.walletSection}>
        <View style={styles.walletInfo}>
          <Text style={styles.walletLabel}>Wallet</Text>
          <Text style={styles.walletAmount}>PKR125</Text>
        </View>
        <View style={styles.spentInfo}>
          <Text style={styles.spentLabel}>Spent</Text>
          <Text style={styles.spentAmount}>PKR 2K+</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('./heart.png')} />
        <Text style={styles.buttonText}>Your Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('./Payment1.png')} />
        <Text style={styles.buttonText}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('./tellfriends.png')} />
        <Text style={styles.buttonText}>Tell Your Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('./promotions.png')} />
        <Text style={styles.buttonText}>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Settingscreen')}}>
        <Image style={styles.icon} source={require('./settings.png')} />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('./logout.png')} />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#23C13E',
  },
  name: {
    color: '#23C13E',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  location: {
    fontSize: 16,
    color: 'grey',
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderWidth: 1,
    margin: 30,
  },
  walletInfo: {
    alignItems: 'center',
  },
  spentInfo: {
    alignItems: 'center',
  },
  walletLabel: {
    fontSize: 16,
    color: 'grey',
  },
  walletAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#23C13E',
  },
  spentLabel: {
    fontSize: 16,
    color: 'grey',
  },
  spentAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#23C13E',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default NewProfile;