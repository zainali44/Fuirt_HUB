import * as React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { Icon } from 'react-native-paper';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



import Payments from './Payments/Payments';
import Review from './review/review';
import Admin from './admin/Admin';
import Order from './order/order';
const Stack = createNativeStackNavigator();
import logo from "./assets/logo.png";
import login from "./login/login";
import Profile from "./admin/Profile";
import Welcome from './login/welcome';
import Userlogin from './login/userlogin';
import UserReg from './login/userreg';
import ProductUploadPage from './Products/AddProducts';
import Header from './users/header';
import ProductDetails from './users/ProductDetails';
import Basket from './users/basketnew';
import Success from './users/Success';
import MyTabs from './login/tabbar';
import DeliveryStatusScreen from './users/DeliveryStatusScreen';
import AllUsers from './admin/Users';
import NewProfile from './WELCOME/profile';
import Settingscreen from './WELCOME/Setting/settingscreen';


function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Add this state variable

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      setShowSplash(false);
    }, 3000); // Adjust the time as needed
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
        <Text style={styles.splashText}>FruitApp</Text>
      </View>
    );
  }


  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="User Login"
          component={Userlogin}
          options={{
            tabBarVisible: false,
            title: 'User Login',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 18,
            },
            headerTitleAlign: 'center',
            // hide bottom tab bar
          }}
        />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{
            title: 'Admin',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            title: 'Order',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            title: 'Review',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{
            title: 'Payments',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            title: 'welcome',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="New Registration"
          component={UserReg}
          options={{
            title: 'New Registration',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="Admin Login"
          component={login}
          options={{
            title: 'Admin Login',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="ProductUploadPage"
          component={ProductUploadPage}
          options={{
            title: 'ProductUploadPage',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="User"
          component={Header}
          options={{
            title: 'User',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: 'ProductDetails',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="Basket"
          component={Basket}
          options={{
            title: 'Basket',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#23c13e',
            },
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
              color: '#fff',
            },

          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            title: 'Success',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            title: 'MyTabs',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="DeliveryStatusScreen"
          component={DeliveryStatusScreen}
          options={{
            title: 'DeliveryStatusScreen',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#23c13e',
            },
            headerTitleStyle: {
              fontWeight: 'semibold',
              fontSize: 17,
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="AllUsers"
          component={AllUsers}
          options={{
            title: 'AllUsers',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={NewProfile}
          options={{
            title: 'ProfileScreen',
            headerTintColor: '#000'
          }}
        />
        <Stack.Screen
          name="Settingscreen"
          component={Settingscreen}
          options={{
            title: 'Settingscreen',
            headerTintColor: '#000'
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
