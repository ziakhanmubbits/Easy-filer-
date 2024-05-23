import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAddSalaryTaxPsotMutation, useGetTaxationYearQuery } from '../../../Services/salerycalculatorapicall'
import Style from './Style';
import Header from '../../ImportHeader/Header';
import { Dropdown } from 'react-native-element-dropdown';
import { Fonts } from '../../../assets/Styles/Fonts';
import FontFamily from '../../../assets/customFonts/customFonts';
import { responsiveScreenFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { setTaxableYearId } from '../../../store/mySaleryCalculatorReducer';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';

const SaleryCalculator = () => {

  const dispatch = useDispatch();

  const [taxationYear, setTaxationYear] = useState('')
  const [monthlySalary, setMonthlySalary] = useState('')
  const [taxationError, setTaxationError] = useState(false)
  const [monthlySalaryError, setMonthlySalaryError] = useState(false)
  const [montlyIncome, setMonthlyIncome] = useState('')
  const [montlyTax, setMonthlyTax] = useState('')
  const [salaryAfterTax, setSalaryAfterTax] = useState('')
  const [yearlyIncome, setYearlyIncome] = useState('')
  const [yearlyTax, setYearlyTax] = useState('')
  const [yearlyIncomeTax, setYearlyIncomeTax] = useState('')
  const [loading, setLoading] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [array,setArray]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const saveTaxableYear = (id) => {
    dispatch(setTaxableYearId(id))
  }

  const taxableYearId = useSelector((state) => state.salary.taxableYearId);

  const fetchData = async () => {
    setIsLoading(true)
    try {
        const res=await axios.get(BASE_URL + 'fiscalyears')
        setIsLoading(false)
        setArray(res.data.fiscalyears)
    }catch(error){
      setIsLoading(false)
        console.log('Error',error)
    }
  }

  const [addpost] = useAddSalaryTaxPsotMutation();
  const addNewPost = async () => {
    if (!taxationYear) {
      setTaxationError(true)
    } else if (!monthlySalary) {
      setMonthlySalaryError(true)
    } else {

      const params = {
        monthlyincome: monthlySalary,
        fiscalyear_id: taxableYearId
      }
      try {
        setLoading(true)
        const res = await addpost(params)
        setMonthlyIncome(res.data.calculation.monthly_income)
        setMonthlyTax(res.data.calculation.monthly_tax)
        setSalaryAfterTax(res.data.calculation.salary_after_tax)
        setYearlyIncome(res.data.calculation.yearly_income)
        setYearlyTax(res.data.calculation.yearly_tax)
        setYearlyIncomeTax(res.data.calculation.yearly_income_after_tax)
        setLoading(false)
      } catch (error) {
        console.log('Error', error)
      }
    }

  }

  return (
    <View style={Style.main}>
      <View style={Style.innerview}>
        <Header />
      </View>
      <View style={{ marginTop: "10%" }}>
        <View style={Style.calculatorimageview}>
          <Image source={require('../../../../src/assets/pictures/image76.png')} style={Style.calculatorimage} />
        </View>
        <Text style={Style.imagetext}>Salary Tax Calculator</Text>
      </View>
      {isloading ?
        (
          <View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (
          <><View style={Style.textview}>


            <View style={{ alignItems: "center" }}>
                <View style={Style.icntxtinput}>

                  <Dropdown
                    style={Style.dropdown}
                    placeholderStyle={{
                      fontSize: Fonts.f16,
                      color: 'black',
                      color: taxationError ? 'red' : 'black',
                      fontFamily: FontFamily.OpenSansMedium,
                    }}
                    selectedTextStyle={{
                      fontSize: responsiveScreenFontSize(2.1),
                      color: 'black',
                      textAlign: "center",
                      fontFamily: FontFamily.OpenSansSemiBold
                    }}
                    containerStyle={{
                      height: '30%',
                      backgroundColor: 'white',
                    }}
                    itemTextStyle={{
                      color: 'black',
                      fontSize: responsiveScreenFontSize(2),
                      fontFamily: FontFamily.OpenSansSemiBold
                    }}
                    data={array}
                    labelField="fiscalyear"
                    valueField="fiscalyear"
                    placeholder={'Select Tax year'}
                    value={taxationYear}
                    onChange={item => {
                      setTaxationYear(item.fiscalyear),
                        saveTaxableYear(item.id);
                      setTaxationError(false)
                    }} />
                </View>
            </View>
          </View><View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <TextInput
                style={Style.placeholder1}
                placeholder={'Enter Monthly Salary'}
                keyboardType='numeric'
                placeholderTextColor={monthlySalaryError ? 'red' : 'black'}
                value={monthlySalary}
                onChangeText={text => [setMonthlySalary(text), setMonthlySalaryError(false)]} />
              {loading ?
                (
                  <View style={{ marginTop: "8%" }}>
                    <ActivityIndicator size={25} color={'red'} />
                  </View>
                )
                :
                (
                  <TouchableOpacity style={Style.calculatorimageview2} onPress={() => addNewPost()}>
                    <Image source={require('../../../../src/assets/pictures/image76.png')} style={Style.calculatorimage} />
                  </TouchableOpacity>
                )
              }

            </View></>
        )}
      <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: "10%" }}>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Monthly Salary</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{montlyIncome}</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Monthly Tax</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{montlyTax}</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Salary After tax</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{salaryAfterTax}</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Yearly Income</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{yearlyIncome}</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Yearly Tax</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{yearlyTax}</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(100), flexDirection: "row", justifyContent: "space-between", width: responsiveScreenWidth(80), borderBottomWidth: 1, borderColor: "black" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6) }}>Yearly Income After Tax</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.6) }}>{yearlyIncomeTax}</Text>
        </View>

      </View>
    </View>
  )
}

export default SaleryCalculator;
