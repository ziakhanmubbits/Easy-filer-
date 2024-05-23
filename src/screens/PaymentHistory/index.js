import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../ImportHeader/Header';
import Style from './style';


const PaymentHistory = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.innerView}>
                <Header />
            </View>
            <View style={
               Style.view1
            }>
                <View style={Style.imageview}>
                    <Image style={Style.img} source={require('../../../src/assets/pictures/image13.png')} />
                </View>

                <Text style={
                    Style.text
                }>No ! Payment History Found...</Text>
            </View>
        </View>
    )
}
export default PaymentHistory;