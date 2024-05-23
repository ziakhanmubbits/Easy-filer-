import { View, Text, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../../ImportHeader/Header';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setRegistrationAop } from '../../../../store/mySaleryCalculatorReducer';

const AopForm = () => {
    const navigation = useNavigation()
    const dispatch=useDispatch();
    const [array, setArray] = useState([])
    useEffect(() => {
        gettingAsyncValue()
    }, [])

    const gettingAsyncValue = async () => {
        let userID = await AsyncStorage.getItem('USER ID');
        const id = userID;
        fetchData(id)
    }

    const saveRegistrationAop = (text) => {
        dispatch(setRegistrationAop(text))
    }


    const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);

    const fetchData = async (id) => {
        try {
            const res = await axios.get(BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`);
            const businessArray = Object.values(res.data.business_incorporations);
            const lastBusiness = businessArray[businessArray.length - 1];
            if (lastBusiness) {
                setArray([lastBusiness]);
            } else {
                console.log('No business data found in the response.');
            }
        } catch (error) {
            console.log('Error', error);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.innerView}>
                <Header />
            </View>
            <View style={Style.toptextview}>
                <View style={{ margin: "5%" }}>
                    <Text style={Style.toptext1}>Ntn Registration of AOP Partnership</Text>
                    <Text style={Style.toptext2}>EasyFiler has made process the simplest for you,so that</Text>
                    <Text style={Style.toptext2}>you know what you are doing and how you are doing it.</Text>
                </View>
            </View>
            <View>
                {array && array.length > 0 ? (
                    array.map((item, index) => (
                        <View key={item.id} style={{ alignItems: "center" }}>
                            <View key={item.id} style={{ alignItems: "center" }}>
                                <View style={Style.lowerView}>
                                    <View style={Style.insideLowerView}>
                                        <Text style={Style.txtsixe}>
                                            {item.business_name}
                                        </Text>
                                    </View>
                                    <View style={Style.nxtview}>
                                        <Text style={Style.frsttxt}>
                                            Nature
                                        </Text>
                                        <Text style={Style.secndtxt}>
                                            Last Status
                                        </Text>
                                    </View>
                                    <View style={Style.nxtview1}>
                                        <View>
                                            <Text style={Style.frsttxt2}>
                                                {item.email}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={Style.secndtxt2}>
                                                Info Provided
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={Style.btnview1}>
                                        <TouchableOpacity style={Style.btnview2} onPress={() => {
                                            saveRegistrationAop(item.id)
                                            navigation.navigate('AopRegistrationForm');
                                        }}>
                                            <Text style={Style.txtsixe1}>Review</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text>No data available</Text>
                )}
            </View>
        </View>
    )
}
export default AopForm;