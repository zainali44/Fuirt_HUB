import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Admin from '../admin/Admin';
import Payments from '../Payments/Payments';
import ProductUploadPage from '../Products/AddProducts';
import Order from '../admin/orders';
import Profile from '../admin/Profile';
import AllUsers from '../admin/Users';
import Product from '../admin/Products';

import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function MyTabs() {

    const navigation = useNavigation();

    // hide Header
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
      <Tab.Navigator
        initialRouteName="Fuirthub"
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,

          }
        }}
      >
        <Tab.Screen
          name="Fuirthub"
          component={Admin}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon source="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Your Users"
          component={AllUsers}
          options={{
            tabBarLabel: 'Your Users',
            tabBarIcon: ({ color, size }) => (
              <Icon source="account-multiple-plus" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Product Upload Page"
          component={ProductUploadPage}
          options={{
            //Hide name of the tab bar
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Icon source="plus-circle" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Your Products"
          component={Product}
          options={{
            tabBarLabel: 'Your Products',
            tabBarIcon: ({ color, size }) => (
              <Icon source="card-plus-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Your Orders"
          component={Order}
          options={{
            tabBarLabel: 'Your Orders',
            tabBarIcon: ({ color, size }) => (
              <Icon source="cart-arrow-right" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

    export default MyTabs;