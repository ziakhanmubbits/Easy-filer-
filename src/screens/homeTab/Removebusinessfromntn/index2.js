import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from './style';
import { setRegistrationRemove } from '../../../store/mySaleryCalculatorReducer';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import Header from '../../ImportHeader/Header';
import Button from '../../Components/Index';
import Button8 from '../../Components/index8';



const RemovalForm2 = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch();

    const [array, setArray] = useState([])

    useEffect(() => {
        gettingAsyncValue()
    }, [])

    const gettingAsyncValue = async () => {
        let userID = await AsyncStorage.getItem('USER ID');
        const id = userID;
        fetchData(id)
    }

    const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);

    const fetchData = async (id) => {
        try {
            const res = await axios.get(BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`);
            console.log('Response', res.data.business_incorporations)
            const dataArray = Object.values(res.data.business_incorporations);
            setArray(dataArray);
        } catch (error) {
            console.log('Error', error);
        }
    };

    const saveRegistrationRemove = (id) => {
        dispatch(setRegistrationRemove(id))
    }

    const nav = () => {
        saveRegistrationRemove(0);
        navigation.navigate('RemovalForm')
    }

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
            <View style={{flex:1}}>
                <ScrollView >
                {array.map((item, index) => (
                    <View key={item.id} style={{ alignItems: "center" }}>
                        <View style={Style.lowerView}>
                            <View style={Style.insideLowerView}>
                                <Text style={Style.txtsixe}>
                                    {item.iris_pin}
                                </Text>
                            </View>
                            <View style={Style.nxtview}>
                                <Text style={Style.frsttxt}>
                                    End Date
                                </Text>
                                <Text style={Style.secndtxt}>
                                    Last Status
                                </Text>
                            </View>
                            <View style={Style.nxtview1}>
                                <View>
                                    <Text style={Style.frsttxt2}>
                                        {item.commencement_date}
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
                                    navigation.navigate('RemovalForm');
                                }}>
                                    <Text style={Style.txtsixe1}>Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
                </ScrollView>
                <Button8
                onPressBack={() => navigation.goBack()}
                onPressForward={() => nav()}
                />
            </View>
           
        </View>
    )
}
export default RemovalForm2;