import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Button } from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <Container style={{ paddingHorizontal: 15, paddingVertical: '10%' }}>
                <Content >
                    <View style={{ marginVertical: '10%' }}>
                        <Text style={{ fontSize: 30, color: '#4B4C72' }}>Here To Get{'\n'}Welcomed
                        </Text>
                    </View>
                    <Form >
                        <Item style={{ marginLeft: 0 }}>
                            <Input placeholder='Email' />
                        </Item>
                        <Item style={{ marginLeft: 0 }}>
                            <Input placeholder='Password' secureTextEntry={true} />
                        </Item>


                        <View style={{ marginVertical: 40 }}>
                            <Button block dark onPress={() => { this.props.navigation.navigate('Home') }}>
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
