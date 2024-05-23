import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveFontSize
} from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customFonts/customFonts';
import { useDispatch } from 'react-redux';
import { setVariable } from '../../store/myReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SplashScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const saveVariable = (value) => {
        dispatch(setVariable({ userId: value }))
    };

    useEffect(() => {
        console.log(' just get one state here')
        //if true....dashboard
        //else .... login
        getUserId()

        const timer = setTimeout(() => {
            AsyncStorage.getItem('Email')
            // navigation.replace("BottomHome")
            AsyncStorage.getItem('PASS')
                .then(value => {
                    if (value != null) {
                        console.log(value)
                        navigation.replace("BottomHome")
                    }
                    else {
                        navigation.replace('Login')
                    }
            })
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const getUserId = async () => {
        const myId = await AsyncStorage.getItem('userId')
        if (myId) {
            saveVariable(myId)
        }
    }

    return (
        <View style={styles.mainV}>
            <StatusBar backgroundColor={'#EB0414'} />
            <Image style={styles.image}
                source={require('../../../src/assets/pictures/sp2.png')} />
            <Text style={styles.txt}>
                Easy Filer
            </Text>
            <Text style={styles.txt1}>
                Remote Financial Consultant
            </Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainV: {
        flex: 1,
        backgroundColor: "#EB0414",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(20),
        resizeMode:'contain'
    },
    txt: {
        fontSize: responsiveFontSize(4.8),
        fontFamily: FontFamily.OpenSansBold,
        color: "#fff",
        top: "0.4%"
    },
    txt1: {
        color: "#fff",
        fontSize: responsiveFontSize(2.6),
        fontFamily: FontFamily.OpenSansBold,
        fontWeight:'700',
        marginTop:8
    }
})