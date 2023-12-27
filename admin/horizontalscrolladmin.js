import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Card, IconButton, Text } from 'react-native-paper';
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';



import * as Progress from 'react-native-progress';




export default function HorizontalScroll() {
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

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                {/* Product Card */}
                {data.map((item) => (
                <Card style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginRight: 20, borderRadius: 10, backgroundColor: "#fff" , margin : 10}}>
                    <Card.Cover source={{uri: item.data.image}} style={{ width: 250, height: 180, borderRadius: 10 }} />
                    <Card.Content>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", fontFamily: "poppins" , marginTop : 10}}>{item.data.name}</Text>
                        <Text style={{ fontSize: 13, color: "#000", fontFamily: "poppins" }}> 60 Order Completed</Text>
                        
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Progress.Bar progress={0.5} width={150} color="#000" style={{ marginTop: 10 }} borderWidth = {0} unfilledColor = {"#EBEBEB"}/>
                        <AvatarList/>
                        </View>
                    </Card.Content>
                </Card>
                ))}
                
            </ScrollView>
        </View>
    );
}

const Avatar = () => {
    return <View style={styles.avatar}>
        <Image
            source={require('./profile.jpg')}
            style={{ height: 30, width: 30, borderRadius: 25 }}
        />
    </View>;
  };
  
  const AvatarList = () => {
    return (
      <View style={styles.avatarList}>
        <Avatar />
        <Avatar />
        
        <Avatar />
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    scrollView: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    avatarList: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        height: 30,
        width: 30,
        marginRight: -20,
        backgroundColor: 'gray',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
      },
});
