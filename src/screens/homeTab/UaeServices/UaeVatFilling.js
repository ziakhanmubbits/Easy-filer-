import React, { useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../ImportHeader/Header';
import Style from './style';
import { TextInput } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Button from '../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';





const UaeVatFilling = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const FormSchema = Yup.object().shape({
        fbrId: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter fbrID.'),
        fbrPassword: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter fbrPassword.'),
        dubaiTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
        dubaiAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
        sharjahTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
        sharjahAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
        abudhabiTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
        abudhabiAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
        rasalKhaimaTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
        rasalKhaimaAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
        paidTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
        paidAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
    
    
    
    })

    const postData = async () => {
        setLoading(true)
        try {
            const requestData = {
                uaevat: {
                    ftaid: fbrId,
                    ftapassword: fbrPassword,
                    "business-in-dubai-amount": dubaiAmount,
                    "business-in-dubai-tax": dubaiTax,
                    "business-in-sharja-amount": sharjahAmount,
                    "business-in-sharja-tax": sharjahTax,
                    "business-in-abudabi-amount": abudhabiAmount,
                    "business-in-abudabi-tax": abudhabiTax,
                    "business-in-rasulkhaima-amount": rasalKhaimaAmount,
                    "business-in-rasulkhaima-tax": rasalKhaimaTax,
                    "purchases-amount": paidAmount,
                    "purchases-tax": paidTax
                }
            };
            const res = await axios.post(BASE_URL + `users/121/uae-vats`, requestData);
            console.log('Response:', res.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('ERROR', error);
        }
    }
    return (
        <Formik initialValues={{
            fbrId: '',
            fbrPassword: '',
            dubaiTax: '',
            dubaiAmount: '',
            sharjahTax: '',
            sharjahAmount: '',
            abudhabiTax: '',
            abudhabiAmount: '',
            rasalKhaimaTax: '',
            rasalKhaimaAmount: '',
            paidTax: '',
            paidAmount: ''
        }}
            validationSchema={FormSchema}
        >
            {({ values, errors, touched, handleSubmit, handleChange, setFieldTouched, isValid }) => (

                <View style={Style.mainView}>
                    <View style={Style.innerView}>
                        <Header />
                    </View>
                    <ScrollView>
                        <View style={Style.text1view}>
                            <Text style={Style.text1}>UAE VAT FILLING</Text>
                        </View>
                        {loading ?
                            (
                                <View style={Style.loader}>
                                    <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                                </View>
                            )
                            :
                            (
                                <><View style={Style.placholderview}>
                                    <TextInput
                                        style={Style.placeholder1}
                                        outlineStyle={Style.placeholder2}
                                        outlineColor='black'
                                        activeOutlineColor={'black'}
                                        label="FTA Id"
                                        maxLength={13}
                                        value={values.fbrId}
                                        onChangeText={handleChange('fbrId')}
                                        mode="outlined" />
                                    {
                                        errors.fbrId && (
                                            <Text style={{ color: "red" }}>{errors.fbrId}</Text>
                                        )
                                    }
                                </View>
                                    <View style={Style.placholderview}>
                                        <TextInput
                                            style={Style.placeholder1}
                                            outlineStyle={Style.placeholder2}
                                            outlineColor='black'
                                            activeOutlineColor={'black'}
                                            label="FTA Password"
                                            maxLength={13}
                                            value={values.fbrPassword}
                                            onChangeText={handleChange('fbrPassword')}
                                            mode="outlined"
                                        />
                                        {
                                            errors.fbrPassword && (
                                                <Text style={{ color: "red" }}>{errors.fbrPassword}</Text>
                                            )
                                        }
                                    </View>
                                    <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={Style.text2}>1.Business Activities performed in Dubai.</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Tax"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.dubaiTax}
                                                onChangeText={handleChange('dubaiTax')}
                                                mode="outlined" />
                                            {
                                                errors.dubaiTax && (
                                                    <Text style={{ color: "red" }}>{errors.dubaiTax}</Text>
                                                )
                                            }
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Amount"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.dubaiAmount}
                                                onChangeText={handleChange('dubaiAmount')}
                                                mode="outlined" />
                                            {
                                                errors.dubaiAmount && (
                                                    <Text style={{ color: "red" }}>{errors.dubaiAmount}</Text>
                                                )
                                            }
                                        </View>
                                    </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={Style.text2}>2.Business Activities performed in Sharjah.</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Tax"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.sharjahTax}
                                                onChangeText={handleChange('sharjahTax')}
                                                mode="outlined" />
                                            {
                                                errors.sharjahTax && (
                                                    <Text style={{ color: "red" }}>{errors.sharjahTax}</Text>
                                                )
                                            }
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Amount"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.sharjahAmount}
                                                onChangeText={handleChange('sharjahAmount')}
                                                mode="outlined" />
                                            {
                                                errors.sharjahAmount && (
                                                    <Text style={{ color: "red" }}>{errors.sharjahAmount}</Text>
                                                )
                                            }
                                        </View>
                                    </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={Style.text2}>3.Business Activities performed in Abu Dubai.</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Tax"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.abudhabiTax}
                                                onChangeText={handleChange('abudhabiTax')}
                                                mode="outlined" />
                                            {
                                                errors.abudhabiTax && (
                                                    <Text style={{ color: "red" }}>{errors.abudhabiTax}</Text>
                                                )
                                            }
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Amount"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.dubaiAmount}
                                                onChangeText={handleChange('dubaiAmount')}
                                                mode="outlined" />
                                            {
                                                errors.dubaiAmount && (
                                                    <Text style={{ color: "red" }}>{errors.dubaiAmount}</Text>
                                                )
                                            }
                                        </View>
                                    </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={Style.text2}>4.Business Activities performed in Rasal khaima.</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Tax"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.rasalKhaimaTax}
                                                onChangeText={handleChange('rasalKhaimaTax')}
                                                mode="outlined" />
                                            {
                                                errors.rasalKhaimaTax && (
                                                    <Text style={{ color: "red" }}>{errors.rasalKhaimaTax}</Text>
                                                )
                                            }
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Amount"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.rasalKhaimaAmount}
                                                onChangeText={handleChange('rasalKhaimaAmount')}
                                                mode="outlined" />
                                            {
                                                errors.rasalKhaimaAmount && (
                                                    <Text style={{ color: "red" }}>{errors.rasalKhaimaAmount}</Text>
                                                )
                                            }
                                        </View>
                                    </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={Style.text2}>5.Input Taxes Paid on Purhases.</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Tax"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.paidTax}
                                                onChangeText={handleChange('paidTax')}
                                                mode="outlined" />
                                            {
                                                errors.paidTax && (
                                                    <Text style={{ color: "red" }}>{errors.paidTax}</Text>
                                                )
                                            }
                                            <TextInput
                                                style={Style.placeholder3}
                                                outlineStyle={Style.placeholder4}
                                                outlineColor='black'
                                                activeOutlineColor={'black'}
                                                label="Amount"
                                                keyboardType='numeric'
                                                maxLength={13}
                                                value={values.paidAmount}
                                                onChangeText={handleChange('paidAmount')}
                                                mode="outlined" />
                                            {
                                                errors.paidAmount && (
                                                    <Text style={{ color: "red" }}>{errors.paidAmount}</Text>
                                                )
                                            }
                                        </View>
                                    </View></>
                            )}
                    </ScrollView>
                    <Button
                        onPressBack={() => navigation.goBack()}
                        onPressForward={() => validation()}
                    />
                </View>

            )}
        </Formik>
    );
};
export default UaeVatFilling;