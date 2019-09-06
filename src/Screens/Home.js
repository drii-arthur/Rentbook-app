import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import Carousel from '../Components/carousel';
import AllBooks from '../Components/BookList';


const Home = (props) => {
    console.log(props)
    return (
        // container
        <View style={{ flex: 1, marginTop: 20 }}>

            <View style={style.header}>
                <View style={style.iconBook}>
                    <Text style={style.iconText}>BOOKZ</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <TextInput placeholder='Search Books here... !' style={style.search} />
                    <Image source={require('../Assets/Icons/iconSearch.png')} style={style.iconSearch} />
                </View>
            </View>
            {/* carousel */}
            <ScrollView>
                <Carousel />
                <AllBooks {...props} />
            </ScrollView>
            {/* <BottomNav /> */}
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    iconBook: {
        justifyContent: 'center',
        flex: 1
    },
    iconText: {
        fontWeight: 'bold',
        color: '#303031'
    },
    search: {
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderColor: '#e8e8e8',
        borderRadius: 25,
        paddingLeft: 40,
        height: 40,
        fontSize: 13,
        paddingRight: 20,
        position: 'relative',
    },
    iconSearch: {
        position: 'absolute',
        top: 13,
        left: 15

    }

})

export default Home