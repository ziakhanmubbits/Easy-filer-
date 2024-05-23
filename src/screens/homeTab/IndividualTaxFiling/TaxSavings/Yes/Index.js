import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import {responsiveHeight,responsiveScreenFontSize,responsiveScreenWidth,responsiveWidth} from 'react-native-responsive-dimensions'
import Button from '../../../../Components/Index'
import { useAddTaxSavingPostMutation } from '../../../../../Services/GetApiCall'
import { useSelector } from 'react-redux'
import AnimatedLottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls'
import FontFamily from '../../../../../assets/customFonts/customFonts'

const TaxSavingsYes = () => {
  const navigation=useNavigation();
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
  const [donation, setDonation] = useState('')
  const [investment, setInvestment] = useState('')
  const [interest, setInterest] = useState('')
  const [childrenNo, setChildrenNo] = useState('')
  const [tuitionFee, setTuitionFee] = useState('')
  const [donationError, setDonationError] = useState(false)
  const [investmentError, setInvestmentError] = useState(false)
  const [interestError, setInterestError] = useState(false)
  const [childrenNoError, setChildrenNoError] = useState(false)
  const [tuitionFeeError, setTuitionFeeError] = useState(false)
  const [isLoading,setIsLoading]=useState(false)

  // getting taxfilling id 
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);

//get taxsaving api
  useEffect(()=>{
    fetchData();
  },[])

  const [taxSavingId,setTaxSavingId]=useState(0)
  const fetchData= async()=>{
    try{
const res=await axios.get(BASE_URL + `taxfillings/${taxFilingId}/taxsavings`)
      const savings=(res.data.taxsavings)
      console.log('savings',savings)
      if (savings.length > 0) {
        const lastIndex = savings.length - 1;
        const lastSaving = savings[lastIndex];
        setDonation(lastSaving.donation)
        setInvestment(lastSaving.insurance)
        setInterest(lastSaving.pension_fund)
        setChildrenNo(lastSaving.rent_house_load)
        setTuitionFee(lastSaving.children_tuition_fee)
        setTaxSavingId(lastSaving.id)
        console.log('lastSaving',lastSaving.id)
      } else {
        console.log('The savings array is empty.');
      }
    }catch(error){
      console.log('error',error)
    }
  }

  //post tax saving api 
  const [addpost] = useAddTaxSavingPostMutation();
  const addTaxSaving = async () => {
    if (!donation) {
      setDonationError(true);
    }
    else if (!investment) {
      setInvestmentError(true);
    }
    else if (!interest) {
      setInterestError(true);
    }
    else if (!childrenNo) {
      setChildrenNoError(true);
    }
    else if (!tuitionFee) {
      setTuitionFeeError(true);
    }else{
    const postParams = {
      donation: donation,
      insurance: investment,
      pension_fund: interest,
      health_insurance_premium: "",
      rent_house_load: childrenNo,
      children_tuition_fee: tuitionFee,
      taxfilling_id: taxFilingId,
    }
    try {
      setIsLoading(true)
      const res = await addpost({ postParams, taxFilingId,taxSavingId })
      console.log('TaxSaving', res.data)
      if (res.data) {
        navigation.navigate('TaxD')
      }
    } catch (error) {
      console.log('Error', error)
    }
    finally {
      setIsLoading(false); 
    }
  }
  }
  return (
    <View style={Style.container}>
      {isLoading ? (
       <View style={Style.loader}>
       <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
   </View>
      )
      :
      (
      <><View style={Style.view1}>
            <Text style={Style.view1txt}>Tax Savings</Text>
          </View><View style={Style.view2}>
            </View><ScrollView>
              <View style={Style.container}>
                <View style={[Style.hideview1]}>
                  <View style={{flexDirection:"row",width:responsiveScreenWidth(90),justifyContent:"space-between"}}>
                  <View style={{width:responsiveScreenWidth(70)}}>
                    <Text style={{color:"black",fontSize:responsiveScreenFontSize(2),fontFamily:FontFamily.OpenSansMedium}}>Have you made any donation through crossed cheque to any approved charity instituion?</Text>
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
                        <TextInput style={[Style.placeholder1,{borderColor:donationError ? 'red':'grey'}]}
                          keyboardType='numeric'
                          textAlign={'center'}
                          placeholder='Amount'
                          placeholderTextColor={donationError ? 'red': 'grey'}
                          value={donation}
                          onChangeText={text => [setDonation(text), setDonationError(false)]} />
                      </View>
                    )}
                </View>
                <View style={Style.hideview1}>
                  <View style={{flexDirection:"row",width:responsiveScreenWidth(90),justifyContent:"space-between"}}>
                  <View style={{width:responsiveScreenWidth(70)}}>
                    <Text style={{color:"black",fontSize:responsiveScreenFontSize(2),fontFamily:FontFamily.OpenSansMedium}}>Any investment in shares(under ipo scheme),mutual funds,or life insurance premium?</Text>
                  </View>
                  <View style={Style.switchtoggleview}>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor6 }}
                      onPress={() => {
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
                        <TextInput style={[Style.placeholder1,{borderColor:investmentError ? 'red':'grey'}]}
                          keyboardType='numeric'
                          textAlign={'center'}
                          placeholder='Amount'
                          placeholderTextColor={investmentError ? 'red':'grey'}
                          value={investment}
                          onChangeText={text => [setInvestment(text), setInvestmentError(false)]} />
                      </View>
                    )}

                </View>
                <View style={[Style.hideview1]}>
                  <View style={{flexDirection:"row",width:responsiveScreenWidth(90),justifyContent:"space-between"}}>
                  <View style={{width:responsiveScreenWidth(70)}}>
                    <Text style={{color:"black",fontSize:responsiveScreenFontSize(2),fontFamily:FontFamily.OpenSansMedium}}>Did you pay any interest / rent on house loan?</Text>
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
                          <TextInput  style={[Style.placeholder1,{borderColor:interestError ? 'red':'grey'}]}
                            keyboardType='numeric'
                            textAlign={'center'}
                            placeholder='Amount'
                            placeholderTextColor={interestError ? 'red':'grey'}
                            value={interest}
                            onChangeText={text => [setInterest(text), setInterestError(false)]} />
                        </View>
                      </View>
                    )}
                </View>
                <View style={Style.hideview1}>
                  <View style={{flexDirection:"row",width:responsiveScreenWidth(90),justifyContent:"space-between"}}>
                  <View style={{width:responsiveScreenWidth(70)}}>
                    <Text style={{color:"black",fontSize:responsiveScreenFontSize(2),fontFamily:FontFamily.OpenSansMedium}}>Did you pay tuition fee for your children education?</Text>
                  </View>
                  <View style={Style.switchtoggleview}>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor12 }}
                      onPress={() => {
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
                      <View style={{ marginBottom: "3%" }}>
                        <View style={{ alignItems: "center" }}>
                          <TextInput style={[Style.placeholder1,{borderColor:childrenNoError ? 'red':'grey'}]}
                            keyboardType='numeric'
                            textAlign={'center'}
                            placeholder='Number of children'
                            placeholderTextColor={childrenNoError ? 'red': 'grey'}
                            value={childrenNo}
                            onChangeText={text => [setChildrenNo(text), setChildrenNoError(false)]} />
                        </View>
                        <Text style={{color:"black",fontSize:responsiveScreenFontSize(2),fontFamily:FontFamily.OpenSansMedium,marginLeft:"5%"}}>How much tuition fee did you pay?</Text>
                        <View style={{ alignItems: "center", marginTop: "2%" }}>
                          <TextInput style={[Style.placeholder1,{borderColor:tuitionFeeError ? 'red':'grey'}]}
                            keyboardType='numeric'
                            textAlign={'center'}
                            placeholder='Amount'
                            placeholderTextColor={tuitionFeeError ? 'red':'grey'}
                            value={tuitionFee}
                            onChangeText={text => [setTuitionFee(text), setTuitionFeeError(false)]} />
                        </View>
                      </View>
                    )}
                </View>
              </View>
            </ScrollView><Button
              onPressBack={() => navigation.navigate('Tax')}
              onPressForward={() => addTaxSaving()} /></>
      )}
    </View>
  )
}
export default TaxSavingsYes;