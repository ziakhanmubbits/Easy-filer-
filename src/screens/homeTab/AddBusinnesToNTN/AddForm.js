import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import DatePicker from 'react-native-date-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import moment from 'moment';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from './style';
import { useTogglePasswordVisibility } from '../../Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../../Components/useTogglePasswordVisibility2';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import AnimatedLottieView from 'lottie-react-native';
import { setCommencementDate, setName, setPin, setuserEmail, setuserPhone } from '../../../store/mySaleryCalculatorReducer';
import Header from '../../ImportHeader/Header';
import Button from '../../Components/Index';

const AddedForm = () => {
    const navigation = useNavigation();
    const dispatch=useDispatch()
    const [dateText, setDateText] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [getDate, setGetDate] = useState('')
    const [fbrId, setFbrId] = useState('')
    const [fbrPassword, setFbrPassword] = useState('')
    const [id, setId] = useState('')
    const [adress, setAdress] = useState('')
    const [loading, setLoading] = useState(false)
    const [principleActivity, setPrincipleActivity] = useState('')
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
        useTogglePasswordVisibility2();

    useEffect(() => {
        gettingAsyncValue();
        GetApi()
    }, [])

    const saveFbrId = (text) => {
        dispatch(setName(text))
    }
    const saveFbrPassword = (text) => {
        dispatch(setuserEmail(text))
    }
    const saveAdress = (text) => {
        dispatch(setuserPhone(text))
    }
    const savePrincipleActivity = (text) => {
        dispatch(setPin(text))
    }
    const saveCommencementDate = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        dispatch(setCommencementDate(formattedDate));
    }

    const gettingAsyncValue = async () => {
        let userEmail = await AsyncStorage.getItem('Email');
        let userID = await AsyncStorage.getItem('USER ID');
        if (userEmail !== null) {
            const mail = JSON.parse(userEmail);
            const id = userID;
            setId(id)
        }
    };

    const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
    const registrationAdd = useSelector((state) => state.salary.registrationAdd) || 0;
    const GetApi = async () => {
        setLoading(true)
        try {
            const res = await axios.get(BASE_URL + `users/120/business-incorporations/${registrationAdd}`)
            if (registrationAdd != 0) {
                console.log('Response', res.data.business_incorporation)
                setFbrId(res.data.business_incorporation.business_name)
                setFbrPassword(res.data.business_incorporation.email)
                setAdress(res.data.business_incorporation.phone)
                setPrincipleActivity(res.data.business_incorporation.iris_pin)
                setDateText(res.data.business_incorporation.commencement_date)
                setLoading(false)
            } else {
                setFbrId('')
                setFbrPassword('')
                setAdress('')
                setPrincipleActivity('')
                setDateText('')
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            if (error.response) {
                console.log('Server Error:', error.response.data);
                console.log('Status:', error.response.status);
                console.log('Headers:', error.response.headers);
                ToastAndroid.showWithGravityAndOffset(
                    'Server Error. Please try again later.',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            } else if (error.request) {
                console.log('No response received:', error.request);
                ToastAndroid.showWithGravityAndOffset(
                    'Please check your internet connection and try again.',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            } else {
                console.log('Error:', error.message);
                ToastAndroid.showWithGravityAndOffset(
                    'An unexpected error occurred. Please try again later.',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            }
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.innerView}>
                <Header />
            </View>
            <View style={Style.toptextview}>
                <View style={{ margin: "5%" }}>
                    <Text style={Style.toptext1}>Add Business To NTN</Text>
                    <Text style={Style.toptext2}>EasyFiler has made process the simplest for you,so that</Text>
                    <Text style={Style.toptext2}>you know what are you doing and how you are doing it.</Text>
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
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ backgroundColor: "white", }}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={Style.passbox}>
                                    <View style={Style.input}>
                                        <TextInput
                                            style={Style.placeholder1}
                                            outlineStyle={Style.placeholder2}
                                            outlineColor='black'
                                            activeOutlineColor={'black'}
                                            label="Fbr ID"
                                            secureTextEntry={passwordVisibility}
                                            value={fbrId}
                                            onChangeText={(text) => {
                                                setFbrId(text);
                                                saveFbrId(text)
                                            }}
                                            mode="outlined"
                                        />
                                    </View>
                                    <View style={Style.icn}>
                                        <Pressable onPress={handlePasswordVisibility}>
                                            <MaterialCommunityIcons name={rightIcon} size={20} color='black' />
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={Style.passbox}>
                                    <View style={Style.input}>
                                        <TextInput
                                            style={Style.placeholder1}
                                            outlineStyle={Style.placeholder2}
                                            outlineColor='black'
                                            activeOutlineColor={'black'}
                                            label="FBR Password"
                                            secureTextEntry={passwordVisibility2}
                                            value={fbrPassword}
                                            onChangeText={(text) => {
                                                setFbrPassword(text);
                                                saveFbrPassword(text)
                                            }}
                                            mode="outlined"
                                        />
                                    </View>
                                    <View style={Style.icn}>
                                        <Pressable onPress={handlePasswordVisibility2}>
                                            <MaterialCommunityIcons name={rightIcon2} size={20} color='black' />
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        style={Style.placeholder1}
                                        outlineStyle={Style.placeholder2}
                                        outlineColor='black'
                                        activeOutlineColor={'black'}
                                        label="Adress"
                                        value={adress}
                                        onChangeText={(text) => {
                                            setAdress(text);
                                            saveAdress(text)
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput

                                        style={Style.placeholder1}
                                        outlineStyle={Style.placeholder2}
                                        outlineColor='black'
                                        activeOutlineColor={'black'}
                                        label="Principle Activity"
                                        value={principleActivity}
                                        onChangeText={(text) => {
                                            setPrincipleActivity(text);
                                            savePrincipleActivity(text)
                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TouchableOpacity style={Style.accview}>
                                        <TouchableOpacity style={Style.accinput}>
                                            <TextInput

                                                style={Style.placeholder1}
                                                outlineStyle={Style.placeholder2}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
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
                                            saveCommencementDate(date)
                                            setDateText(moment(date).format('YYYY-MM-DD'));
                                        }}
                                        onCancel={() => {
                                            setOpen(false);
                                        }} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )}
            <Button
                onPressBack={() => navigation.goBack()}
                onPressForward={() => navigation.navigate('AddedFormUpload')}
            />

        </View>
    )
}
export default AddedForm;