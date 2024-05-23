import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import {responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Header from '../../ImportHeader/Header';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import Button from '../../Components/Index';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import { setBusinessDate, setBusinessDescription, setBusinessName, setBusinessType, setId, setNature, setNumber } from '../../../store/mySaleryCalculatorReducer';
import AnimatedLottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetGstBusinessNatureQuery, useGetGstBusinessTypeQuery } from '../../../Services/gstregistrationapicall';

const GstRegistrationForm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    //states
    const [busiName, setBusiName] = useState('')
    const [principleActivity,setPrincipleActivity]=useState('')
    const [adress,setAdress]=useState('')
    const [fbrId,setFbrId]=useState('')
    const [fbrPassword,setFbrPassword]=useState('')
    const [dateText, setDateText] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [getDate, setGetDate] = useState('')
    const [businessNameError, setBusinessNameError] = useState(false)
    const [principleActivityError,setPrincipleActivityError]=useState(false)
    const [adressError,setAdressError]=useState(false)
    const [fbrIdError,setFbrIdError]=useState(false)
    const [fbrPasswordError,setFbrPasswordError]=useState(false)
    const [dateError, setDateError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const inputRefs = {
        inputRef1: useRef(null),
        inputRef2: useRef(null),
        inputRef3: useRef(null),
        inputRef4: useRef(null),
        inputRef5: useRef(null),
        inputRef6: useRef(null),
    };



    const gettingAsyncValue = async () => {
        let userID = await AsyncStorage.getItem('USER ID');
        if (userID !== null) {
            const id = userID;
            fetchData(id)
        }
    };
    //getting gstid
    const gstId = useSelector((state) => state.salary.gstId) || 0;

    //getting gstTypes and gstNature
    const { data } = useGetGstBusinessTypeQuery();
    useEffect(() => {
        if (data) {
            gettingAsyncValue();
        }
    }, [data])
    const { data: nature } = useGetGstBusinessNatureQuery();

    //get gstregistration api data
    const fetchData = async (id) => {
        try {
            const res = await axios.get(BASE_URL + `users/${id}/gst-registrations/${gstId}`)
            if (gstId !== 0) {
                setBusiName(res.data.gstRegistrations.business_name)
                setDateText(res.data.gstRegistrations.start_date)
                setDescription(res.data.gstRegistrations.description)
                setConsumerNo(res.data.gstRegistrations.consumer_no)
            } else {
                setBusiName('');
                setDateText('');
                setDescription('');
                setConsumerNo('');
                setType('');
            }
            setIsLoading(false) 
        } catch (error) {
            console.log('Error', error)
            setIsLoading(false)
        }
    }
    //useref method
    const handleTextInputFocus = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };
    //validation method
    const validation = () => {
        if (busiName === '') {
            setBusinessNameError(true)
            handleTextInputFocus(inputRefs.inputRef1);
        } else if (!principleActivity) {
            setPrincipleActivityError(true)
            handleTextInputFocus(inputRefs.inputRef2);
        } else if (!dateText) {
            setDateError(true)
            handleTextInputFocus(inputRefs.inputRef3);
        } else if (!adress) {
            setAdressError(true)
            handleTextInputFocus(inputRefs.inputRef4);
        } else if (!fbrId) {
            setFbrId(true)
            handleTextInputFocus(inputRefs.inputRef5);
        } else if (!fbrPassword) {
            setFbrPassword(true)
            handleTextInputFocus(inputRefs.inputRef6);
        } else {
            saveID(gstId)
            navigation.navigate('GstRegisterationFormUpload')
        }
    }
    //store values in these variables
    const saveBusinessName = (text) => {
        dispatch(setBusinessName(text))
    }
    const saveBusinessType = (text) => {
        dispatch(setBusinessType(text))
    }
    const saveBusinessDate = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        dispatch(setBusinessDate(formattedDate));
    };
    const saveNature = (text) => {
        dispatch(setNature(text))
    }
    const saveBusinessDescription = (text) => {
        dispatch(setBusinessDescription(text))
    }
    const saveNumber = (text) => {
        dispatch(setNumber(text))
    }
    const saveID = (text) => {
        dispatch(setId(text))
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
            {isLoading ?
                (
                    <View style={Style.loader}>
                        <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                    </View>
                )
                :
                (
                    <><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ backgroundColor: "white", }}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef1}
                                        style={[Style.placeholder1, { color: businessNameError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: businessNameError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={businessNameError ? 'red' : 'black'}
                                        label="Enter Business Name"
                                        value={busiName}
                                        onChangeText={(text) => {
                                            setBusiName(text);
                                            saveBusinessName(text);
                                            setBusinessNameError(false);
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef2}
                                        style={[Style.placeholder1, { color: principleActivityError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: principleActivityError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={principleActivityError ? 'red' : 'black'}
                                        label="Principle Activity"
                                        value={principleActivity}
                                        onChangeText={(text) => {
                                            setPrincipleActivity(text);
                                            saveBusinessType(text);
                                            setPrincipleActivityError(false);
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TouchableOpacity style={Style.accview}>
                                        <TouchableOpacity style={Style.accinput}>
                                            <TextInput
                                                ref={inputRefs.inputRef3}
                                                style={[Style.placeholder1, { color: dateError ? 'red' : 'black' }]}
                                                outlineStyle={[Style.placeholder2, { borderColor: dateError ? 'red' : 'black' }]}
                                                outlineColor='black'
                                                activeOutlineColor={dateError ? 'red' : 'black'}
                                                label="Start Date"
                                                value={dateText}
                                                mode="outlined"
                                                onPressIn={() => setOpen(true)} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <DatePicker
                                        modal
                                        value={getDate}
                                        mode='date'
                                        open={open}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpen(false);
                                            setDate(date);
                                            saveBusinessDate(date);
                                            setDateError(false);
                                            setDateText(moment(date).format('YYYY-MM-DD'));
                                        }}
                                        onCancel={() => {
                                            setOpen(false);
                                        }} />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef4}
                                        style={[Style.placeholder1, { color: adressError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: adressError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={adressError ? 'red' : 'black'}
                                        label="Adress"
                                        value={adress}
                                        onChangeText={(text) => {
                                            setAdress(text);
                                            saveBusinessName(text);
                                            setAdressError(false);
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef5}
                                        style={[Style.placeholder1, { color: fbrIdError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: fbrIdError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={fbrIdError ? 'red' : 'black'}
                                        label="Fbr Id"
                                        value={fbrId}
                                        onChangeText={(text) => {
                                            setFbrId(text);
                                            saveNature(text);
                                            setFbrIdError(false);
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef3}
                                        style={[Style.placeholder1, { color: businessNameError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: businessNameError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={businessNameError ? 'red' : 'black'}
                                        label="Fbr Password"
                                        value={fbrPassword}
                                        onChangeText={(text) => {
                                            setFbrPassword(text);
                                            saveBusinessName(text);
                                            setBusinessNameError(false);
                                        }}
                                        mode="outlined" />
                                </View>
                            
                            </View>
                        </View>
                    </ScrollView>
                        <Button
                            onPressBack={() => navigation.goBack()}
                            onPressForward={() => validation()} /></>
                )}

        </View>
    )
}
export default GstRegistrationForm;