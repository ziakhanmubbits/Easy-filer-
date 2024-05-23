import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from './Style';
import { useGetGstBusinessNatureQuery } from '../../../Services/gstregistrationapicall';
import Button8 from '../../Components/index8';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../ImportHeader/Header';
import { useDispatch } from 'react-redux';
import { setGstId } from '../../../store/mySaleryCalculatorReducer';

const GstForm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [array, setArray] = useState([])
    const [businessNature, setBusinessNature] = useState('')
    const [loading, setLoading] = useState(true)

    const gettingAsyncValue = async () => {
        let userID = await AsyncStorage.getItem('USER ID');
        if (userID !== null) {
            const id = userID;
            fetchData(id)
        }
    };
    //getting gstnature
    const { data: nature } = useGetGstBusinessNatureQuery();

    useEffect(() => {
        if(nature){
            gettingAsyncValue();
        }
    }, [nature])

    //get gstregistration api data
    const fetchData = async (id) => {
        try {
            const res = await axios.get(BASE_URL + `users/${id}/gst-registrations`)
            setArray(res.data.gstRegistrations)
            let titles = [];
            const registrations = res.data.gstRegistrations;
            registrations.map((item)=>{
            const gstnatureId = item.gstnature_id;
            const matchedGstNature = nature?.gstnatures.find(nature => nature.id === parseInt(gstnatureId));
            if (matchedGstNature) {
                const title = matchedGstNature.title;
                titles.push(title);
            }
            })
            setBusinessNature(titles)
            if (titles.length > 0) {
                setLoading(false)
            }

        } catch (error) {
            console.log('There is Error', error)
            setLoading(false)
        }
    }

    const saveGstId = (text) => {
        dispatch(setGstId(text))
    }
    const nav = () => {
        saveGstId(0);
        navigation.navigate('GstRegistrationForm')
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.innerView}>
                <Header />
            </View>
            <View style={Style.toptextview}>
                <View style={{ margin: "5%" }}>
                    <Text style={Style.toptext1}>Gst Registration</Text>
                    <Text style={Style.toptext2}>Please provide the below information which is required</Text>
                    <Text style={Style.toptext2}>to register your sale tax business.</Text>
                </View>
            </View>
            {loading ?
                (
                    <View style={Style.loader}>
                        <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                    </View>
                )
                :
                (
                    <><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View>
                            {array.map((item, index) => (
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
                                                    {businessNature[index]}
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
                                                saveGstId(item.id);
                                                navigation.navigate('GstRegistrationForm');
                                            }}>
                                                <Text style={Style.txtsixe1}>Review</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>

                    </ScrollView>
                        <Button8
                            onPressForward={() => nav()}
                        />
                    </>
                )}

        </View>
    )
}
export default GstForm;