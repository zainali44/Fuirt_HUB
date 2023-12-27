import React from "react";

import { IconButton, Avatar } from 'react-native-paper';

import { View, Text, StyleSheet, TextInput, TouchableOpacity , FlatList} from "react-native";

import HorizontalScroll from "./horizontalscroll";

import HorizontalScroll2 from "./horizontalscroll2";

// import Orders from "./orders";

import Tabnavigator from "./tabnavigator"

import { Badge } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';


export default function Header() {

  const navigation = useNavigation();

  const [cartdata, getCartData] = React.useState([]);
  const [NumberofItems, setNumberofItems] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@cart');
        let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
        console.log("Cart:", cart);
  
        // Update the state with the correct number of items
        setNumberofItems(cart.length);
        console.log("Number of Items:", cart.length);
      } catch (e) {
        console.log("Error:", e);
      }
    };
  
    getData();
  }, []);
  
    return (
        <FlatList
        data={[{ key: 'header' }]} // Add a dummy key for FlatList
        renderItem={({ item }) => (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <IconButton
                    icon="format-align-center"
                    color="grey"
                    size={30}
                    onPress={() => navigation.navigate('ProfileScreen')}
                />
                
                <IconButton
                    icon="cart"
                    iconColor="#4CD964"
                    size={30}
                    onPress={() => navigation.navigate('Basket')}
                />
                <Badge style={styles.badge}>{NumberofItems}</Badge>
                
            </View>
            <View
                style={{
                    marginLeft: 30,
                }}
            >
                <Text style={styles.headtext}>
                    <Text style={styles.headtextbold}>Hello Tony,</Text> what fruit salad
                </Text>
                <Text style={styles.headtext2}>
                    Combo do you want today?
                </Text>
            </View>
            <View style={{flexDirection:"row", flex:1}}>
            <TextInput
                style={styles.search}
                placeholder="Search for a combo"
                placeholderTextColor="grey"
            
            />
            <IconButton
                    icon="filter-variant"
                    color="black"
                    size={30}
                    marginTop={20}
                    marginLeft={-10}
                    onPress={() => console.log('Pressed')}
                    
                    
                />
            </View>
            {/* //Category and View All Button to right  */}
            <View
                style={styles.container2}
            >
                <Text style={{ fontSize: 24, color: "#000", fontFamily: "Actor" }}>
                    Recommended Combo
                </Text>
                
            </View>
            <HorizontalScroll />
            <Tabnavigator />
            
            <HorizontalScroll2 />


            
            
        </View>
        )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color:'black'
    },
    badge:{
        position: 'absolute', 
        top: 25, 
        right: 25, 
        backgroundColor: '#4CD964'
    },
    headtext:{ 
        fontSize: 23, 
        color: "#000", 
        fontFamily: "poppins" 
    
    },
    headtextbold:{ 
        fontWeight:'bold' 
    },
    headtext2:{ 
        fontSize: 15, 
        color: "#000", 
        fontFamily: "poppins" 
    },
    search:{
        height: 50,
        
        marginRight:0,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        color:'black',
        marginLeft: 30,
        marginRight: 0,
        marginTop: 20,
        marginBottom: 20,
        flex:1,
    
        
    },
    container2:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30,
    },
});