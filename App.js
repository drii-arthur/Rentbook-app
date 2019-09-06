import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/Redux/store'
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'native-base';
import { Image } from 'react-native'
import { createMaterialTopTabNavigator, } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/Screens/Login'
import Register from './src/Screens/Register'
import Home from './src/Screens/Home'
import BookDetail from './src/Screens/BookDetail'
import History from './src/Screens/History'
import Profile from './src/Screens/Profile'
import Auth from './src/Screens/auth'

const UserTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/Assets/Icons/home.png')} color={tintColor} size={24} />

        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/Assets/Icons/clock.png')} color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/Assets/Icons/man.png')} color={tintColor} size={20} />

        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#090B28',
      inactiveTintColor: '#b3cde0',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 12,
        marginTop: 0,
        paddingBottom: 5
      },
      style: {
        backgroundColor: '#fff',
        elevation: 15,
        height: 57,
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#090B28'
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
  Auth,
  AuthStack,
  AppStackNavigator
}, {
  initialRouteName: 'Auth',
})

const AppContainer = createAppContainer(Apps);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App



