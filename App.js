import React, { Component } from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator, } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/Screens/Login'
import Register from './src/Screens/Register'
import Home from './src/Screens/Home'
import BookDetail from './src/Screens/BookDetail'
import History from './src/Screens/History'
import Profile from './src/Screens/Profile'

const UserTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />

        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={24} />

        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#b3cde0',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 12,
        marginTop: 1,
        marginBottom: 5
      },
      style: {
        backgroundColor: '#fff',
        elevation: 15,
        height: 50,
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
  },
);

const AppStackNavigator = createStackNavigator(
  {
    Homeuser: UserTabNavigator,
    History,
    BookDetail


  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator({
  Login,
  Register,
},
  { headerMode: 'none' })

const Apps = createSwitchNavigator({
  AuthStack,
  AppStackNavigator
}, {
    initialRouteName: 'AppStackNavigator',
  })

export default createAppContainer(Apps);



