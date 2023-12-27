import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const orders = [
    {
        id: 1,
        user: "John Doe",
        order: "Order #1234",
        status: "Completed",
        price: "$200",
        time: "2 days ago",
        product: "Salad",
    },
    {
        id: 2,
        user: "John Doe",
        order: "Order #1234",
        status: "Pending",
        price: "$200",
        time: "2 days ago",
        product: "Salad",
    },
    {
        id: 3,
        user: "John Doe",
        order: "Order #1234",
        status: "Completed",
        price: "$200",
        time: "2 days ago",
        product: "Salad",
    },
    {
        id: 4,
        user: "John Doe",
        order: "Order #1234",
        status: "Pending",
        price: "$200",
        time: "2 days ago",
        product: "Salad",
    }
];



export default function Orders() {

    const [loading, setLoading] = React.useState(true);

    const [data, setData] = React.useState([]);


    React.useEffect(() => {
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/orders')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    console.log("Data :", data);

    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        const statusBackgroundColor = item.status === "Pending" ? "black" : "#17992D";

        return (
            <ScrollView style={styles.container}>
                <View
                    style={styles.orderContainer}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.avatar}>
                            <Image
                                source={require("../assets/zain.jpg")}
                                style={styles.avatarImage}
                            />
                        </View>
                        <View style={styles.userInfo}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Order', {
                                    order: item.id
                                })}>
                                <Text style={styles.userName}>{item.user}</Text>
                                <Text style={styles.orderInfo}>Rs. {item.totalPrice}</Text>
                                <Text style={styles.orderInfo}>{item.shippingAddress1}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.orderDetails}>
                        <Text style={{ ...styles.status, backgroundColor: statusBackgroundColor }}>
                            {item.status}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 5,
    },
    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        paddingBottom: 20,
    },
    userInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 25,
    },
    avatarImage: {
        height: 30,
        width: 30,
        borderRadius: 25,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
        fontFamily: "poppins",
    },
    orderInfo: {
        fontSize: 13,
        color: "#000",
        fontFamily: "poppins",
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
});
