import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, StatusBar, Touchable, TouchableOpacity, Modal, Pressable, Alert, TextInput, ToastAndroid } from "react-native";
import { IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const Basket = () => {

  const { navigate } = useNavigation();

  const [cartdata, getCartData] = React.useState([]);
  const [NumberofItems, setNumberofItems] = React.useState(0);
  const [Phone, setPhone] = React.useState('');
  const [Address, setAddress] = React.useState('');


  React.useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@cart')
        let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
        console.log("Cart :", cart);
        getCartData(cart);
        setNumberofItems(cart.length);
      } catch (e) {
        console.log("Error :", e);
      }
    }
    getData();
  }
    , []);

  const deleteItem = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart')
      let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
      console.log("Cart :", cart);
      cart = cart.filter((cartItem) => cartItem.id !== item.id);
      await AsyncStorage.setItem('@cart', JSON.stringify(cart));
      getCartData(cart);
      setNumberofItems(cart.length);
    } catch (e) {
      console.log("Error :", e);
    }
  }

  const placeOrder = async () => {

    // Get Products from AsyncStorage
    const ProductsItemsID = [];
    const jsonValue = await AsyncStorage.getItem('@cart');
    let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
    console.log("Cart :", cart);
    cart.forEach((item) => {
      ProductsItemsID.push(item.id);
    });

    const orderItems = cart.map((item) => ({
      quantity: 1, // Assuming a quantity of 1 for each item in the cart
      product: item.id, // Modify this based on your actual product identifier structure
    }));


    if (ProductsItemsID.length == 0) {
      Alert.alert("Please add some items to your cart");
      return;
    }

    console.log("Body: ", JSON.stringify({
      orderItems,
      shippingAddress1: "Address",
      shippingAddress2: "Address",
      city: "Islamabad",
      zip: "100001",
      country: "Pakistan",
      phone: "Phone",
      status: "Pending",
      user: "60b9b0b9e6c9a40015a1b3a5",
    }));

    fetch('https://fruit-app-m1ny.onrender.com/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderItems,
        shippingAddress1: "Address",
        shippingAddress2: "Address",
        city: "Islamabad",
        zip: "100001",
        country: "Pakistan",
        phone: "Phone",
        status: "Pending",
        user: "60b9b0b9e6c9a40015a1b3a5",
      }),

    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Response: ", json);
        ToastAndroid.show("Order placed successfully", ToastAndroid.SHORT);
        // Clear the cart
        AsyncStorage.removeItem('@cart');
        getCartData([]);
        setNumberofItems(0);
        // Navigate to the order details screen
        navigate('Success', { order: json });
      })
      .catch((error) => {
        console.error(error);
        ToastAndroid.show("Order placement failed", ToastAndroid.SHORT);
      });

  }



  const [modalVisible, setModalVisible] = useState(false);
  const myButton = (
    <View style={styles.backbutton}>
     
      
    </View>
  );

  const renderItem = ({ item }) => {

    return (
      <View style={styles.orderContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: item.data.image }}
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.productname}>{item.data.name}</Text>
            <Text style={styles.quantity}>1 x {item.data.price}</Text>
          </View>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.orderPrice}>
            Rs {1 * item.data.price} /-
          </Text>
        </View>

        {/* Delete */}
        <IconButton
          icon="delete"
          iconColor="red"
          size={20}
          onPress={() => deleteItem(item)}
        />

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#23c13e" />

      <View style={styles.header}>
        <Text style={styles.headertext}>
          {myButton}
        </Text>
        <Text style={styles.maintext}>
          My Basket
        </Text>
      </View>
      <View style={styles.container1}>
        <FlatList
          data={cartdata}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

      </View>
      <View style={styles.footer}>
        <View style={styles.leftfoot}>
          <Text style={styles.leftfoottext1}>Total</Text>
          <Text style={styles.leftfoottext2}> {cartdata.reduce((a, c) => a + c.data.price * 1, 0)} /-</Text>
        </View>
        <View style={styles.rightfoot}>
          <TouchableOpacity style={styles.checkout}
            onPress={() => { setModalVisible(true) }}
          >
            <Text style={styles.rightfoottext}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View >
        <Modal style={styles.modalcontainer}
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.uppermodal}>

          </View>
        </Modal>
      </View>
      <View >
        <Modal style={styles.modalcontainer}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: "center", }}>
            <IconButton
              icon="close"
              color="grey"
              size={30}
              borderRadius={50}
              backgroundColor={'white'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.deliverytext}>Dilevery Address</Text>
                <TextInput
                  style={styles.adressinput}
                  color='black'
                  value={Address}
                  placeholder="10th Street, Islamabad"
                  placeholderTextColor={'lightgray'}
                  onChangeText={(text) => { setAddress(text) }}

                />
                <Text style={styles.deliverytext}>Number we can call</Text>
                <TextInput
                  style={styles.adressinput}
                  color='black'
                  value={Phone}
                  placeholder="09090605708"
                  placeholderTextColor={'lightgray'}
                  onChangeText={(text) => { setPhone(text) }}

                />
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={styles.paydelivery}
                    onPress={() => { placeOrder() }}

                  >
                    <Text style={styles.paytext}>Pay on delivery</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.paycard}
                    onPress={() => { navigate('Payments') }}
                  >
                    <Text style={styles.paytext}>Pay with card</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    flex: 0.2,
    backgroundColor: '#23c13e',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"

  },
  header1: {
    backgroundColor: '#23c13e',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {

    


  },
  backbutton: {
    



  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '200',
    fontFamily: 'poppins'
  },
  maintext: {
    fontSize: 25,
    color: 'white',
    marginLeft: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  container1: {
    flex: 0.6,
    padding: 16,
    margin: 5,
    marginTop: '5%'
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    paddingBottom: 20,
    marginTop: 20
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userInfo: {
    marginLeft: 10,
  },
  productname: {
    fontSize: 18,
    color: "#000",
    fontFamily: "poppins",
  },
  orderPrice: {
    fontSize: 15,
    color: "#000",
    fontFamily: 'poppins',
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 13,
    color: "#000",
    fontFamily: "poppins",
    fontWeight: "bold",
  },
  orderDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "poppins",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  footer: {
    flex: 0.2,
    textAlign: 'center',
    alignItems: "center",
    flexDirection: 'row',
  },
  leftfoot: {
    justifyContent: "center",

    flex: 0.4,
    alignItems: "center",
    marginLeft: -15



  },

  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  leftfoottext1: {
    color: 'black',
    fontSize: 16
  },
  leftfoottext2: {
    color: 'black',
    fontSize: 20
  },
  rightfoot: {
    justifyContent: "center",
    flex: 0.6,
    alignItems: "center"

  },
  rightfoottext: {
    color: 'white',
    fontSize: 16
  },
  checkout: {
    backgroundColor: '#23c13e',
    width: 180,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',



  },
  uppermodal: {
    height: '100%',
    backgroundColor: 'gray',
    opacity: 0.4
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 35,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 400,
    marginBottom: -15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


  deliverytext: {
    color: 'black',
    margin: 10,
    marginBottom: -10,
    fontSize: 16
  },
  adressinput: {
    height: 50,
    marginRight: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F3F1F1",
    color: 'black',
    marginRight: 0,
    marginTop: 20,
    marginBottom: 20,

  },
  paydelivery: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
    width: 170,
    height: 70,
    padding: 16,
    borderRadius: 15,
    flex: 0.5,
    margin: 10,
    marginRight: 10,
    justifyContent: 'center'


  },
  paycard: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
    width: 150,
    height: 70,
    padding: 22,
    borderRadius: 15,
    flex: 0.5,
    margin: 10,
    marginLeft: 30,
    justifyContent: 'center'
  },
  paytext: {
    color: 'green',
    fontSize: 15
  },
});

export default Basket;
