import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const BottomNav = () => {
    return (
        <View style={style.container}>
            <View style={style.imageWraper}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                    <Image style={style.iconImage} source={require('../Assets/Icons/home.png')} />
                </TouchableOpacity>
            </View>
            <View style={style.imageWraper}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('History') }}>
                    <Image style={style.iconImage} source={require('../Assets/Icons/clock.png')} />
                </TouchableOpacity>
            </View>
            <View style={style.imageWraper}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}>
                    <Image style={style.iconImage} source={require('../Assets/Icons/man.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 54,
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8',
        flexDirection: 'row'
    },
    imageWraper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconImage: {
        width: 25,
        height: 25
    }
})
export default BottomNav