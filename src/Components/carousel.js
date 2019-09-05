import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

class Carousel extends React.Component {
    render() {
        return (
            <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingLeft: 20 }}>
                <View style={{ width: 240, height: 120, backgroundColor: '#28BFDB', marginRight: 20, borderRadius: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}><Text style={{ marginHorizontal: 20, fontSize: 15, color: '#fff' }}>Action</Text></View>
                    <View style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/iconCategori1.png')} />
                    </View>
                </View>

                <View style={{ width: 240, height: 120, backgroundColor: '#EF77A3', marginRight: 20, borderRadius: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}><Text style={{ marginHorizontal: 20, fontSize: 15, color: '#fff' }}>Fantasi</Text></View>
                    <View style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/iconCategori1.png')} />
                    </View>
                </View>

                <View style={{ width: 240, height: 120, backgroundColor: '#8e44ad', marginRight: 20, borderRadius: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center' }}><Text style={{ marginHorizontal: 20, fontSize: 15, color: '#fff' }}>Romance</Text></View>
                    <View style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/iconCategori1.png')} />
                    </View>
                </View>

            </ScrollView>
        )
    }
}

export default Carousel