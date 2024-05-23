import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Modal, FlatList, ScrollView,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import Style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { useAddWealthStatementPostMutation } from '../../../../../Services/GetApiCall';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import Button from '../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

const Insurence = () => {
  const navigation = useNavigation();
  const showToast = () => {
    if (description && valueCost) {
      ToastAndroid.show('Foriegn Assets Added Successfully', ToastAndroid.SHORT);
    }
  };

  const [description, setDescription] = useState('');
  const [valueCost, setValueCost] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [valueCostError, setValueCostError] = useState(false);
  const [array, setArray] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const assetypetId = useSelector((state) => state.myReducer.assetypetId);
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const wealthscreenName = useSelector((state) => state.myReducer.wealthscreenName);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/wealthstatements?wealth_type_id=${assetypetId}`)
      const wealthStatement = res.data.wealthStatements
      console.log('wealthStatement', wealthStatement)
      const wealthStatementArray = Object.values(wealthStatement)
      setArray(wealthStatementArray)
      setIsLoading(false)
    } catch (Error) {
      setIsLoading(false)
      console.log('Error', Error)

    }
  }

  const resetFormFields = () => {
    setDescription('');
    setValueCost('');
  };

  const [addpost] = useAddWealthStatementPostMutation();
  const addWealthStatement = async () => {
    if (!description) {
      setDescriptionError(true);
    } else if (!valueCost) {
      setValueCostError(true);
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
        asset_cost: '',
        value_at_cost: valueCost,
        cash_balance: '',
        institution_name: '',
        amount: '',
        taxfilling_id: taxFilingId,
        property_type_id: '',
        vehicle_id: '',
        bankaccount_id: '',
        possession_type_id: '',
        asset_type_id: '',
        libility_type_id: '',
        wealth_type_id: assetypetId,
      }
      try {
        setLoading(true)
        const res = await addpost({ postParams, taxFilingId })
        console.log('WealthStatement', res.data)
        if (res.data) {
          showToast()
          resetFormFields()
          setLoading(false)
          // navigation.navigate('WealthAssets')
        }
      } catch (error) {
        setLoading(false)
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
          {loading ?
            (
              < View style={Style.loader}>
                <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
              </View>
            )
            :
            (
              <><View style={{ flexDirection: "column" }}>
                <TextInput style={[
                  Style.placeholder1,
                  { borderColor: descriptionError ? 'red' : 'grey' }
                ]}
                  placeholder='Description'
                  placeholderTextColor={descriptionError ? 'red' : 'black'}
                  value={description}
                  onChangeText={text => [setDescription(text), setDescriptionError(false)]} />

                <TextInput style={[
                  Style.placeholder1,
                  { borderColor: valueCostError ? 'red' : 'grey' }
                ]}
                  keyboardType='numeric'
                  placeholder='Value at cast'
                  placeholderTextColor={valueCostError ? 'red' : 'black'}
                  value={valueCost}
                  onChangeText={text => [setValueCost(text), setValueCostError(false)]} />

                <View style={{ flexDirection: "row", marginTop: "3%" }}>
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
                </View>
              </View><View>
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
                          <Text style={Style.modaltxt}>Foriegn Asset</Text>
                          <TouchableOpacity onPress={() => { setShowModal(false); }}>
                            <Entypo name='circle-with-cross' size={20} color={'white'} />
                          </TouchableOpacity>

                        </View>
                        <View>
                          {isLoading ?
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
                                          <Text style={Style.modaltxt1}>Description: <Text style={Style.modaltxt2}>{item.description}</Text></Text>
                                          <Text style={Style.modaltxt1}>Value at Cost:   <Text style={Style.modaltxt2}>{item.value_at_cost}</Text></Text>
                                        </View>
                                        <View style={{ width: responsiveScreenWidth(5.5), height: responsiveScreenHeight(3.3), marginTop: "2%" }}>
                                          <TouchableOpacity onPress={() => deleteDeduction(item.id)}>
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
                </View></>
            )}
        </ScrollView>
        <Button
          onPressBack={() => navigation.goBack()}
        />
      </View></>
  )

}

export default Insurence;