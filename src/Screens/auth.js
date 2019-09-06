import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    AsyncStorage,
} from 'react-native';

export default class Auth extends Component {
    constructor(props) {
        super(props)

    }
    componentWillMount = async () => {
        await AsyncStorage.getItem('token', (err, token) => {
            if (token) {
                this.props.navigation.navigate('Home')
            } else {
                this.props.navigation.navigate('Login')
            }
        })


    }

    render() {
        return (
            <View style={{ width: '100%', height: 200 }}>
                <ActivityIndicator size='large' color='blue' paddingTop={200} />
            </View>
        )
    }
}