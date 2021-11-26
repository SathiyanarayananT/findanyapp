import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ACCOUNT_ROUTE,
  HOME_ROUTE,
  MYPRODUCTS_ROUTE,
  SEARCH_ROUTE,
} from './routes';
import {APP_BG_COLOR_WHITE, APP_MAIN_COLOR_RED} from '../styles';
import {
  HomeStackNavigator,
  SearchStackNavigator,
  MyProductsStackNavigator,
  UserAccountStackNavigator,
} from './NavigationStackForTabs';

const Tab = createMaterialTopTabNavigator();

const NavigationBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      labeled={false}
      screenOptions={{
        tabBarActiveTintColor: APP_MAIN_COLOR_RED,
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: tabStyle,
      }}>
      <Tab.Screen
        name={HOME_ROUTE}
        component={HomeStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name={SEARCH_ROUTE}
        component={SearchStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={MYPRODUCTS_ROUTE}
        component={MyProductsStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="category" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ACCOUNT_ROUTE}
        component={UserAccountStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottomTab;

const tabStyle = {
  height: 70,
  backgroundColor: APP_BG_COLOR_WHITE,
  shadowColor: 'grey',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
};
