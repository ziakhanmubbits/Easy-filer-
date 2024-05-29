import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput ,ActivityIndicator } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Index';
import axios from 'axios';
import Header from '../../ImportHeader/Header';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UaeVatFilling = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [formData, setFormData] = useState({
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
    });

    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const storedUserId = await AsyncStorage.getItem('USER ID');
                setUserId(storedUserId);
                console.log('User ID from AsyncStorage:', storedUserId);
            } catch (error) {
                console.error('Failed to fetch user ID from AsyncStorage', error);
            }
        };

        fetchUserId();
    }, []);

    const postData = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            const requestData = {
                uaevat: {
                    ftaid: formData.fbrId,
                    ftapassword: formData.fbrPassword,
                    "business-in-dubai-amount": formData.dubaiAmount,
                    "business-in-dubai-tax": formData.dubaiTax,
                    "business-in-sharja-amount": formData.sharjahAmount,
                    "business-in-sharja-tax": formData.sharjahTax,
                    "business-in-abudabi-amount": formData.abudhabiAmount,
                    "business-in-abudabi-tax": formData.abudhabiTax,
                    "business-in-rasulkhaima-amount": formData.rasalKhaimaAmount,
                    "business-in-rasulkhaima-tax": formData.rasalKhaimaTax,
                    "purchases-amount": formData.paidAmount,
                    "purchases-tax": formData.paidTax
                }
            };
            const res = await axios.post(`${BASE_URL}users/${userId}/uae-vats`, requestData);
            console.log('Response:.....', res);
        } catch (error) {
            console.log('ERROR', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={Style.mainView}>
            <View style={Style.innerView}>
                    <Header />
            </View>
            <ScrollView>
                <View style={Style.text1view}>
                    <Text style={Style.text1}>UAE VAT FILLING</Text>
                </View>
                {loading ? (
                    <View style={Style.loader}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <>
                        <View style={Style.placholderview}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                placeholder="FTA Id"
                                maxLength={13}
                                value={formData.fbrId}
                                onChangeText={(text) => handleChange('fbrId', text)}
                            />
                            {errors.fbrId && <Text style={{ color: "red" }}>{errors.fbrId}</Text>}
                        </View>
                        <View style={Style.placholderview}>
                            <TextInput
                                style={Style.placeholder1}
                                outlineStyle={Style.placeholder2}
                                outlineColor='black'
                                activeOutlineColor={'black'}
                                placeholder="FTA Password"
                                maxLength={13}
                                value={formData.fbrPassword}
                                onChangeText={(text) => handleChange('fbrPassword', text)}
                            />
                            {errors.fbrPassword && <Text style={{ color: "red" }}>{errors.fbrPassword}</Text>}
                        </View>
                        <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                            <Text style={Style.text2}>1. Business Activities performed in Dubai.</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Tax"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.dubaiTax}
                                    onChangeText={(text) => handleChange('dubaiTax', text)}
                                />
                                {errors.dubaiTax && <Text style={{ color: "red" }}>{errors.dubaiTax}</Text>}
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Amount"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.dubaiAmount}
                                    onChangeText={(text) => handleChange('dubaiAmount', text)}
                                />
                                {errors.dubaiAmount && <Text style={{ color: "red" }}>{errors.dubaiAmount}</Text>}
                            </View>
                        </View>
                        <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                            <Text style={Style.text2}>2. Business Activities performed in Sharjah.</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Tax"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.sharjahTax}
                                    onChangeText={(text) => handleChange('sharjahTax', text)}
                                />
                                {errors.sharjahTax && <Text style={{ color: "red" }}>{errors.sharjahTax}</Text>}
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Amount"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.sharjahAmount}
                                    onChangeText={(text) => handleChange('sharjahAmount', text)}
                                />
                                {errors.sharjahAmount && <Text style={{ color: "red" }}>{errors.sharjahAmount}</Text>}
                            </View>
                        </View>
                        <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                            <Text style={Style.text2}>3. Business Activities performed in Abu Dhabi.</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Tax"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.abudhabiTax}
                                    onChangeText={(text) => handleChange('abudhabiTax', text)}
                                />
                                {errors.abudhabiTax && <Text style={{ color: "red" }}>{errors.abudhabiTax}</Text>}
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Amount"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.abudhabiAmount}
                                    onChangeText={(text) => handleChange('abudhabiAmount', text)}
                                />
                                {errors.abudhabiAmount && <Text style={{ color: "red" }}>{errors.abudhabiAmount}</Text>}
                            </View>
                        </View>
                        <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                            <Text style={Style.text2}>4. Business Activities performed in Rasal Khaima.</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Tax"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.rasalKhaimaTax}
                                    onChangeText={(text) => handleChange('rasalKhaimaTax', text)}
                                />
                                {errors.rasalKhaimaTax && <Text style={{ color: "red" }}>{errors.rasalKhaimaTax}</Text>}
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Amount"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.rasalKhaimaAmount}
                                    onChangeText={(text) => handleChange('rasalKhaimaAmount', text)}
                                />
                                {errors.rasalKhaimaAmount && <Text style={{ color: "red" }}>{errors.rasalKhaimaAmount}</Text>}
                            </View>
                        </View>
                        <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
                            <Text style={Style.text2}>5. Input Taxes Paid on Purchases.</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Tax"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.paidTax}
                                    onChangeText={(text) => handleChange('paidTax', text)}
                                />
                                {errors.paidTax && <Text style={{ color: "red" }}>{errors.paidTax}</Text>}
                                <TextInput
                                    style={Style.placeholder3}
                                    outlineStyle={Style.placeholder4}
                                    outlineColor='black'
                                    activeOutlineColor={'black'}
                                    placeholder="Amount"
                                    keyboardType='numeric'
                                    maxLength={13}
                                    value={formData.paidAmount}
                                    onChangeText={(text) => handleChange('paidAmount', text)}
                                />
                                {errors.paidAmount && <Text style={{ color: "red" }}>{errors.paidAmount}</Text>}
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
            <Button
                title="Submit"
                onPressBack={() => navigation.goBack()}
                onPressForward={postData}
                disabled={loading}
            />
        </View>
    );
};

export default UaeVatFilling;



// import React, { useState} from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import Header from '../../ImportHeader/Header';
// import Style from './style';
// import { TextInput } from 'react-native-paper';
// import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
// import Button from '../../Components/Index';
// import { useNavigation } from '@react-navigation/native';
// import AnimatedLottieView from 'lottie-react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { BASE_URL } from '../../../CommonUrl/CommonUrls';





// const UaeVatFilling = () => {
//     const navigation = useNavigation()
//     const [loading, setLoading] = useState(false)

//     const FormSchema = Yup.object().shape({
//         fbrId: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter fbrID.'),
//         fbrPassword: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter fbrPassword.'),
//         dubaiTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
//         dubaiAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
//         sharjahTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
//         sharjahAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
//         abudhabiTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
//         abudhabiAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
//         rasalKhaimaTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
//         rasalKhaimaAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
//         paidTax: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Tax.'),
//         paidAmount: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Please enter Amount.'),
    
    
    
//     })

//     const postData = async () => {
//         setLoading(true)
//         try {
//             const requestData = {
//                 uaevat: {
//                     ftaid: '23456',
//                     ftapassword: '2345',
//                     "business-in-dubai-amount": '2345',
//                     "business-in-dubai-tax": '123456',
//                     "business-in-sharja-amount": '23456',
//                     "business-in-sharja-tax": '345678',
//                     "business-in-abudabi-amount": '12345',
//                     "business-in-abudabi-tax": '2345',
//                     "business-in-rasulkhaima-amount": '123456',
//                     "business-in-rasulkhaima-tax": '123456',
//                     "purchases-amount":'123456',
//                     "purchases-tax": '123456'
//                 }
//             };
//             const res = await axios.post(BASE_URL + `users/121/uae-vats`, requestData);
//             console.log('Response:', res);
//             setLoading(false)
//         } catch (error) {
//             setLoading(false)
//             console.log('ERROR', error);
//         }
//     }
//     return (
//         <Formik initialValues={{
//             fbrId: '1234',
//             fbrPassword: '12345',
//             dubaiTax: '12345',
//             dubaiAmount: '1234',
//             sharjahTax: '1234',
//             sharjahAmount: '1234',
//             abudhabiTax: '12345',
//             abudhabiAmount: '1234',
//             rasalKhaimaTax: '1234',
//             rasalKhaimaAmount: '1234',
//             paidTax: '1234',
//             paidAmount: '12345'
//         }}
//             validationSchema={FormSchema}
//         >
//             {({ values, errors, touched, handleSubmit, handleChange, setFieldTouched, isValid }) => (

//                 <View style={Style.mainView}>
//                     <View style={Style.innerView}>
//                         <Header />
//                     </View>
//                     <ScrollView>
//                         <View style={Style.text1view}>
//                             <Text style={Style.text1}>UAE VAT FILLING</Text>
//                         </View>
//                         {loading ?
//                             (
//                                 <View style={Style.loader}>
//                                     <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
//                                 </View>
//                             )
//                             :
//                             (
//                                 <><View style={Style.placholderview}>
//                                     <TextInput
//                                         style={Style.placeholder1}
//                                         outlineStyle={Style.placeholder2}
//                                         outlineColor='black'
//                                         activeOutlineColor={'black'}
//                                         label="FTA Id"
//                                         maxLength={13}
//                                         value={values.fbrId}
//                                         onChangeText={handleChange('fbrId')}
//                                         mode="outlined" />
//                                     {
//                                         errors.fbrId && (
//                                             <Text style={{ color: "red" }}>{errors.fbrId}</Text>
//                                         )
//                                     }
//                                 </View>
//                                     <View style={Style.placholderview}>
//                                         <TextInput
//                                             style={Style.placeholder1}
//                                             outlineStyle={Style.placeholder2}
//                                             outlineColor='black'
//                                             activeOutlineColor={'black'}
//                                             label="FTA Password"
//                                             maxLength={13}
//                                             value={values.fbrPassword}
//                                             onChangeText={handleChange('fbrPassword')}
//                                             mode="outlined"
//                                         />
//                                         {
//                                             errors.fbrPassword && (
//                                                 <Text style={{ color: "red" }}>{errors.fbrPassword}</Text>
//                                             )
//                                         }
//                                     </View>
//                                     <View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
//                                         <Text style={Style.text2}>1.Business Activities performed in Dubai.</Text>
//                                         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Tax"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.dubaiTax}
//                                                 onChangeText={handleChange('dubaiTax')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.dubaiTax && (
//                                                     <Text style={{ color: "red" }}>{errors.dubaiTax}</Text>
//                                                 )
//                                             }
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Amount"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.dubaiAmount}
//                                                 onChangeText={handleChange('dubaiAmount')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.dubaiAmount && (
//                                                     <Text style={{ color: "red" }}>{errors.dubaiAmount}</Text>
//                                                 )
//                                             }
//                                         </View>
//                                     </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
//                                         <Text style={Style.text2}>2.Business Activities performed in Sharjah.</Text>
//                                         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Tax"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.sharjahTax}
//                                                 onChangeText={handleChange('sharjahTax')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.sharjahTax && (
//                                                     <Text style={{ color: "red" }}>{errors.sharjahTax}</Text>
//                                                 )
//                                             }
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Amount"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.sharjahAmount}
//                                                 onChangeText={handleChange('sharjahAmount')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.sharjahAmount && (
//                                                     <Text style={{ color: "red" }}>{errors.sharjahAmount}</Text>
//                                                 )
//                                             }
//                                         </View>
//                                     </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
//                                         <Text style={Style.text2}>3.Business Activities performed in Abu Dubai.</Text>
//                                         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Tax"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.abudhabiTax}
//                                                 onChangeText={handleChange('abudhabiTax')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.abudhabiTax && (
//                                                     <Text style={{ color: "red" }}>{errors.abudhabiTax}</Text>
//                                                 )
//                                             }
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Amount"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.dubaiAmount}
//                                                 onChangeText={handleChange('dubaiAmount')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.dubaiAmount && (
//                                                     <Text style={{ color: "red" }}>{errors.dubaiAmount}</Text>
//                                                 )
//                                             }
//                                         </View>
//                                     </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
//                                         <Text style={Style.text2}>4.Business Activities performed in Rasal khaima.</Text>
//                                         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Tax"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.rasalKhaimaTax}
//                                                 onChangeText={handleChange('rasalKhaimaTax')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.rasalKhaimaTax && (
//                                                     <Text style={{ color: "red" }}>{errors.rasalKhaimaTax}</Text>
//                                                 )
//                                             }
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Amount"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.rasalKhaimaAmount}
//                                                 onChangeText={handleChange('rasalKhaimaAmount')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.rasalKhaimaAmount && (
//                                                     <Text style={{ color: "red" }}>{errors.rasalKhaimaAmount}</Text>
//                                                 )
//                                             }
//                                         </View>
//                                     </View><View style={{ marginLeft: responsiveScreenWidth(5), marginTop: responsiveScreenHeight(2) }}>
//                                         <Text style={Style.text2}>5.Input Taxes Paid on Purhases.</Text>
//                                         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Tax"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.paidTax}
//                                                 onChangeText={handleChange('paidTax')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.paidTax && (
//                                                     <Text style={{ color: "red" }}>{errors.paidTax}</Text>
//                                                 )
//                                             }
//                                             <TextInput
//                                                 style={Style.placeholder3}
//                                                 outlineStyle={Style.placeholder4}
//                                                 outlineColor='black'
//                                                 activeOutlineColor={'black'}
//                                                 label="Amount"
//                                                 keyboardType='numeric'
//                                                 maxLength={13}
//                                                 value={values.paidAmount}
//                                                 onChangeText={handleChange('paidAmount')}
//                                                 mode="outlined" />
//                                             {
//                                                 errors.paidAmount && (
//                                                     <Text style={{ color: "red" }}>{errors.paidAmount}</Text>
//                                                 )
//                                             }
//                                         </View>
//                                     </View></>
//                             )}
//                     </ScrollView>
//                     <Button
//                         onPressBack={() => navigation.goBack()}
//                         onPressForward={postData}
//                     />
//                 </View>

//             )}
//         </Formik>
//     );
// };
// export default UaeVatFilling;