import { View, Text, TextInput,TouchableOpacity, ToastAndroid,FlatList,Modal,Image } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { useAddTaxDeductionPostMutation, useGetProviderQuery, useGetUtilityQuery } from '../../../../../Services/GetApiCall';
import { Dropdown } from 'react-native-element-dropdown';
import { Fonts } from '../../../../../assets/Styles/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderId, setUtilityId } from '../../../../../store/myReducer';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import Button from '../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import { ScrollView } from 'react-native';

const UtilitiesNo = () => {
  const navigation=useNavigation();
  const showToast = () => {
      ToastAndroid.show('Utility Added Successfully', ToastAndroid.SHORT);
  };

  const [utitlity, setUtitlity] = useState('');
  const [providerTypes, setProviderTypes] = useState('');
  const [consumerNo, setConsumerNo] = useState('');
  const [deduction, setDeduction] = useState('');
  const [consumerNoError, setConsumerNoError] = useState(false);
  const [deductionError, setDeductionError] = useState(false);
  const [array,setArray]=useState([])
  const [showModal, setShowModal] = useState(false)
  const [getLoading,setGetLoading]=useState(false)
  const [loading,setLoading]=useState(false)

  const dispatch = useDispatch();
  const saveUtilityId = (id) => {
    dispatch(setUtilityId(id))
  }

  const saveProviderId = (id) => {
    dispatch(setProviderId(id))
  }

  const utilityId = useSelector((state) => state.myReducer.utilityId);
  const deductionTypeId = useSelector((state) => state.myReducer.deductionTypeId)
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const providerId = useSelector((state) => state.myReducer.providerId);
  const taxDeductedName=useSelector((state)=> state.myReducer.taxDeductedName)
  const { data, isLoading, isError } = useGetUtilityQuery();
  // console.log('UTILITY',data?.utilities)
  const { data: provider } = useGetProviderQuery(utilityId);
  // console.log('provider', provider?.deductiontypes)
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/taxdeducts?deductiontype_id=${deductionTypeId}`)
      const taxDeduction = res.data.taxdeducts
      console.log('deduction', taxDeduction)
      const taxDeductionArray=Object.values(taxDeduction)
      setArray(taxDeductionArray)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('error', error)

    }
  }

  const deleteDeduction = async (id) => {
    setLoading(true)
    try {
      await axios.delete(
        BASE_URL + `taxfillings/${taxFilingId}/taxdeducts/${id}`
      );
      const updatedArray = array.filter(
        deduction => deduction.id !== id
      );
      setArray(updatedArray);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error deleting deduction:', error);
    }
  };

  const resetFormFields = () => {
    setUtitlity(null);
    setProviderTypes(null);
    setConsumerNo('');
    setDeduction('');
  };

  const [addpost,isLoader] = useAddTaxDeductionPostMutation();
  const addtaxDeduction = async () => {
   if(!consumerNo){
      setConsumerNoError(true)
    }else if(!deduction){
        setDeductionError(true)
    }else{
    const postParams = {
      registration_no: '',
      consumer_no: consumerNo,
      tax_deducted: deduction,
      tax_paid_property_purchase: '',
      tax_paid_property_sale: '',
      tax_paid_on_education: '',
      tax_paid_fund_withdraw: '',
      deductiontype_id: deductionTypeId,
      utility_id: utilityId,
      provider_id: providerId,
    }
    try {
      const res = await addpost({ postParams, taxFilingId })
      console.log('TAXDEDUCTIONData', res.data)
      if (res.data) {
        showToast()
        resetFormFields();
        // navigation.navigate('TaxSavings')
      }
    } catch (error) {
      console.log('Error', error)

    }
  }
  }
  return (
    <><View style={Style.screennameview}>
      <View style={{justifyContent:"center",marginVertical:"2%"}}>
      <Text style={Style.screennametext}>{taxDeductedName} Tax</Text>
      </View>
    </View>
    <View style={Style.container}>
      <ScrollView>
        <View style={Style.container}>
          {isLoading || isLoader.isLoading ? (
            < View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
          ) : (
            <><View style={Style.icntxtinput}>
              <Dropdown
                style={Style.dropdown}
                placeholderStyle={{
                  fontSize: Fonts.f16,
                  color: 'black',
                }}
                selectedTextStyle={{
                  fontSize: Fonts.f16,
                  color: 'black',
                }}
                containerStyle={{
                  height: '30%',
                  backgroundColor: 'white',
                }}
                itemTextStyle={{
                  color: 'black',
                  fontSize: Fonts.f14,
                }}
                data={data?.utilities}
                labelField="name"
                valueField="name"
                placeholder={'Please Select Utility'}
                value={utitlity}
                onChange={item => {
                  [setUtitlity(item.rate), saveUtilityId(item.id)];
                } } />
            </View><View style={{ marginTop: "6%" }}>
                {provider &&
                  (
                    <View style={Style.icntxtinput2}>
                      <Dropdown
                        style={Style.dropdown2}
                        placeholderStyle={{
                          fontSize: Fonts.f16,
                          color: 'black',
                        
                        }}
                        selectedTextStyle={{
                          fontSize: Fonts.f16,
                          color: 'black',
                        }}
                        containerStyle={{
                          height: '30%',
                          backgroundColor: 'white',
                        }}
                        itemTextStyle={{
                          color: 'black',
                          fontSize: Fonts.f14,
                        }}
                        data={provider.deductiontypes}
                        labelField="name"
                        valueField="name"
                        placeholder={'Please Select Provider'}
                        value={providerTypes}
                        onChange={item => {
                          [setProviderTypes(item.name), saveProviderId(item.id)];
                        } } />
                    </View>
                  )
                }
              </View><View style={{ flexDirection: "column" }}>
                <TextInput style={[Style.placeholder1,{borderColor:consumerNoError ? 'red':'grey'}]}
                  placeholder='Consumer No / Refrence No'
                  placeholderTextColor={consumerNoError ? 'red':"grey"}
                  value={consumerNo}
                  onChangeText={text => [setConsumerNo(text),setConsumerNoError(false)]} />
                <TextInput style={[Style.placeholder1,{borderColor:deductionError ? 'red':'grey'}]}
                  keyboardType='numeric'
                  placeholder='Tax Deducted'
                  placeholderTextColor={deductionError ? 'red':"grey"}
                  value={deduction}
                  onChangeText={text => [setDeduction(text),setDeductionError(false)]} />
              </View><View style={{ flexDirection: "row", marginTop: "3%" }}>
                <TouchableOpacity style={{ backgroundColor: "firebrick", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3 }}
                  onPress={() => [addtaxDeduction()]}
                >
                  <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "dodgerblue", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3, marginLeft: "1.5%" }}
                  onPress={() => [setShowModal(true),fetchData()]}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>View Details</Text>
                </TouchableOpacity>
              </View></>
          )}
        </View>
        </ScrollView>
        <Button
          onPressBack={() => navigation.navigate('TaxD')}
          onPressForward={()=> navigation.navigate('wealth')}
        />
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
           >
            <View
              style={Style.modalviewstyle}>
              <View style={Style.innercontainer}>
                <View style={Style.modaltxtview}>
                  <Text style={Style.modaltxt}>Vehicle List</Text>
                  <TouchableOpacity onPress={() => { setShowModal(false); } }>
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
                    data={array}
                    alwaysBounceVertical
                    renderItem={({ item }) => {
                      return (
                        <View style={Style.item}>

                          <View style={Style.flatlisttxt}>
                            <View>
                            <Text style={Style.modaltxt1}>utility : <Text style={Style.modaltxt2}>{item.utility_id}</Text></Text>
                            <Text style={Style.modaltxt1}>Refrence No :   <Text style={Style.modaltxt2}>{item.consumer_no}</Text></Text>
                            <Text style={Style.modaltxt1}>Tax : <Text style={Style.modaltxt2}>{item.tax_deducted}</Text></Text>
                            </View>
                            <View style={{width:responsiveScreenWidth(5.5),height:responsiveScreenHeight(3.3),marginTop:"2%"}}>
                              <TouchableOpacity onPress={()=> deleteDeduction(item.id)}>
                              <Image source={require('../../../../../../src/assets/pictures/image71.png')} 
                              style={{width:"100%",height:"100%"}}
                              />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    } }
                    keyExtractor={(item) => {
                      return item.id;
                    } } />
                  )}
                </View>

              </View>
            </View>
          </Modal>
        </View>
      </View></>
  )
}
export default UtilitiesNo;