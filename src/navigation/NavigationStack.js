import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NavigationBottomTab from './NavigationBottomTab';
import AddProductScreen from '../screens/AddProductScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDPRODUCT_ROUTE,
  MAINAPP_ROUTE,
  PRODUCTDETAILS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  SPLASH_ROUTE,
} from './routes';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const Navigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={SPLASH_ROUTE}
          component={SplashScreen}
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={SIGNIN_ROUTE}
          component={SignInScreen}
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={SIGNUP_ROUTE}
          component={SignUpScreen}
          options={{
            headerBackTitle: 'Sign In',
            title: 'Sign Up',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={MAINAPP_ROUTE}
          component={NavigationBottomTab}
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={ADDPRODUCT_ROUTE}
          component={AddProductScreen}
          options={{
            headerBackTitle: 'Cancel',
            title: 'Add an item',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={PRODUCTDETAILS_ROUTE}
          component={ProductDetailsScreen}
          options={{
            headerBackTitleVisible: false,
            title: 'Details',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationStack;
