import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Button } from 'native-base';
export default class Register extends Component {
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
                            <Input placeholder='UserName' />
                        </Item>
                        <Item style={{ marginLeft: 0 }}>
                            <Input placeholder='Email' />
                        </Item>
                        <Item style={{ marginLeft: 0, marginBottom: 40 }}>
                            <Input placeholder='Password' secureTextEntry={true} />
                        </Item>

                        <Button block dark onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Text style={{ color: '#fff' }}>Register</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
