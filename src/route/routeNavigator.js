// import React from 'react'
// import {
//     createStackNavigator,
//     createBottomTabNavigator,
//     createAppContainer
// } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import HomePage from '../Screens/Home'
// import DetailPage from '../Screens/BookDetail'
// import ProfilePage from '../Screens/Profile'
// import AddBookPage from '../Screens/AddBook'
// import HistoryPage from '../Screens/History'
// import LoginPage from '../Screens/Login'
// import RegisterPage from '../Screens/Register'

// const HomeNavigation = createStackNavigator(
//     {
//         Home: { screen: HomePage },
//         BookDetail: { screen: DetailPage }
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#fff'
//             },
//             headerTintColor: '#303031;',
//             title: 'Books',
//         },
//     }
// )

// const AddNavigation = createStackNavigator(
//     {
//         AddBook: { screen: AddBookPage }
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#fff'
//             },
//             headerTintColor: '#303031',
//             title: 'Add'

//         }
//     }
// )
// AppNavigator = createAppContainer(AddNavigation)

// const ProfileNavigation = createStackNavigator(
//     {
//         Profile: { screen: ProfilePage },
//         Login: { screen: LoginPage },
//         Register: { screen: RegisterPage },
//         History: { screen: HistoryPage }
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#fff'
//             },
//             headerTintColor: '#303031',
//             title: 'Profile'
//         }
//     }
// )

// const switchNavigation = createBottomTabNavigator({
//     Home: { screen: HomeNavigation },
//     AddBook: { screen: AddNavigation },
//     Profile: { screen: ProfileNavigation }
// },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state
//                 let IconComponent = Ionicons
//                 let iconName
//                 if (routeName === 'Home') {
//                     iconName = 'ios-home'
//                 } else if (routeName === 'Search') {
//                     iconName = 'ios-search'
//                 } else if (routeName === 'AddBook') {
//                     iconName = `ios-add-circle${focused ? '' : '-outline'} `
//                 } else if (routeName === 'Profile') {
//                     iconName = `ios-contact`
//                 }
//                 return <IconComponent name={iconName} size={25} color={tintColor} />
//             }
//         }),
//         tabBarOptions: {
//             activeTintColor: '#18dcff',
//             inactiveTintColor: '#303031'
//         }
//     }
// )

// export default createAppContainer(switchNavigation)
