import React from "react";
import { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Touchable, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-paper";

export default function Order({ route, navigation }) {

    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const togglePaymentDetails = () => {
        setShowPaymentDetails(!showPaymentDetails);
    };

    const { order } = route.params;

    // console.log("Check Order:", order);

    const [loading, setLoading] = React.useState(true);

    const [data, setData] = React.useState([]);

    const [OrderItemsName, setOrderItemsName] = React.useState([]);

    const getOrderItemsName = async (orderItems) => {
        const itemNames = [];

        try {
            const response = await fetch('https://fruit-app-m1ny.onrender.com/api/v1/products/');
            const products = await response.json();

            orderItems.forEach((orderItem) => {
                const product = products.find((product) => product.id === orderItem);
                console.log("Product:", product);
                if (product) {
                    itemNames.push(product.data.name);
                }
            });

            setOrderItemsName(itemNames);
            setLoading(false);
            console.log("Order Items Name:", itemNames);
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        fetch('https://fruit-app-m1ny.onrender.com/api/v1/orders/' + order)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                getOrderItemsName(json.orderItems); // Move this inside the then block
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    // console.log("Data d:", data);
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: "#fff", padding: 14, borderRadius: 10, elevation: 5 }}>
                        <Text style={{ fontSize: 15, color: "grey", fontFamily: "poppins" }}>Delete Order</Text>
                    </TouchableOpacity>
                </View>

                {/* //Apply copin code */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, borderBlockColor: "grey", borderBottomWidth: 0.5, paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 5 }}>
                        <Icon source="barcode" name="local-offer" size={20} color="#000" style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Apply Copin Code</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#23C13E", fontFamily: "poppins" }}>Select</Text>
                    </TouchableOpacity>
                </View>

                {/* //Order Payment Fee */}
                <Text style={{ fontSize: 18, fontWeight: "semibold", color: "#000", fontFamily: "poppins", marginLeft: 30, marginRight: 30, marginTop: 40, marginBottom: 20 }}>Order Payment Details</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Order Amount</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs {data.totalPrice}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Discount</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs. 0</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Delivery Fee</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#23C13E", fontFamily: "poppins" }}>Free</Text>
                </View>

                {/* // Line */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 40, marginBottom: 20 }}>
                    <View style={{ backgroundColor: "#000", height: 0.5, flex: 1 }} />
                </View>

                {/* //Total Amount */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Total Amount</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs {data.totalPrice}</Text>
                </View>

                {/* // Line */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 40, marginBottom: 20 }}>
                    <View style={{ backgroundColor: "#23C13E", height: 0.2, flex: 1 }} />
                </View>

                {/* // Box of Order Details */}
                <View style={styles.OrderDetails}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", fontFamily: "poppins", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 20 }}>Payment Summary</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Order Amount</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs. {data.totalPrice}</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Discount</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs. 0</Text>
                    </View>

                    {/* // Line */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#000", height: 0.5, flex: 1 }} />
                    </View>

                    {/* //Total Amount */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Total Amount</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", fontFamily: "poppins" }}>Rs. {data.totalPrice}</Text>
                    </View>

                    {/* // Line */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#000", height: 0.5, flex: 1 }} />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 16, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Payment Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={togglePaymentDetails}>
                            <Text style={{ fontSize: 15, color: "#23C13E", fontFamily: "poppins", marginTop: 10, marginBottom: 10 }}>
                                {showPaymentDetails ? "Collapse" : "View Details"}
                            </Text>
                        </TouchableOpacity>
                    </View >
                    {showPaymentDetails && (
                        <View style={{ backgroundColor: "#F5F5F5", borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>User Name</Text>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>{data.user}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Items</Text>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>{OrderItemsName}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>Status</Text>
                                <Text style={{ fontSize: 14, fontWeight: "light", color: "#000", fontFamily: "poppins" }}>{data.status}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey", fontFamily: "poppins" }}>{data.shippingAddress1}, {data.shippingAddress2}, {data.city}, {data.postalCode}</Text>
                            </View>

                            {/* // Line */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <View style={{ backgroundColor: "#000", height: 0.5, flex: 1 }} />
                            </View>

                            {/* //Button */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 5 }}>
                                <TouchableOpacity style={{ padding: 12, borderRadius: 10, borderWidth: 1, borderColor: "#23C13E" }}>
                                    <Text style={{ fontSize: 15, color: "#23C13E", fontFamily: "poppins" }}>Deliver Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 14, borderRadius: 10, borderWidth: 1, borderColor: "grey" }}>
                                    <Text style={{ fontSize: 15, color: "grey", fontFamily: "poppins" }}>Cancel Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View >
            </View >
           
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    // Rounded Order Details Box
    OrderDetails: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 20,
        elevation: 5,
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      },
});
