import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AnimatedLottieView from 'lottie-react-native'
import moment from 'moment'
import React, { useEffect, useState, useRef, } from 'react'
import DatePicker from 'react-native-date-picker'
import { BASE_URL } from '../../../../../src/CommonUrl/CommonUrls'
import Style from './Style'
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux'
import { useGetDataQuery, useAddNewPostMutation, useGetpersonalDataQuery } from '../../../../Services/GetApiCall'
import { LogBox } from 'react-native'
import { Fonts } from '../../../../assets/Styles/Fonts'
import { setLastStatusName, setOccupationId, setPersonalId } from '../../../../store/myReducer'
import FontFamily from '../../../../assets/customFonts/customFonts'
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper';
import { LargeText, SmallText } from '../../../Components/Text'
import { useFocusEffect } from '@react-navigation/native';

const Resume = (route) => {
    LogBox.ignoreAllLogs()
    //declare navigation 
    const navigation = useNavigation();
    //declare dispatch
    const dispatch = useDispatch();
    //states
    const [yearID, setYearId] = useState('')
    const [username, setUsername] = useState('')
    const [lastStatus, setLastStatus] = useState('')
    const [cnic, setCnic] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [mobileNo, setMobileNo] = useState('')
    const [citizen, setCitizen] = useState('Pakistani');
    const [residence, setResidence] = useState('Resident');
    const [dateText, setDateText] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [fillingId, setFillingId] = useState('')
    const [getDate, setGetDate] = useState('')
    const [occupation, setOccupation] = useState('')
    const [id, setId] = useState()
    const [userEmail, setUserEmail] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [cnicError, setCnicError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [occupationError, setOccupationError] = useState(false)
    const [dateError, setDateError] = useState(false)
    const [person, setPerson] = useState();
    const [personalId, setPersonalId] = useState(0)
    const [name, setName] = useState('')
    const inputRefs = {
        inputRef1: useRef(null),
        inputRef2: useRef(null),
        inputRef3: useRef(null),
        inputRef4: useRef(null),
        inputRef5: useRef(null),
    };

    useFocusEffect(
        React.useCallback(() => {
            //save screen name in async 
            const savelastscreen = async (screenname) => {
                try {
                    await AsyncStorage.setItem('lastscreen', screenname);
                } catch (error) {
                    console.log('failed to save last screen', error);
                }
            }
            savelastscreen();
            return () => {
                // Optional cleanup function if needed when the screen is unfocused
            };
        }, [])
    );

    //saving value in variables
    const saveOccupation = (id) => {
        dispatch(setOccupationId(id))
    }
    const saveLastStatus = (name) => {
        dispatch(setLastStatusName(name))
    }
    // getting id through variable 
    const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
    const resumeId = useSelector((state) => state.myReducer.resumeId);
    const occupationId = useSelector((state) => state.myReducer.occupationId);

    //Occupation Types GetApi
    const { data, isError } = useGetDataQuery()

    useEffect(() => {
        if (data) {
            fetchData();
            GettinAsyncValue()
            // savelastscreen();
        }
    }, [data])

    //getting async values 
    const GettinAsyncValue = async () => {
        let userID = await AsyncStorage.getItem('USER ID')
        let fiscalYearId = await AsyncStorage.getItem('fiscalYearId')
        let Laststatus = await AsyncStorage.getItem('lastscreen')
        if (fiscalYearId !== null || userID !== null || Laststatus !== null) {
            const FiscalYear = (fiscalYearId)
            setYearId(FiscalYear)
            const status = (Laststatus)
            setLastStatus(status)
            DataSubmit(userID)
        }
    }

    // Get personal api 
    const fetchData = async () => {
        try {
            const response = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/personals`);
            if (response.data.personals.length === 0) {
                gettingValues();
            } else {
                setUsername(response.data.personals[0].name)
                setCnic(response.data.personals[0].cnic)
                setUserEmail(response.data.personals[0].email)
                setMobileNo(response.data.personals[0].phone)
                setDateText(response.data.personals[0].dob)
                setCitizen(response.data.personals[0].citizen)
                setResidence(response.data.personals[0].residence)
                setPersonalId(response.data.personals[0].id)
                let occId = response?.data?.personals[0]?.occupation_id
                let updatedId = occId - 1
                setOccupation(data?.occupations[updatedId])
            }
            if (data) {
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            console.error('hey', error);
        }
    };
    //getting async value and set
    const gettingValues = async () => {
        let userName = await AsyncStorage.getItem('NAME')
        let email = await AsyncStorage.getItem('Email')
        let Phone = await AsyncStorage.getItem('phonenumber')
        const name = JSON.parse(userName)
        setUsername(name)
        setName(name)
        const Email = JSON.parse(email)
        setUserEmail(Email)
        const PhoneNumber = (Phone)
        setMobileNo(PhoneNumber);
    }

    //post api 
    const [addpost] = useAddNewPostMutation();

    const addNewPost = async () => {
        const postParams = {
            name: username,
            cnic: cnic,
            email: userEmail,
            phone: mobileNo,
            dob: dateText,
            citizen: citizen,
            residence: residence,
            occupation_id: occupationId,
        }
        try {
            setIsLoading(true)
            const res = await addpost({ postParams, taxFilingId, personalId, resumeId });
            let idcard=await AsyncStorage.setItem('Cnic',cnic)
            let number=await AsyncStorage.setItem('PhoneNumber',mobileNo)
            navigation.navigate('Income')
        } catch (error) {
            console.error('hhhhError:', error);
        } finally {
            setIsLoading(false)

        }
    }

    const DataSubmit = async (uId) => {
        try {
            const response = await axios.patch(BASE_URL + `users/${uId}/taxfillings/${taxFilingId}}`,
                {
                    taxfiling: {
                        last_status: 'Personal Info',
                    }
                })
        } catch (error) {
            console.log('nnnnTax Filing Id', error)

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
        if (username === '') {
            setUsernameError(true)
            handleTextInputFocus(inputRefs.inputRef1);
        } else if (!cnic) {
            setCnicError(true)
            handleTextInputFocus(inputRefs.inputRef2);
        } else if (!userEmail) {
            setEmailError(true)
            handleTextInputFocus(inputRefs.inputRef3);
        } else if (!mobileNo) {
            setPhoneError(true)
            handleTextInputFocus(inputRefs.inputRef4);
        } else if (!dateText) {
            setDateError(true)
            handleTextInputFocus(inputRefs.inputRef5);
        } else if (!occupation) {
            setOccupationError(true)
        } else {
            addNewPost()
        }
    }

    return (
        <View style={Style.mainView}>
            {isLoading ? (
                <View style={Style.loader}>
                    <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                </View>
            )
                :
                (
                    <View>
                        <ScrollView contentContainerStyle={Style.contentContainer}>
                            <View style={Style.infoview}>

                                <Text style={Style.txt1}><Text style={Style.txt}>{username}</Text>,This is your last filed</Text>
                                <LargeText text={'Personal Info'}
                                    style={Style.txt2}
                                />
                                <SmallText
                                    text={'You can upload your information for this year'}
                                    style={Style.txt3}
                                />
                            </View>
                            <View style={Style.boxview}>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef1}
                                        style={[Style.placeholder1, { color: usernameError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: usernameError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={usernameError ? 'red' : 'black'}
                                        label="UserName"
                                        value={username}
                                        onChangeText={(text) => {
                                            setUsername(text);
                                            setUsernameError(false)

                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef2}
                                        style={[Style.placeholder1, { color: cnicError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: cnicError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={cnicError ? 'red' : 'black'}
                                        label="Cnic"
                                        keyboardType='numeric'
                                        value={cnic}
                                        onChangeText={(text) => {
                                            setCnic(text);
                                            setCnicError(false)
                                        }}
                                        mode="outlined"
                                        maxLength={13}
                                    />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef3}
                                        style={[Style.placeholder1, { color: emailError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: emailError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={emailError ? 'red' : 'black'}
                                        label="Email"
                                        value={userEmail}
                                        onChangeText={(text) => {
                                            setUserEmail(text);
                                            setEmailError(false)

                                        }}
                                        mode="outlined" />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef4}
                                        style={[Style.placeholder1, { color: phoneError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: phoneError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={phoneError ? 'red' : 'black'}
                                        label="Phone Number"
                                        keyboardType='numeric'
                                        value={mobileNo}
                                        onChangeText={(text) => {
                                            setMobileNo(text);
                                            setPhoneError(false)
                                        }}
                                        mode="outlined"
                                        maxLength={11}
                                    />
                                </View>
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TouchableOpacity style={Style.accview}>
                                        <TouchableOpacity style={Style.accinput}>
                                            <TextInput
                                                ref={inputRefs.inputRef5}
                                                style={[Style.placeholder1, { color: dateError ? 'red' : 'black' }]}
                                                outlineStyle={[Style.placeholder2, { borderColor: dateError ? 'red' : 'black' }]}
                                                outlineColor='black'
                                                activeOutlineColor={dateError ? 'red' : 'black'}
                                                label='Date of Birth'
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
                                            setDateError(false)
                                            setDateText(moment(date).format('YYYY-MM-DD'));
                                        }}
                                        onCancel={() => {
                                            setOpen(false);
                                        }}

                                    />
                                </View>
                            </View>
                            <View style={Style.checkboxview}>
                                <View style={Style.CheckBox1} >
                                    <CheckBox
                                        disabled={false}
                                        value={citizen === 'Pakistani'}
                                        onValueChange={() => setCitizen('Pakistani')}
                                        tintColors={{ true: 'red' }}
                                        onCheckColor={'red'}
                                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}

                                    />
                                    <Text style={Style.checkboxtxt}>Pakistan</Text>
                                </View>
                                <View style={Style.CheckBox2}>
                                    <CheckBox
                                        disabled={false}
                                        value={citizen === 'Foreigner'}
                                        onValueChange={() => setCitizen('Foreigner')}
                                        tintColors={{ true: 'red' }}
                                        onCheckColor={'red'}
                                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                                    />
                                    <Text style={Style.checkboxtxt}>Foriegn</Text>
                                </View>
                            </View>
                            <View style={Style.checkboxview}>
                                <View style={Style.CheckBox1}>
                                    <CheckBox
                                        disabled={false}
                                        value={residence === 'Resident'}
                                        onValueChange={() => setResidence('Resident')}
                                        tintColors={{ true: 'red' }}
                                        onCheckColor={'red'}
                                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                                    />
                                    <Text style={Style.checkboxtxt}>Resident</Text>
                                </View>
                                <View style={Style.CheckBox2}>
                                    <CheckBox

                                        disabled={false}
                                        value={residence === 'Non Resident'}
                                        onValueChange={() => setResidence('Non Resident')}
                                        tintColors={{ true: 'red' }}
                                        onCheckColor={'red'}
                                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                                    />
                                    <Text style={Style.checkboxtxt}>Non-Resident</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                {data && (
                                    <View style={Style.icntxtinput}>
                                        <Dropdown
                                            style={[Style.dropdown, { borderColor: occupationError ? 'red' : 'black' }]}

                                            placeholderStyle={{
                                                fontSize: Fonts.f16,
                                                color: 'black',
                                                color: occupationError ? 'red' : 'black',
                                                fontFamily: FontFamily.OpenSansMedium,
                                            }}
                                            selectedTextStyle={{
                                                fontSize: responsiveScreenFontSize(2.1),
                                                color: 'black',
                                                fontFamily: FontFamily.MONTSERRAT_Regular
                                            }}
                                            iconColor={occupationError ? 'red' : 'black'}

                                            containerStyle={{
                                                marginBottom: "50%",
                                                // height: '60%',
                                                backgroundColor: 'gainsboro',
                                            }}
                                            itemTextStyle={{
                                                color: 'black',
                                                fontSize: Fonts.f14,
                                            }}
                                            data={data?.occupations}
                                            dropdownPosition="top"
                                            labelField="title"
                                            valueField="title"
                                            placeholder={'Select Occupation'}
                                            value={occupation}
                                            onChange={async item => {
                                                setOccupation(item.title);
                                                saveOccupation(item.id);
                                                setOccupationError(false)
                                            }}

                                        />
                                    </View>
                                )}
                            </View>
                            <View style={{ alignSelf: "flex-end", right: "5%" }}>
                                <TouchableOpacity style={Style.btncon} onPress={() => [validation(), saveLastStatus('Income')]}>
                                    <Text style={Style.lasttxt}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                )
            }
        </View>
    )
}
export default Resume;