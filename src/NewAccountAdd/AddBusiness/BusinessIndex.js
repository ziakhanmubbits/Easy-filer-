import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import PhoneInput from 'react-native-phone-number-input';
import Style from './Style';

const BusinessIndex = () => {
    const items = [
        { label: 'Parent', value: '1' },
        { label: 'Sibling', value: '2' },
        { label: 'Child', value: '3' },
        { label: 'other', value: '4' },
    ];
    const [value, setValue] = useState(null);
    const phoneInput = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [errNum, setErrNum] = useState("");
    return (
        <View style={Style.mian}>
            <ScrollView contentContainerStyle={Style.contentstyle}>
                <View style={Style.viewinsidescroll}>
                    <Dropdown
                        style={Style.dropdown}
                        placeholderStyle={{
                            fontSize: 14,
                        }}
                        selectedTextStyle={{
                            fontSize: 16,
                        }}
                        inputSearchStyle={{
                            height: 40,
                            fontSize: 16,
                        }}
                        data={items}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select Legal Structure'}
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                    />
                    <TextInput style={Style.box1} placeholder='Full Name'
                        onChangeText={(txt) => {
                            if (name === '') {
                                setNameErr('Enter Name')
                            } else {
                                setNameErr('')
                                setName(txt)
                            }
                        }}
                    />
                    <Text style={Style.error}>{nameErr}</Text>
                    <TextInput style={Style.box} placeholder='Email Address'
                        onChangeText={(txt) => {
                            let re = /\S+@\S+\.\S+ /;
                            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                            let reg = /^\S*$/;
                            if (txt === '') {
                                setEmailError('required')
                            } else {
                                setEmailError('')
                            }
                            if (re.test(txt) || regex.test(txt)) {
                                setEmailError('')
                            } else {
                                setEmailError('Invalid Email')
                            }
                            if (!reg.test(txt)) {
                                setEmailError('spaces not allowed');
                            } else {
                                setEmail(txt)
                            }
                        }}
                    />
                    <Text style={Style.error}>{emailError}</Text>
                    <View style={Style.box2}>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            defaultCode="PK"
                            containerStyle={Style.phoneNumberView}
                            textContainerStyle={Style.nbr}
                            onChangeFormattedText={phoneNumber => {
                                const isValid = phoneInput.current?.isValidNumber(phoneNumber);
                                if (!isValid) {
                                    setErrNum('not valid number')
                                } else {
                                    setErrNum('')
                                    console.log("SUBMITTED! ", phoneNumber)
                                    setPhoneNumber(phoneNumber)
                                }
                            }}/>
                        <Text style={Style.error}>{errNum}</Text>
                    </View>
                    <View style={Style.btnview}>
                        <TouchableOpacity style={Style.btn}>
                            <Text style={Style.txtbtn}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default BusinessIndex
