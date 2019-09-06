import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { View, Text, Image, TouchableOpacity, AsyncStorage, StyleSheet, ScrollView } from 'react-native'
export default class BookDetail extends Component {

    render() {
        const Books = this.props.navigation.getParam('idBook')
        console.log(Books)
        return (

            <View style={{ backgroundColor: '#fff',flex:1 }}>
                <ScrollView>
                    <View style={{flex:1,height:250}}>
                        <View style={{position: 'relative'}}>
                        <TouchableOpacity transparent onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', top: '13%', left: 10, zIndex: 1, }}>
                            <Image source={require('../Assets/Icons/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, zIndex: 1, position: 'absolute', bottom: '10%', color: '#fff', left: '5%' }}>{Books.title}</Text>
                        <Image source={{ uri: `${Books.image}` }} style={{ width: '100%', height: '100%', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} />
                        <View style={{ position: 'absolute', width: '30%', height: 150, right: '7%', bottom: -40, elevation: 15 }}>
                            <Image source={{ uri: `${Books.image}` }} style={{ width: '100%', height: '100%', borderRadius: 7 }} />
                        </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 30, padding: 20,flex:1 }}>
                        <Text>Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={style.btn} >
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Rent</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: '#F4CF5D',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '25%',
        paddingVertical: 10,
        flex: 1,
        borderRadius:20,
        elevation:5
    }
})