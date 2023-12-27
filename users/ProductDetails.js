import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import { StarRatingDisplay } from 'react-native-star-rating-widget';

import { useNavigation } from "@react-navigation/native";

import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetails() {
    const navigation = useNavigation();


    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => (
        navigation.navigate('Basket'),
        setVisible(false)
    );

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

    console.log("Product DATA :", data);

    // On Clicking the add to cart button
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


    //   [{"data": {"brand": "", "category": "", "countInStock": "", "description": "", "image": "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "isFeatured": true, "name": "German Salad", "numReviews": 4, "price": "7500", "rating": 4, "richDescription": "This is a very good product"}, "id": "JRnzVC2copQj6Wndb9SM"}, {"data": {"brand": "", "category": "Test", "countInStock": "4", "description": "Test", "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "isFeatured": true, "name": "Caesar Salad", "numReviews": 4, "price": "5000", "rating": 4, "richDescription": "This is a very good product"}, "id": "sosdJrXu56YVfKPPq988"}]

    console.log("Product DATA Done :", data.length > 0 ? data[0].data.name : "No product data available");

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.container}>
                    {/* Cover image of the product */}
                    <Image
                        //https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                        source={{
                            uri: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        }}
                        style={styles.coverImage}
                    />
                </View>

                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium" }}>{data.isFeatured}</Text>
                </View>

                <View style={{ marginLeft: 20 }}>
                    {/* 2 icons for plus and minus */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, marginRight: 30 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, padding: 10, gap: 10 }}>
                            <Icon source="minus-circle-outline" size={30} color="#333333" />
                            <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium" }}>{quantity}</Text>
                            <Icon source="plus-circle" color="#4CD964" size={30} />
                        </View>

                        {/* Price */}
                        <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium" }}>Rs 2,000</Text>
                    </View>
                    {/* Description */}

                    <View style={{ marginLeft: 10, marginRight: 30, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium", marginBottom: 10, textDecorationLine: 'underline', textDecorationColor: '#4CD964', textDecorationStyle: 'solid', }}>
                            One Pack Contains</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi quis eleifend blandit, magna nunc accumsan lorem, vitae lacinia velit justo vitae nisl. Sed euismod, nisi quis eleifend blandit, magna nunc accumsan lorem, vitae lacinia velit justo vitae nisl.
                        </Text>
                    </View>
                </View>

                <View style={{ marginLeft: 30, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={{ flexDirection: "row", alignItems: "center", marginTop: 5, padding: 10, gap: 10, borderRadius: 10, borderWidth: 1, borderColor: "#4CD964", marginRight: 30 }}>
                        <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium", marginBottom: 5, textDecorationLine: 'underline', textDecorationColor: '#4CD964', textDecorationStyle: 'solid', }}>
                            Reviews</Text>
                        <Text style={{ fontSize: 13, fontWeight: "normal", color: "gray", fontFamily: "sans-serif-medium", marginBottom: 10, textDecorationColor: '#4CD964', textDecorationStyle: 'solid', marginTop: 6 }}>
                            Click here to see reviews
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                            <StarRatingDisplay
                                rating={4.5}
                                count={5}
                                starSize={20}
                                color="#4CD964"
                                inactiveColor="#ccc"
                            />
                            <Text style={{ fontSize: 20, fontWeight: "100", color: "#000", fontFamily: "sans-serif-medium" }}>4.5</Text>
                        </View>
                    </View>
                </View>

                {/* Add to cart button */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 50, marginRight: 30, marginLeft: 30 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, padding: 10, gap: 10 }}>
                        
                    </View>

                    {/* Heart icon */}

                </View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} theme={{ colors: { primary: 'green' } }}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Item added to cart</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 16,
    },
    coverImage: {
        width: "100%", // Take the full width of the container
        height: 200, // Adjust the height based on your preference
        resizeMode: "cover", // or "contain" based on your image aspect ratio
        marginBottom: 16, // Adjust the margin as needed
        borderRadius: 10,

    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
});
