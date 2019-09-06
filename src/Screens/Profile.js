import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
export default class Profile extends Component {
    handleLogout = () => {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Auth')
    }
    render() {
        return (
            <Container>
                <Header transparent style={{ elevation: 3 }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../Assets/Icons/back.png')} />
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.handleLogout}>
                            <Title style={{ color: '#000000' }}>Logout</Title>
                        </Button>
                    </Right>
                </Header>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '30%', backgroundColor: '#5f27cd', position: 'relative' }}>
                    <View style={{ position: 'absolute', width: 150, height: 150, left: '30%', bottom: -70, backgroundColor: 'tomato', borderColor: '#222f3e', borderWidth: 5, borderRadius: 90 }}>
                        <Image source={require('../Assets/Icons/foto1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 90 }} />
                    </View>

                </View>
            </Container>
        );
    }
}