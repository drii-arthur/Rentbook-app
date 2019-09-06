import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    AsyncStorage,
} from 'react-native';

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: undefined
        }
    }
    componentWillMount = async () => {
        await AsyncStorage.getItem('token', (err, result) => {
            if (result) {
                this.setState({
                    token: result
                })
            }
        })

        if (this.state.token !== undefined) {
            this.props.navigation.navigate('Home')
        } else {
            this.props.navigation.navigate('Login')
        }
    }

    render() {
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        return (
            <View style={{ width: '100%', height: 200 }}>
                <ActivityIndicator size='large' color='blue' paddingTop={200} />
            </View>
        )
    }
}