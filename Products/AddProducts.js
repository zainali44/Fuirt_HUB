import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, ScrollView, ToastAndroid } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import app from "../Firebase/config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ProductUploadPage = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const navigation = useNavigation();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [countInStock, setCountInStock] = React.useState("");
  const [category, setCategory] = React.useState("");



  // Inside handleGalleryClick function
  const handleGalleryClick = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        // Handle cancellation
      } else if (response.error) {
        // Handle error
      } else {
        console.log('Response = ', response);
        console.log('Response type = ', response.assets[0].type);

        // Check if the type is 'image'
        if (response.assets[0].type.startsWith('image/')) {
          const source = { uri: response.assets[0].uri };
          console.log(source);
          setAvatarSource(source);
        } else {
          // Handle non-image file
          alert('Please select a valid image file');
        }
      }
    });
  };


  const uploadImage = async (uri) => {
    try {
      const storageRef = ref(storage, "images/" + Date.now());
      const uploadTask = uploadBytesResumable(storageRef, uri);

      await uploadTask;

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log("File available at", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Upload Error:", error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  };



  const addProduct = async () => {
    setLoading(true);

    try {
      if (avatarSource !== null) {
        const url = await uploadImage(avatarSource.uri);
        console.log("URL:", url);

        const response = await fetch('https://fruit-app-m1ny.onrender.com/api/v1/products/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            description: description,
            richDescription: "This is a very good product",
            image: url,
            brand: "",
            price: price,
            category: category,
            countInStock: countInStock,
            rating: 4,
            numReviews: 4,
            isFeatured: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log('Success:', data);
        ToastAndroid.show("Product Added Successfully", ToastAndroid.SHORT);
        navigation.navigate('Admin');
      } else {
        ToastAndroid.show("Please select an image", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleGalleryClick}>
            <View style={styles.imageContainer}>
              {avatarSource ? (
                <Image source={avatarSource} style={styles.image} />
              ) : (
                <View style={styles.uploadButton}>
                  <Text style={styles.uploadText}>Upload</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <Text style={{ marginTop: 20, fontSize: 15, color: '#000', fontWeight: 'semibold' }}>
            Enter your product Name
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setName(text)}
              style={styles.input} placeholder="Product details" placeholderTextColor={'#000'} value={name} />

          </View>

          <Text style={{ marginTop: 20, fontSize: 15, color: '#000', fontWeight: 'semibold' }}>
            Enter your product details
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setDescription(text)}
              style={styles.input} placeholder="Product details" placeholderTextColor={'#000'} value={description} />
          </View>

          <Text style={{ marginTop: 20, fontSize: 15, color: '#000', fontWeight: 'semibold' }}>
            Enter your product price
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setPrice(text)}
              style={styles.input} placeholder="Product price" placeholderTextColor={'#000'} value={price} />
          </View>

          <Text style={{ marginTop: 20, fontSize: 15, color: '#000', fontWeight: 'semibold' }}>
            Enter your product quantity
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setCountInStock(text)}
              style={styles.input} placeholder="Product quantity" placeholderTextColor={'#000'} value={countInStock} />
          </View>

          <Text style={{ marginTop: 20, fontSize: 15, color: '#000', fontWeight: 'semibold' }}>
            Enter your product category
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setCategory(text)}
              style={styles.input} placeholder="Product category" placeholderTextColor={'#000'} value={category} />
          </View>

          <TouchableOpacity
            onPress={() => addProduct()}
            style={{
              height: 50,
              width: 330,
              backgroundColor: '#000',
              borderRadius: 10,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 15, color: '#fff' }}>Upload</Text>
          </TouchableOpacity>


          {/* Add additional input fields for product price and description as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
  },
  imageContainer: {
    height: 150,
    width: 150,
    backgroundColor: '#F5F6FA',
    borderRadius: 75,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 75,
  },
  uploadButton: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F5F6FA',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 15,
    color: '#000',
  },
  inputContainer: {
    height: 50,
    width: 330,
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 15,
    color: '#000',
  },
};

export default ProductUploadPage;
