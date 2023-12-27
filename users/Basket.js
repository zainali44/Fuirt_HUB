import React from "react";
import { View, Text, Image, StyleSheet, FlatList, StatusBar, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const orders = [
    {
        id: 1,
        user: "John Doe",
        order: "Order #1234",
        status: "Completed",
        price: "20,000",
        time: "2 days ago",
        product: "Quinoa fruit salad",
        quantity:"2",
        
    },
    {
        id: 2,
        user: "John Doe",
        order: "Order #1234",
        status: "Pending",
        price: "20,000",
        time: "2 days ago",
        product: "Melon fruit salad",
        quantity:"2",
        
    },
    {
        id: 3,
        user: "John Doe",
        order: "Order #1234",
        status: "Completed",
        price: "20,000",
        time: "2 days ago",
        product: "Tropical fruit salad",
        quantity:"2",
        
    },
    
];



const Basket = () => {

    
    const myButton = (
        <View style={styles.backbutton}>
            <Icon
                name="chevron-left"
                size={30}
                fontWeight={2}
                color="black"
                style={{ marginRight:3 }}
            />
            <Text style={styles.text}>Go back</Text>
        </View>
      );

    const calculate = ()=>{
        
    }
    const renderItem = ({ item }) => {
        
       

        return (
            <View style={styles.orderContainer}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.avatar}>
                        <Image
                            source={require('./fruit2.png')}
                            style={styles.avatarImage}
                        />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.productname}>{item.product}</Text>
                        <Text style={styles.quantity}>{item.quantity} Packs</Text>
                    </View>
                </View>
                <View style={styles.orderDetails}>
                    <Text style = {styles.orderPrice}>
                        Rs {item.price}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
             <StatusBar backgroundColor="#23c13e" />
            
            <View style={styles.header}>
                <Text style = {styles.headertext}>
                    {myButton}
                </Text>
                <Text style={styles.maintext}>
                    My Basket
                </Text>
            </View>
            <View style={styles.container1}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            </View>


            <View style={styles.footer}>
                <View style={styles.leftfoot}>
                    <Text style={styles.leftfoottext1}>Total</Text>
                    <Text style={styles.leftfoottext2}> Rs 60,000</Text>
                </View>
                <View style={styles.rightfoot}>
                    <TouchableOpacity style={styles.checkout}
                    onPress={()=>{}}>
                        <Text style={styles.rightfoottext}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    header:{
        flex:0.2,
        backgroundColor:'#23c13e',
        alignItems:"center",
        flexDirection:"row"

    },
    header1:{
        backgroundColor:'#23c13e',
        flexDirection:'row',
        alignItems:'center',
    },
    headertext:{

        color:'black',
        backgroundColor:'white',
        marginLeft:15,
        borderRadius:20,
        height:30,
        alignItems:"center",
        justifyContent:'center',
        width:90,
        elevation: 5,
        

    },
    backbutton:{
        backgroundColor:'white',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:"center",
        textAlign:'center',
        alignItems:'center',
        
    
        
    
    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'200',
        fontFamily:'poppins'
    },
    maintext:{
        fontSize:25,
        color:'white',
        marginLeft:30
    },
    container: {
        flex:1,
        backgroundColor: "#fff",
        
    },
    container1:{
        flex:0.6,
        padding:16,
        margin:5,
        marginTop:'5%'
    },
    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        paddingBottom: 20,
        marginTop:20
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
        fontFamily:'monospace',
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
    footer:{
        flex:0.2,
        textAlign:'center',  
        alignItems:"center",
        flexDirection:'row',
    },
    leftfoot:{
        justifyContent:"center",
          
        flex:0.4,
        alignItems:"center",
        marginLeft:-15
        
        
        
    },
    leftfoottext1:{
       color:'black',
       fontSize:16
    }, 
    leftfoottext2:{
        color:'black',
        fontSize:20
     }, 
    rightfoot:{
        justifyContent:"center",
        flex:0.6,
        alignItems:"center"
        
    },
    rightfoottext:{
        color:'white',
        fontSize:16
     }, 
     checkout:{
        backgroundColor:'#23c13e',
        width:180,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
     },
});

export default Basket;
