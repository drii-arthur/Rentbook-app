import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { Container, Content, Form, Item, Input, Button } from 'native-base';

import { login } from '../Redux/Actions/users'
import { connect } from 'react-redux'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    handleInput = (teks, name) => {
        this.setState({
            [name]: teks
        })
    }

    handleLogin = async () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.dispatch(login(data))
        .then(this.props.navigation.navigate('Home'))

    }
    render() {
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        return (
            <Container style={{ paddingHorizontal: 15, paddingVertical: '10%' }}>
                <Content >
                    <View style={{ marginVertical: '10%' }}>
                        <Text style={{ fontSize: 30, color: '#4B4C72' }}>Here To Get{'\n'}Welcomed
                        </Text>
                    </View>
                    <Form  >
                        <Item style={{ marginLeft: 0 }}>
                            <Input placeholder='Email' keyboardType={'email-address'} name='email' required onChangeText={(teks) => { this.handleInput(teks, `email`) }} />
                        </Item>
                        <Item style={{ marginLeft: 0 }}>
                            <Input placeholder='Password' secureTextEntry={true} name='password' required onChangeText={(teks) => { this.handleInput(teks, `password`) }} />
                        </Item>


                        <View style={{ marginVertical: 40 }}>
                            <Button block dark type='submit' onPress={this.handleLogin} >
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Login</Text>
                            </Button>
                        </View>

                    </Form>
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, justifyContent: "space-between" }}>
                        <TouchableOpacity block dark onPress={() => { this.props.navigation.navigate('Register') }}>
                            <Text style={{ color: '#4B4C72', textDecorationLine: 'underline', paddingBottom: 5 }}>Register
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}}>
                            <Text style={{ color: '#4B4C72', textDecorationLine: 'underline' }}>Forgot Password</Text>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(Login)
