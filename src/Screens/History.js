import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Button, Icon } from 'native-base';
import { View, Text, Image } from 'react-native'
export default class History extends Component {
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
                        <Title>History</Title>
                    </Body>
                </Header>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image source={require('../Assets/Icons/history.png')} />
                    <Text style={{ color: '#303031' }}>History Empty</Text>
                </View>
            </Container>
        );
    }
}