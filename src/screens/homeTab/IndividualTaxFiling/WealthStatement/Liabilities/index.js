import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState} from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Fonts } from '../../../../../assets/Styles/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';
import { useAddWealthStatementPostMutation, useGetOtherLiabilitiesQuery } from '../../../../../Services/GetApiCall';
import Style from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setLiabilitiesId } from '../../../../../store/myReducer';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import Button from '../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

const Liabilities = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const showToast = () => {
    if (liabilitiesType && amount && description) {
      ToastAndroid.show('Other Liabilities Added Successfully', ToastAndroid.SHORT);
    }
  }

  const [liabilitiesType, setLiabilitiesType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [liabilitiesTypeError, setLiabilitiesTypeError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [array, setArray] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)


  const saveLiabilitiesId = (id) => {
    dispatch(setLiabilitiesId(id))
  }

  const liabilitiesId = useSelector((state) => state.myReducer.liabilitiesId);
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const assetypetId = useSelector((state) => state.myReducer.assetypetId);
  const wealthscreenName = useSelector((state) => state.myReducer.wealthscreenName);

  //PropertyType Api
  const { data, isLoading } = useGetOtherLiabilitiesQuery();

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
    setLiabilitiesType(null);
    setInstitutionName('');
    setValueCost('');
  };

  const [addpost,isLoader] = useAddWealthStatementPostMutation();
  const addWealthStatement = async () => {
    if (!liabilitiesType) {
      setLiabilitiesTypeError(true);
    } else if (!amount) {
      setAmountError(true);
    } else if (!description) {
      setDescriptionError(true);
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
        value_at_cost: '',
        cash_balance: '',
        institution_name: '',
        amount: amount,
        taxfilling_id: taxFilingId,
        property_type_id: '',
        vehicle_id: '',
        bankaccount_id: '',
        possession_type_id: '',
        asset_type_id: '',
        libility_type_id: liabilitiesId,
        wealth_type_id: assetypetId,
      }
      try {
        const res = await addpost({ postParams, taxFilingId })
        console.log('WealthStatement', res.data)
        if (res.data) {
          showToast()
          resetFormFields()
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
                style={[Style.dropdown, { borderColor: liabilitiesTypeError ? 'red' : 'black' }]}
                placeholderStyle={{
                  fontSize: Fonts.f16,
                  color: 'black',
                  color: liabilitiesTypeError ? 'red' : 'black'
                }}
                selectedTextStyle={{
                  fontSize: Fonts.f16,
                  color: 'black',
                }}
                containerStyle={{
                  height: '50%',
                  backgroundColor: 'white',
                }}
                iconColor={liabilitiesTypeError ? 'red' : 'black'}
                itemTextStyle={{
                  color: 'black',
                  fontSize: Fonts.f14,
                }}
                data={data.otherliabilities}
                labelField="name"
                valueField="name"
                placeholder={'Select Liabilities'}
                value={liabilitiesType}
                onChange={item => {
                  [setLiabilitiesType(item.name), saveLiabilitiesId(item.id), setLiabilitiesTypeError(false)];
                }} />

            </View><View style={{ marginTop: "6%" }}>
              </View><View style={{ flexDirection: "column" }}>

                <TextInput style={[
                  Style.placeholder1,
                  { borderColor: amountError ? 'red' : 'grey' }
                ]}
                  placeholder='Amount'
                  keyboardType='numeric'
                  placeholderTextColor={amountError ? 'red' : 'black'}
                  value={amount}
                  onChangeText={text => [setAmount(text), setAmountError(false)]} />

                <TextInput style={[
                  Style.placeholder1,
                  { borderColor: descriptionError ? 'red' : 'grey' }
                ]}
                  placeholder='Description'
                  placeholderTextColor={descriptionError ? 'red' : 'black'}
                  value={description}
                  onChangeText={text => [setDescription(text), setDescriptionError(false)]} />

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
                                    <Text style={Style.modaltxt1}>Liabilities Type: <Text style={Style.modaltxt2}>{item.libility_type_id}</Text></Text>
                                    <Text style={Style.modaltxt1}>Amount:   <Text style={Style.modaltxt2}>{item.amount}</Text></Text>
                                    <Text style={Style.modaltxt1}>Description: <Text style={Style.modaltxt2}>{item.description}</Text></Text>
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
          </View>
        </ScrollView>
        <Button
          onPressBack={() => navigation.goBack()}
        />

      </View></>

  )

}

export default Liabilities;