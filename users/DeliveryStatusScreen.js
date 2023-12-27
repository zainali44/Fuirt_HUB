import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';

const DeliveryStatusScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackTouch}>
          <IconButton
            icon="chevron-left"
            color="black"
            size={25}
            marginLeft={-30}
            backgroundColor={'transparent'}
            onPress={() => {}}
          />
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Status</Text>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <Image
            source={require('../assets/ordertaken.png')}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Order Taken</Text>
          <Image source={require('../assets/tick.png')} style={styles.checkIcon} />
        </View>
        <View style={styles.dottedLine} />
        <View style={styles.statusItem}>
          <Image
            source={require('../assets/orderprep.png')}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Order Is Being Prepared</Text>
          <Image source={require('../assets/tick.png')} style={styles.checkIcon} />
        </View>
        <View style={styles.dottedLine} />
        <View style={styles.statusItemSpecial}>
          <Image
            source={require('../assets/orderdeliver.png')}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Order Is Being Delivered</Text>
          <Image source={require('../assets/call.png')}
          style={styles.checkIcon} />
        </View>
        <View style={styles.dottedLine1} />
        <Image style={styles.map} source={require('../assets/map.png')} />
        
        <View style={styles.dottedLine1} />
        <View style={styles.statusItem}>
          <Image
            source={require('../assets/tick.png')}
            style={styles.statusIcon1}
          />
          <Text style={styles.statusText}>Order Recieved</Text>
            <View style={styles.statusIndicatorContainer}>
                <View style={styles.statusIndicatorActive} />
                <View style={styles.statusIndicator} />
                <View style={styles.statusIndicator} />
            </View>
          
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#23C13E',
    height:130
  },
  goBackTouch: {
    backgroundColor: 'white',
    width: 90,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,

  },
  goBackText: {
    fontSize: 16,
    color: 'black',
    marginLeft:-40
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:20
  },
  statusContainer: {
    padding: 20,
    marginTop:30
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusItemSpecial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  statusIcon1: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    
    color: 'black',
  },
  statusDetailText: {
    fontSize: 16,
    color: 'grey',
  },
  checkIcon: {
    marginLeft: 'auto',
    width: 30,
    height: 30,
  },
  dottedLine: {
    marginTop:-15,
    marginBottom:6,
    height: 40,
    borderLeftWidth: 1,
    borderLeftColor: 'green',
    borderStyle: 'dotted',
    marginLeft: 25,
  },
  dottedLine1: {
    marginTop:-15,
    marginBottom:6,
    height: 20,
    borderLeftWidth: 1,
    borderLeftColor: 'green',
    borderStyle: 'dotted',
    marginLeft: 25,
  },
  map: {
    height: 150,
    width: 350,
    marginBottom: 20,
    borderRadius:15
  },
  statusIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft:130
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginHorizontal: 3,
  },
  statusIndicatorActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
    marginHorizontal: 3,
  },
});

export default DeliveryStatusScreen;