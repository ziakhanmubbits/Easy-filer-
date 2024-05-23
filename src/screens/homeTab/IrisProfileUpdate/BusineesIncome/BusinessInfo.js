import { View, Text,TouchableOpacity, Modal, ScrollView, Image } from 'react-native'
import React, { useState, useEffect,useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Style from './Style';
import { useTogglePasswordVisibility } from '../../../Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../../../Components/useTogglePasswordVisibility2';
import { useGetIrisBankAccountsQuery } from '../../../../Services/irisprofileapicall';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import AnimatedLottieView from 'lottie-react-native';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { setId, setIrisBankId } from '../../../../store/irisProfileReducer';
import Button from '../../../Components/Index';
import { TextInput } from 'react-native-paper';

const Business = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
        useTogglePasswordVisibility2();

    const [email, setEmail] = useState('')
    const [pin, setPin] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [iban, setIBAN] = useState('')
    const [bankName, setBankName] = useState('');
    const [bankDetails, setBankDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [loading,setLoading]=useState(false)
    const [businessName, setBusinessName] = useState('')
    const [BusinessNature, setBusinessNature] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [pinError, setPinError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [adressError, setAdressError] = useState(false)
    const inputRefs = {
        inputRef1: useRef(null),
        inputRef2: useRef(null),
        inputRef3: useRef(null),
        inputRef4: useRef(null),
        inputRef5: useRef(null),
        inputRef6: useRef(null),
    };

    const savingId = (id) => {
        dispatch(setId(id))
    };

    //GETBankAccounts Api
    const { data } = useGetIrisBankAccountsQuery();
    // console.log('Bankaccounts',data?.bankAccounts)

    //Getting value form variable
    const irisTypeId = useSelector((state) => state.irisProfile.irisTypeId);
    const bankaccount_id = useSelector((state) => state.irisProfile.irisBankTypeId);
    const userId = useSelector((state) => state.irisProfile.userId);
    console.log('userId', userId)

    //store banktype in variable
    const saveIrisBanKId = (id) => {
        dispatch(setIrisBankId(id))
    }

    const fetcData = async (id) => {
        try {
            const response = await axios.get(BASE_URL + `users/${id}/irisprofiles?incomesource_id=${irisTypeId}`)
            const IrisData = response.data.irisProfiles
            if (Object.keys(IrisData).length > 0) {
                const IrisArray = Object.values(IrisData);
                const lastIndex = IrisArray.length - 1;
                const lastIrisData = IrisArray[lastIndex];
                console.log('lastIrisData', lastIrisData)
                setEmail(lastIrisData.email)
                setPassword(lastIrisData.password)
                setPin(lastIrisData.pin)
                setPhoneNumber(lastIrisData.phone)
                setAddress(lastIrisData.present_address)
                if (lastIrisData.irisbankaccunts && lastIrisData.irisbankaccunts.length > 0) {
                    const bankDetailsArray = lastIrisData.irisbankaccunts.map(bankAccount => ({
                        bankName: bankAccount.bankaccount_id,
                        iban: bankAccount.iban,
                    }));
                    setBankDetails(bankDetailsArray);
                }

            } else {
                // setEmail('')
                setPassword('')
                setPin('')
                // setPhoneNumber('')
                setAddress('')
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log('Error', error)
        }
    }

    useEffect(() => {
        gettinAsyncValue();
    }, [])

    //Geting Async Value 
    const gettinAsyncValue = async () => {
        let useremail = await AsyncStorage.getItem('Email');
        let userid = await AsyncStorage.getItem('USER ID')
        let number = await AsyncStorage.getItem('phonenumber')
        const mail = JSON.parse(useremail)
        setEmail(mail);
        const UserId = userid;
        savingId(UserId)
        const phone = number;
        setPhoneNumber(phone)
        fetcData(UserId)
    }

    //useref method
    const handleTextInputFocus = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };

    const validation = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setEmailError(true)
            handleTextInputFocus(inputRefs.inputRef1);
        } else if (!password) {
            setPasswordError(true)
            handleTextInputFocus(inputRefs.inputRef2);
        } else if (!pin) {
            setPinError(true)
            handleTextInputFocus(inputRefs.inputRef3);
        } else if (!phoneNumber) {
            setPhoneError(true)
            handleTextInputFocus(inputRefs.inputRef4);
        } else if (!address) {
            setAdressError(true)
            handleTextInputFocus(inputRefs.inputRef5);
        } else {
            AddPost()
        }
    }

    //Irispost api
    const AddPost = async () => {
        const requestBody = {
            iris: {
                email: email,
                password: password,
                pin: pin,
                phone: phoneNumber,
                present_address: address,
                employer: '',
                incomesource_id: irisTypeId,
            },
            irisbanks: bankDetails,
        };
            setLoading(true)
        try {
            const response = await axios.post(BASE_URL + `users/${userId}/irisprofiles`, requestBody);
            console.log('Response Api:', response.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    //Show BankDetails  
    const handleAddButtonPress = () => {
        // Create a new bank detail object
        const newBankDetail = { bankaccount_id, iban };
        // Update the state array with the new bank detail
        setBankDetails([...bankDetails, newBankDetail]);
        // Clear the input fields
        setBankName('');
        setIBAN('');
    };

    const handleDeleteBankDetail = (indexToDelete) => {
        // Create a new array without the bank detail to delete
        const updatedBankDetails = bankDetails.filter((item, index) => index !== indexToDelete);
        // Update the state with the new array
        setBankDetails(updatedBankDetails);
    };

    const renderedBankDetails = bankDetails.map((item, index) => (
        <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <Text style={{ color: "black" }}>Bank Name: {console.log('bankname', item.name)}</Text>
                <Text style={{ color: "black", }}>Iban: {item.iban}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteBankDetail(index)} style={{ width: responsiveScreenWidth(7), height: responsiveScreenHeight(3) }}>
                <Image source={require('../../../../../src/assets/pictures/image71.png')} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
            </TouchableOpacity>
        </View>
    ));
    return (
        <View style={Style.main}>
            {loading || isLoading ?
                (
                    <View style={Style.loader}>
                        <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                    </View>
                )
                :
                (
                    <ScrollView>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                <TextInput
                                    ref={inputRefs.inputRef1}
                                    style={[Style.placeholder1, { color: emailError ? 'red' : 'black' }]}
                                    outlineStyle={[Style.placeholder2, { borderColor: emailError ? 'red' : 'black' }]}
                                    outlineColor='black'
                                    activeOutlineColor={emailError ? 'red' : 'black'}
                                    label="Enter Email"
                                    value={email}
                                    onChangeText={(text) => {
                                        setEmail(text);
                                        setEmailError(false)
                                    }}
                                    mode="outlined" />
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef2}
                                        style={[Style.placeholder1, { color: passwordError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: passwordError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={passwordError ? 'red' : 'black'}
                                        label="Enter Business Name"
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                            setPasswordError(false)
                                        }}
                                        mode="outlined"
                                    />
                                
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <TextInput
                                        ref={inputRefs.inputRef3}
                                        style={[Style.placeholder1, { color: pinError ? 'red' : 'black' }]}
                                        outlineStyle={[Style.placeholder2, { borderColor: pinError ? 'red' : 'black' }]}
                                        outlineColor='black'
                                        activeOutlineColor={pinError ? 'red' : 'black'}
                                        label="Enter Busiess Nature"
                                        value={pin}
                                        onChangeText={(text) => {
                                            setPin(text);
                                            setPinError(false)
                                        }}
                                        mode="outlined"
                                    />
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                <TextInput
                                    ref={inputRefs.inputRef4}
                                    style={[Style.placeholder1, { color: phoneError ? 'red' : 'black' }]}
                                    outlineStyle={[Style.placeholder2, { borderColor: phoneError ? 'red' : 'black' }]}
                                    outlineColor='black'
                                    activeOutlineColor={phoneError ? 'red' : 'black'}
                                    label="Enter Phone Number"
                                    keyboardType='numeric'
                                    maxLength={11}
                                    value={phoneNumber}
                                    onChangeText={(text) => {
                                        setPhoneNumber(text);
                                        setPhoneError(false)
                                    }}
                                    mode="outlined" />
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                <TextInput
                                    ref={inputRefs.inputRef5}
                                    style={[Style.placeholder1, { color: adressError ? 'red' : 'black' }]}
                                    outlineStyle={[Style.placeholder2, { borderColor: adressError ? 'red' : 'black' }]}
                                    outlineColor='black'
                                    activeOutlineColor={adressError ? 'red' : 'black'}
                                    label="Enter Present Adress"
                                    value={address}
                                    onChangeText={(text) => {
                                        setAddress(text);
                                        setAdressError(false)
                                    }}
                                    mode="outlined" />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={Style.btn} onPress={() => setModalVisible(true)}>
                                <Text style={Style.textstyl}>Add Bank Account</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Style.infoview}>
                            {renderedBankDetails}
                        </View>
                    </ScrollView>
                )
            }
            <Button
                onPressBack={() => navigation.navigate('IRISprofile')}
                onPressForward={() => validation()}
            />
            <View>
                <Modal
                    visible={modalVisible}
                    animationType='fade'
                    transparent>
                    <View style={Style.modalView}>
                        <View style={Style.modalViewInside}>
                            <View style={Style.txtView}>
                                <Text style={Style.textstyle}>Bank Account List</Text>
                                <TouchableOpacity style={Style.cross} onPress={() => setModalVisible(false)}>
                                    <Text style={Style.crosstextstyle}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Style.icntxtinput}>
                                <Dropdown
                                    style={Style.dropdown}
                                    placeholderStyle={{
                                        fontSize: 14,
                                        color: "black"
                                    }}
                                    selectedTextStyle={{
                                        fontSize: 16,
                                        color: "black"
                                    }}
                                    containerStyle={{
                                        backgroundColor: "white",

                                    }}
                                    itemTextStyle={{
                                        color: "black"
                                    }}
                                    data={data?.bankAccounts}
                                    labelField="name"
                                    valueField="name"
                                    placeholder={'Select Bank'}
                                    value={bankName}
                                    onChange={item => {
                                        [setBankName(item.name), saveIrisBanKId(item.id)];
                                    }} />
                            </View>
                            <View style={Style.ibanview}>
                                <TextInput
                                    style={Style.placeholder2}
                                    value={iban}
                                    placeholder="IBAN"
                                    placeholderTextColor={"black"}
                                    onChangeText={(iban) => {
                                        console.log('iban', iban)
                                        setIBAN(iban)
                                    }} />
                            </View>
                            <View>
                                <TouchableOpacity style={Style.addbtn} onPress={() => handleAddButtonPress()}>
                                    <Text style={Style.modalbtntxt}>ADD</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View >
    )
}
export default Business;