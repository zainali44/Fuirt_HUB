import React from "react";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import card from "../assets/fuirt1.png";
import card2 from "../assets/fuirt2.png";
import { Card, IconButton, Text } from 'react-native-paper';
import { ActivityIndicator } from "react-native-paper";
// import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';



export default function HorizontalScroll() {

    const [loading, setLoading] = React.useState(true);

    const [data, setData] = React.useState([]);

    const [quantity, setQuantity] = React.useState(1);




    // fetch('https://fruit-app-m1ny.onrender.com/api/v1/products')

    React.useEffect(() => {
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/products')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    // console.log("Data :", data);

    const addToCart = async (item) => {
        try {
          const jsonValue = await AsyncStorage.getItem('@cart');
          let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
          console.log("Cart :", cart);
          cart.push(item);
          await AsyncStorage.setItem('@cart', JSON.stringify(cart));
          console.log("Cart :", cart);
      
          // Update the state to trigger a re-render
          setData((prevData) => [...prevData, item]);
        } catch (e) {
          console.log("Error :", e);
        }
      };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                {/* Product Card */}
                {data.map((item) => (
                <Card style={{ marginRight: 20, height: 220, borderRadius: 10, backgroundColor: "#fff", margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
                        <View style={{ flexDirection: "row", width: 180, justifyContent: 'space-around' }}>
                            <Card.Cover source={{ uri: item.data.image }}
                             style={{ width: 100, height: 100, borderRadius: 50, margin: 30, marginLeft: 55, marginBottom: 3 }} />
                            <IconButton
                                icon="cards-heart-outline"
                                color="#4CD964"
                                size={20}
                                marginLeft={-20}

                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                        <Card.Content >
                            <Text style={{ fontSize: 16, color: "#000", fontFamily: "sans-serif-medium", marginTop: 10 }}>{item.data.name}</Text>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ alignItems: "center", flex: 1, color: '#4CD964', fontSize: 17, fontWeight: 'bold' }}>Rs {item.data.price}</Text>
                                <IconButton
                                    icon="plus-circle"
                                    iconColor="#4CD964"
                                    size={20}
                                    flex={1}
                                    onPress={() => addToCart(item)}
                                />
                            </View>
                        </Card.Content>
                    </TouchableOpacity>
                </Card>
                ))}

                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator animating={true} color="black" size="large" />
                    </View>
                )}
            </ScrollView>


        </View>


    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 280
    },
    scrollView: {
        marginLeft: 20,
        marginTop: 20,

    },
    avatarList: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },

});
