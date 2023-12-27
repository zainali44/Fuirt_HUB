import React from "react";
import { View, Text, Image, StyleSheet, FlatList, StatusBar, Touchable, TouchableOpacity, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, IconButton } from 'react-native-paper';





const Product = () => {
    const [loading, setLoading] = React.useState(true);

    const [data, setData] = React.useState([]);

    const [quantity, setQuantity] = React.useState(1);

    React.useEffect(() => {
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/products')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    console.log("Data :", data);

    const DeleteProduct = (id) => {
        fetch(`https://fruit-app-m1ny.onrender.com/api/v1/products/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                ToastAndroid.show("Product Deleted Successfully", ToastAndroid.SHORT);
                navigation.navigate('AllProducts');
            })
            .catch((error) => {
                console.error(error);
                ToastAndroid.show("Product Deletion Failed", ToastAndroid.SHORT);
            });
    }

    const renderItem = ({ item , index}) => {
        return (
            <View>
                {data.map((item) => (
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
                                <Text style={styles.quantity}>Rs {item.data.price}</Text>
                                <Text style={styles.quantity}>{item.data.richDescription}</Text>
                            </View>
                        </View>
                        <View style={styles.orderDetails}>
                        
                            <IconButton
                                icon="delete-forever-outline"
                                iconColor="#000"
                                size={25}
                                onPress={() => DeleteProduct(item.id)}
                            />
                        </View>

                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#23c13e" />
            <View style={styles.container1}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flex: 0.2,
        backgroundColor: 'lightgray',
        alignItems: "center",
        flexDirection: "row"

    },
    header1: {
        backgroundColor: '#23c13e',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {

        color: 'black',
        backgroundColor: 'white',
        marginLeft: 15,
        borderRadius: 20,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        width: 90,
        elevation: 5,


    },
    backbutton: {
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: "center",
        textAlign: 'center',
        alignItems: 'center',




    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '200',
        fontFamily: 'poppins'
    },
    maintext: {
        fontSize: 25,
        color: 'black',
        marginLeft: 30,

    },
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },
    container1: {
        flex: 0.9,
        padding: 16,
        paddingTop: 0,
        paddingRight: 0,
        margin: 5,
        marginRight: 1,
        marginTop: 0,



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
        height: 30,
        width: 30,
        borderRadius: 5,
    },
    userInfo: {
        marginLeft: 10,
    },
    productname: {
        fontSize: 15,
        color: "#000",
        fontFamily: "poppins",
    },
    orderPrice: {
        fontSize: 15,
        color: "#000",
        fontFamily: 'monospace',
    },
    quantity: {
        fontSize: 13,
        color: "#000",
        fontFamily: "poppins",
        fontWeight: "bold",
    },
    orderDetails: {
        flexDirection: "row",
        justifyContent: 'flex-end'

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
        flex: 0.1,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: 'space-around'

    },

    rightfoot: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,

    },
    rightfoottext: {
        color: 'white',
        fontSize: 16,
        marginRight: 20,

    },
    checkout: {
        backgroundColor: 'gray',
        width: 180,
        height: 60,
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: 30,
        flexDirection: "row",

    },
    plus: {
        backgroundColor: 'white',
        marginRight: 20
    }
});

export default Product;