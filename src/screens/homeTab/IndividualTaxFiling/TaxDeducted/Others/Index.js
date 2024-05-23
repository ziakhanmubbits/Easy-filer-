import { View, Text, TouchableOpacity, ScrollView, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style'
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { useSelector } from 'react-redux'
import Button from '../../../../Components/Index'
import { useAddTaxDeductionPostMutation } from '../../../../../Services/GetApiCall'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls'
import AnimatedLottieView from 'lottie-react-native'
import { SmallText } from '../../../../Components/Text'

const Others = () => {

  const navigation = useNavigation();



  const [bgcolor, setBgColor] = useState("firebrick")
  const [text, settext] = useState("white")
  const [text1, settext1] = useState("firebrick")
  const [bgcolor1, setBgColor1] = useState("white")

  //2nd
  const [bgcolor6, setBgColor6] = useState("firebrick")
  const [text6, settext6] = useState("white")
  const [text7, settext7] = useState("firebrick")
  const [bgcolor7, setBgColor7] = useState("white")

  //3rd
  const [bgcolor8, setBgColor8] = useState("firebrick")
  const [text9, settext9] = useState("white")
  const [text10, settext10] = useState("firebrick")
  const [bgcolor11, setBgColor11] = useState("white")

  //4th
  const [bgcolor12, setBgColor12] = useState("firebrick")
  const [text13, settext13] = useState("white")
  const [text14, settext14] = useState("firebrick")
  const [bgcolor15, setBgColor15] = useState("white")


  const [propertyPurchase, setPropertyPurchase] = useState('');
  const [propertySale, setPropertySale] = useState('');
  const [educationalFee, setEducationalFee] = useState('');
  const [fundWithdraw, setFundWithdraw] = useState('');
  const [deduction, setDeduction] = useState('');
  const [propertyPurchaseError, setPropertyPurchaseError] = useState(false);
  const [propertySaleError, setPropertySaleError] = useState(false);
  const [educationalFeeError, setEducationalFeeError] = useState(false);
  const [fundWithdrawError, setFundWithdrawError] = useState(false);
  const [deductionError, setDeductionError] = useState(false);
  const [isLoading,setIsLoading]=useState(false)



  const deductionTypeId = useSelector((state) => state.myReducer.deductionTypeId)
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const taxDeductedName=useSelector((state)=> state.myReducer.taxDeductedName)


  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/taxdeducts?deductiontype_id=${deductionTypeId}`);
      const taxDeduction = res.data.taxdeducts;
      const taxDeductionArray = Object.values(taxDeduction);

      if (taxDeductionArray.length > 0) {
        const lastIndex = taxDeductionArray[taxDeductionArray.length - 1];
        console.log('Last index:', lastIndex);
       setPropertyPurchase(lastIndex.tax_paid_property_purchase)
       setPropertySale(lastIndex.tax_paid_property_sale)
       setEducationalFee(lastIndex.tax_paid_on_education)
       setFundWithdraw(lastIndex.tax_paid_fund_withdraw)
       setDeduction(lastIndex.tax_deducted)
     
      } else {
        console.log('No tax deductions found.');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const [addpost] = useAddTaxDeductionPostMutation();

  const addtaxDeduction = async () => {

    if (!propertyPurchase) {
      setPropertyPurchaseError(true);
    }
    else if (!propertySale) {
      setPropertySaleError(true);
    }
    else if (!educationalFee) {
      setEducationalFeeError(true);
    }
    else if (!fundWithdraw) {
      setFundWithdrawError(true);
    }
    else if (!deduction) {
      setDeductionError(true);
    } else {

      const postParams = {
        registration_no: '',
        consumer_no: '',
        tax_deducted: deduction,
        tax_paid_property_purchase: propertyPurchase,
        tax_paid_property_sale: propertySale,
        tax_paid_on_education: educationalFee,
        tax_paid_fund_withdraw: fundWithdraw,
        deductiontype_id: deductionTypeId,
      }
      try {
        setIsLoading(true)
        const res = await addpost({ postParams, taxFilingId })
        console.log('TAXDEDUCTIONData', res.data)
        if (res.data) {
          navigation.navigate('wealth')
        }
      } catch (error) {
        console.log('Error', error)
      }finally {
        setIsLoading(false)
    }
    }
  }


  return (
    <View style={Style.container}>
      <ScrollView>
      {isLoading ? 
          (
            <View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
        </View>
          )
          :
          (
      <><View style={Style.screennameview}>
              <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{taxDeductedName}</Text>
              </View>
            </View><View style={Style.container}>
                <View style={[Style.hideview1]}>
                  <View style={{ flexDirection: "row", width: responsiveScreenWidth(90), justifyContent: "space-between" }}>
                    <View style={{ width: responsiveScreenWidth(70) }}>
                      {/* <Text style={Style.text5}>Tax paid at the time of property transaction Purchase.</Text> */}
                      <SmallText
                      text={'Tax paid at the time of property transaction Purchase.'}
                      style={Style.text5}
                      />
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor === 'white') {
                            setBgColor1('white')
                            setBgColor('firebrick')
                            settext1('firebrick')
                            settext('white')
                          }
                        } }>
                        <Text style={{ color: text }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor1 }}
                        onPress={() => {
                          if (bgcolor1 === 'white') {
                            setBgColor1('firebrick')
                            setBgColor('white')
                            settext1('white')
                            settext('firebrick')
                          }
                        } }>
                        <Text style={{ color: text1 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  {bgcolor1 === 'firebrick' &&
                    (
                      <View style={{ alignItems: "center", marginTop: "5%" }}>
                        <TextInput style={[Style.placeholder1,{borderColor:propertyPurchaseError ? 'red':'grey'}]}
                          textAlign={'center'}
                          placeholder='Amount'
                          keyboardType='numeric'
                          placeholderTextColor={propertyPurchaseError ? 'red' : 'black'}
                          value={propertyPurchase}
                          onChangeText={text => [setPropertyPurchase(text), setPropertyPurchaseError(false)]} />
                      </View>
                    )}
                </View>

                <View style={Style.hideview1}>
                  <View style={{ flexDirection: "row", width: responsiveScreenWidth(90), justifyContent: "space-between" }}>
                    <View style={{ width: responsiveScreenWidth(70) }}>
                      {/* <Text style={Style.text5}>Tax paid at the time of property transaction Sale.</Text> */}
                      <SmallText
                      text={'Tax paid at the time of property transaction Sale.'}
                      style={Style.text5}
                      />
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor6 }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor6 === 'white') {
                            setBgColor7('white')
                            setBgColor6('firebrick')
                            settext7('firebrick')
                            settext6('white')
                          }
                        } }>

                        <Text style={{ color: text6 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor7 }}
                        onPress={() => {
                          if (bgcolor7 === 'white') {
                            setBgColor7('firebrick')
                            setBgColor6('white')
                            settext7('white')
                            settext6('firebrick')
                          }
                        } }
                      >
                        <Text style={{ color: text7 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  {bgcolor7 === 'firebrick' &&
                    (
                      <View style={{ alignItems: "center", marginTop: "5%" }}>
                        <TextInput style={[Style.placeholder1,{borderColor:propertySaleError ? 'red':'grey'}]}
                          textAlign={'center'}
                          placeholder='Amount'
                          keyboardType='numeric'
                          placeholderTextColor={propertySaleError ? 'red' : 'black'}
                          value={propertySale}
                          onChangeText={text => [setPropertySale(text), setPropertySaleError(false)]} />
                      </View>
                    )}

                </View>

                <View style={[Style.hideview1]}>
                  <View style={{ flexDirection: "row", width: responsiveScreenWidth(90), justifyContent: "space-between" }}>
                    <View style={{ width: responsiveScreenWidth(70) }}>
                      <Text style={Style.text5}>Tax paid on educational institution</Text>
                      <Text style={Style.text5}>fee.</Text>
                    </View>


                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor8 }}
                        onPress={() => {


                          if (bgcolor8 === 'white') {
                            setBgColor11('white')
                            setBgColor8('firebrick')
                            settext10('firebrick')
                            settext9('white')
                          }
                        } }>

                        <Text style={{ color: text9 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor11 }}
                        onPress={() => {


                          if (bgcolor11 === 'white') {
                            setBgColor11('firebrick')
                            setBgColor8('white')
                            settext10('white')
                            settext9('firebrick')
                          }
                        } }
                      >
                        <Text style={{ color: text10 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View>
                  {bgcolor11 === 'firebrick' &&
                    (
                      <View>
                        <View style={{ alignItems: "center" }}>
                          <TextInput style={[Style.placeholder1,{borderColor:educationalFeeError ? 'red':'grey'}]}
                            textAlign={'center'}
                            placeholder='Amount'
                            keyboardType='numeric'
                            placeholderTextColor={educationalFeeError ? 'red' : 'black'}
                            value={educationalFee}
                            onChangeText={text => [setEducationalFee(text), setEducationalFeeError(false)]} />
                        </View>
                      </View>
                    )}

                </View>


                <View style={Style.hideview1}>
                  <View style={{ flexDirection: "row", width: responsiveScreenWidth(90), justifyContent: "space-between" }}>
                    <View style={{ width: responsiveScreenWidth(70) }}>
                      {/* <Text style={Style.text5}>Withdrawal of funds from voluntary Pension Scheme</Text> */}
                      <SmallText
                      text={'Tax paid at the time of cash withdrawal from bank tab is missing'}
                      style={Style.text5}
                      />

                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor12 }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor12 === 'white') {
                            setBgColor15('white')
                            setBgColor12('firebrick')
                            settext14('firebrick')
                            settext13('white')

                          }
                        } }>

                        <Text style={{ color: text13 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor15 }}
                        onPress={() => {
                          if (bgcolor15 === 'white') {
                            setBgColor15('firebrick')
                            setBgColor12('white')
                            settext14('white')
                            settext13('firebrick')
                          }
                        } }
                      >
                        <Text style={{ color: text14 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  {bgcolor15 === 'firebrick' &&
                    (
                      <View style={{ alignItems: "center", justifyContent: "space-evenly", marginBottom: "3%", flexDirection: "row" }}>
                        <TextInput style={[Style.placeholder1,{borderColor:fundWithdrawError ? 'red':'grey'}]}
                          textAlign={'center'}
                          placeholder='Fund Withdrawn'
                          keyboardType='numeric'
                          placeholderTextColor={fundWithdrawError ? 'red' : 'black'}
                          value={fundWithdraw}
                          onChangeText={text => [setFundWithdraw(text), setFundWithdrawError(false)]} />
                        <TextInput style={[Style.placeholder1,{borderColor :deductionError ? 'red':'grey' }]}
                          textAlign={'center'}
                          placeholder='Tax Deducted'
                          keyboardType='numeric'
                          placeholderTextColor={deductionError ? 'red' : 'black'}
                          value={deduction}
                          onChangeText={text => [setDeduction(text), setDeductionError(false)]} />
                      </View>
                    )}

                </View>
              </View></>
 )}
      </ScrollView>
     
      <Button
     onPressBack={() => navigation.navigate('TaxD')}
     onPressForward={()=> addtaxDeduction()}
      />
        
    </View>
  )
}

export default Others;