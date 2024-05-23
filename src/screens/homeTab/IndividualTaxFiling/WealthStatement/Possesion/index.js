import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid, Modal, FlatList, ScrollView,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Fonts } from '../../../../../assets/Styles/Fonts';
import { Dropdown } from 'react-native-element-dropdown';
import { useAddWealthStatementPostMutation, useGetPossessionQuery } from '../../../../../Services/GetApiCall';
import Style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { setPossessionTypeId } from '../../../../../store/myReducer';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import Button from '../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

const Possesion = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const showToast = () => {
        if (possessionType && description && assetCost) {
            ToastAndroid.show('Possession Added Successfully', ToastAndroid.SHORT);
        }
    };


    const [possessionType, setPossessionType] = useState('');
    const [description, setDescription] = useState('');
    const [assetCost, setAssetCost] = useState('');
    const [possessionTypeError, setPossessionTypeError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [assetCostError, setAssetCostError] = useState(false);
    const [array, setArray] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)


    const savePossessionId = (id) => {
        dispatch(setPossessionTypeId(id))
    }

    const possessiontypeId = useSelector((state) => state.myReducer.possessiontypeId);
    const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
    const assetypetId = useSelector((state) => state.myReducer.assetypetId);
    const wealthscreenName = useSelector((state) => state.myReducer.wealthscreenName);



    //VehcilesType Api
    const { data, isLoading } = useGetPossessionQuery();


    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/wealthstatements?wealth_type_id=${assetypetId}`)
            const wealthStatement = res.data.wealthStatements
            console.log('wealthStatement', wealthStatement)
            const wealthStatementArray = Object.values(wealthStatement)
            setArray(wealthStatementArray)
            setLoading(false)
        } catch (Error) {
            setLoading(false)
            console.log('Error', Error)

        }
    }


    const resetFormFields = () => {
        setPossessionType(null);
        setDescription('');
        setAssetCost('');
    };


    const [addpost, isLoader] = useAddWealthStatementPostMutation();
    const addWealthStatement = async () => {
        if (!possessionType) {
            setPossessionTypeError(true);
        } else if (!description) {
            setDescriptionError(true);
        } else if (!assetCost) {
            setAssetCostError(true);
        } else {
            const postParams = {
                assets: '',
                address: '',
                cost: '',
                registration_no: '',
                account_no: '',
                company_name: '',
                description: description,
                premium_paid: '',
                asset_cost: assetCost,
                value_at_cost: '',
                cash_balance: '',
                institution_name: '',
                amount: '',
                taxfilling_id: taxFilingId,
                property_type_id: '',
                vehicle_id: '',
                bankaccount_id: '',
                possession_type_id: possessiontypeId,
                asset_type_id: '',
                libility_type_id: '',
                wealth_type_id: assetypetId,
            }
            try {
                const res = await addpost({ postParams, taxFilingId })
                console.log('WealthStatement', res.data)
                if (res.data) {
                    showToast()
                    resetFormFields();
                    // navigation.navigate('WealthAssets')
                }
            } catch (error) {
                console.log('Error', error)

            }
        }
    }





    return (
        <><View style={Style.screennameview}>
            <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{wealthscreenName}</Text>
            </View>
        </View>
            <View style={Style.container}>
                <ScrollView>
                    {isLoading || isLoader.isLoading ? (
                        < View style={Style.loader}>
                            <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                        </View>
                    ) : (
                        <><View style={Style.icntxtinput}>

                            <Dropdown
                                style={[Style.dropdown, { borderColor: possessionTypeError ? 'red' : 'black' }]}
                                placeholderStyle={{
                                    fontSize: Fonts.f16,
                                    color: 'black',
                                    color: possessionTypeError ? 'red' : 'black'
                                }}
                                selectedTextStyle={{
                                    fontSize: Fonts.f16,
                                    color: 'black',
                                }}
                                iconColor={possessionTypeError ? 'red' : 'black'}
                                containerStyle={{
                                    height: '50%',
                                    backgroundColor: 'white',
                                }}
                                itemTextStyle={{
                                    color: 'black',
                                    fontSize: Fonts.f14,
                                }}
                                data={data.possessionTypes}
                                labelField="name"
                                valueField="name"
                                placeholder={'Select Account Type'}
                                value={possessionType}
                                onChange={item => {
                                    [setPossessionType(item.name), savePossessionId(item.id), setPossessionTypeError(false)];
                                }} />

                        </View><View style={{ marginTop: "6%" }}>
                            </View><View style={{ flexDirection: "column" }}>
                                <TextInput style={[
                                    Style.placeholder1,
                                    { borderColor: descriptionError ? 'red' : 'grey' }
                                ]}
                                    placeholder='Description'
                                    placeholderTextColor={descriptionError ? 'red' : "grey"}
                                    value={description}
                                    onChangeText={text => [setDescription(text), setDescriptionError(false)]} />
                                <TextInput style={[
                                    Style.placeholder1,
                                    { borderColor: assetCostError ? 'red' : 'grey' }
                                ]}
                                    keyboardType='numeric'
                                    placeholder='Asset Cost'
                                    placeholderTextColor={assetCostError ? 'red' : "grey"}
                                    value={assetCost}
                                    onChangeText={text => [setAssetCost(text), setAssetCostError(false)]} />
                            </View><View style={{ flexDirection: "row", marginTop: "3%" }}>
                                <TouchableOpacity style={{ backgroundColor: "firebrick", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3 }}
                                    onPress={() => [addWealthStatement()]}
                                >
                                    <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>Add</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "dodgerblue", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3, marginLeft: "1.5%" }}
                                    onPress={() => [setShowModal(true), fetchData()]}
                                >
                                    <Text style={{ color: "white", textAlign: "center" }}>View Details</Text>
                                </TouchableOpacity>
                            </View></>
                    )}

                    <View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={showModal}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisiblle(!showModal);
                            }}>
                            <View
                                style={Style.modalviewstyle}>
                                <View style={Style.innercontainer}>
                                    <View style={Style.modaltxtview}>
                                        <Text style={Style.modaltxt}>Vehicle List</Text>
                                        <TouchableOpacity onPress={() => { setShowModal(false); }}>
                                            <Entypo name='circle-with-cross' size={20} color={'white'} />
                                        </TouchableOpacity>

                                    </View>
                                    <View>
                                        {loading ?
                                            (
                                                < View style={Style.loader}>
                                                    <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                                                </View>
                                            )
                                            :
                                            (
                                                <FlatList
                                                    data={array.slice(0, 7)}
                                                    alwaysBounceVertical
                                                    renderItem={({ item }) => {
                                                        return (
                                                            <View style={Style.item}>

                                                                <View style={Style.flatlisttxt}>
                                                                    <View>
                                                                        <Text style={Style.modaltxt1}>Possesion Type: <Text style={Style.modaltxt2}>{item.possession_type_id}</Text></Text>
                                                                        <Text style={Style.modaltxt1}>Description:   <Text style={Style.modaltxt2}>{item.description}</Text></Text>
                                                                        <Text style={Style.modaltxt1}>Asset Cost: <Text style={Style.modaltxt2}>{item.asset_cost}</Text></Text>
                                                                    </View>
                                                                    <View style={{ width: responsiveScreenWidth(5.5), height: responsiveScreenHeight(3.3), marginTop: "2%" }}>
                                                                        <TouchableOpacity>
                                                                            <Image source={require('../../../../../../src/assets/pictures/image71.png')}
                                                                                style={{ width: "100%", height: "100%" }}
                                                                            />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>



                                                            </View>
                                                        );
                                                    }}
                                                    keyExtractor={(item) => {
                                                        return item.id;
                                                    }} />
                                            )}
                                    </View>

                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
                <Button
                    onPressBack={() => navigation.goBack()}
                />

            </View></>

    )

}

export default Possesion;