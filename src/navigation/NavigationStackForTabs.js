import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrentLocation from '../components/CurrentLocation';
import {Text} from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import MyProductsScreen from '../screens/MyProductsScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import SearchBox from '../components/SearchBox';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="STREET"
      component={HomeScreen}
      options={{
        headerTitleStyle: {
          color: 'transparent',
        },
        headerLeft: () => (
          <Text style={{fontSize: 20, fontWeight: '600'}}>STREET</Text>
        ),
        headerRight: () => <CurrentLocation />,
      }}
    />
  </Stack.Navigator>
);

export const SearchStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SEARCH"
      component={SearchScreen}
      options={{
        header: () => <SearchBox />,
      }}
    />
  </Stack.Navigator>
);

export const MyProductsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="MY PRODUCTS" component={MyProductsScreen} />
  </Stack.Navigator>
);

export const UserAccountStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="USER ACCOUNT"
      component={UserAccountScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
