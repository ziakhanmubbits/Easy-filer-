import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Modal } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Style from './style';
import { TextInput } from 'react-native-paper';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customFonts/customFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';
import axios from 'axios';
import { BASE_URL } from '../../CommonUrl/CommonUrls';
import { useNavigation } from '@react-navigation/native';


const PersInfo = () => {

    const navigation=useNavigation();

    const [name, setName] = useState('')
    const [cnic, setCnic] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [userId,setUserId]=useState('')

    useEffect(() => {
        gettingValues()
    }, [])

    const LogOut = async () => {
        AsyncStorage.clear()
        navigation.replace('Login')
      }

    const fetchData=async(id)=>{
        try{
            const res=await axios.get(BASE_URL + `users/${id}`)
            const response=res.data.user;
            setName(response.name),
            setCnic(response.cnic)
            setEmail(response.email)
            setNumber(response.phone)
            console.log('Response',res.data.user)
            setLoading(false)
        }catch(error){
            console.log('Error',error)
            setLoading(false)
        }
    }

    const UpdateInfo = () => {
        setLoading(true)
        console.log('calling')
        axios.put(BASE_URL + `users/${userId}`,
            {
                name: name,
                email: email,
                cnic:cnic,
                phone: number,
            })
            .then(function (response) {
                setLoading(false)
                console.log(" Signup response:", response.data)
                if (response.data.status === true) {
                    setModalVisible(true)
                } else if (response.data.status === false) {
                }
            })
            .catch(function (error) {
                console.log("Error:", error)
                setLoading(false)
                if (error.response.status === 401) {
                    ToastAndroid.show("Something went wrong", ToastAndroid.TOP);
                    setLoading(false)
                }
                else if (error.response.status === 0) {
                    ToastAndroid.show("Network Error", ToastAndroid.TOP);
                    setLoading(false)
                }
                console.log(error);
            });
    }


    const gettingValues = async () => {
        let userID = await AsyncStorage.getItem('USER ID')
        const id=userID
        setUserId(id)
        fetchData(userID)
    }

    return (
        <View style={Style.mian}>
            {loading ?
                (
                    <View style={Style.loader}>
                        <AnimatedLottieView source={require('../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                    </View>
                )
                :
                (
                    <ScrollView>
                        <View style={Style.box1}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                label="Full name (As per CNIC)"
                                value={name}
                                onChangeText={(text) => {
                                    setName(text);
                                }}
                                mode="outlined" />
                        </View>
                        <View style={Style.box2}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                label="National Identity Card No.(CNIC)"
                                value={cnic}
                                onChangeText={(text) => {
                                    setCnic(text);
                                }}
                                mode="outlined" />
                        </View>
                        <View style={Style.box2}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                label="Email Adress for Correspondence"
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                }}
                                mode="outlined" />
                        </View>
                        <View style={Style.box2}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                label="Phone Number"
                                value={number}
                                onChangeText={(text) => {
                                    setNumber(text);
                                }}
                                mode="outlined" />
                        </View>
                        <View style={{ marginTop: responsiveScreenHeight(5), alignSelf: "flex-end", width: responsiveScreenWidth(30) }}>
                            <TouchableOpacity style={{ width: responsiveScreenWidth(25), borderRadius: 10, height: responsiveScreenHeight(6), backgroundColor: "red", alignItems: "center", justifyContent: "center" }}
                            onPress={()=> UpdateInfo()}
                            >
                                <Text style={{ color: "white", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_SemiBold }}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
                  <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', }}>

                    <View style={Style.modalmainview}>
                        <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(5), alignItems: "center" }}>
                            <Text style={Style.modaltext}>Updated sucessfully</Text>
                        </View>
                        <View style={Style.modalbuttonview}>
                            <TouchableOpacity title="OK" onPress={() => [setModalVisible(false),LogOut()]} style={Style.modalbutton}>
                                <Text style={Style.modalbuttontext}>OK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PersInfo