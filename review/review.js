import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";

import { StarRatingDisplay } from 'react-native-star-rating-widget';


export default function Review() {
    const reviews = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Name: "John Doe",
            Rating: "4.5",
            Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec diam rhoncus faucibus. Sed eget velit nec diam rhoncus faucibus.",
            time: "2 days ago",
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.reviewContainer}>
            <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginBottom: 8, flex: 1 }}>
            <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 25, marginRight: 16 }} />
            <View style={styles.reviewInfo}>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 2, color: "gray" , transform: [{ translateY: -2 }]}}>
                {item.Name}</Text>
              <Text style={{ color: "gray", marginBottom: 4, fontSize: 11, fontWeight: "light" }}>
                {item.time}
              </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
            <Text style={{ color: "gray" }}> {item.Rating} rating</Text>
            <StarRatingDisplay
              rating={4.5}
              starStyle={{ marginHorizontal: 1 }}
              maxStars={5}
              starSize={13}
              color="#23C13E"
            />
          </View>
          </View>
          
            <Text style={{ color: "gray", marginBottom: 8, fontSize: 14, fontWeight: "light" }}>
                {item.Review}
            </Text>
        </View>
        </View>
      );
      

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8, color: "gray" }}>
                        245 Reviews
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "gray" }}> 4.8 </Text>
                        <StarRatingDisplay
                            rating={4.5}
                            starStyle={{ marginHorizontal: 1 }}
                            maxStars={5}
                            starSize={13}
                            color="#23C13E"
                        />
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#23C13E", width: 100, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 8 }}>
                    <Text style={{ color: "#fff" }}>
                        Add Review</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },

    reviewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        paddingRight: 16,
    },
    reviewInfo: {
        flex: 1,
        color: "gray",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    rating: {
        color: "gray",
        marginBottom: 4,
    },
    reviewText: {
        marginBottom: 8,
        color: "gray",
    },
    time: {
        color: "gray",
    },
});
