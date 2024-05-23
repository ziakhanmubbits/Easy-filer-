import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../../ImportHeader/Header';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setRegistrationRemove } from '../../../../store/mySaleryCalculatorReducer';



const RemoveForm = () => {
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

    const saveRegistrationRemove = (text) => {
        dispatch(setRegistrationRemove(text))
    }

    const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
    // console.log('incorporationtypeId',incorporationtypeId)

    const fetchData = async (id) => {
        try {
            const res = await axios.get(BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`);
            // console.log('API Response:', res.data.business_incorporations);
            const businessArray = Object.values(res.data.business_incorporations);
            const lastBusiness = businessArray[businessArray.length - 1];
            // console.log('lastBusiness',lastBusiness)
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
                    <Text style={Style.toptext1}>Remove Business from NTN</Text>
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
                                            saveRegistrationRemove(item.id)
                                            navigation.navigate('RemoveRegistrationForm');
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
export default RemoveForm;