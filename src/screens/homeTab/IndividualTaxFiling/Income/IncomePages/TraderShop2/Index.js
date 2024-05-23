import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable,Modal,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import Entypo from 'react-native-vector-icons/Entypo';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setTaxRateId, setAdjustableRateId } from '../../../../../../store/myReducer';
import { useAddIncomesPostMutation, useGetRateQuery, useGetTaxRatesQuery } from '../../../../../../Services/GetApiCall';
import { Fonts } from '../../../../../../assets/Styles/Fonts';
import AnimatedLottieView from 'lottie-react-native';
import axios from 'axios';
import { BASE_URL } from '../../../../../../CommonUrl/CommonUrls';

const TraderShop2 = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showDisplay, setShowDisplay] = useState(false)
  const [showDisplay0, setShowDisplay0] = useState(true)
  const [showDisplay1, setShowDisplay1] = useState(true)
  const [showDisplay2, setShowDisplay2] = useState(false)
  const [showDisplay3, setShowDisplay3] = useState(false)
  const [showDisplay4, setShowDisplay4] = useState(false)
  const [showDisplay5, setShowDisplay5] = useState(false)
  const [showDisplay6, setShowDisplay6] = useState(true)
  const [showDisplay7, setShowDisplay7] = useState(true)
  const [thatState, setThatState] = useState('')
  const [thatState1, setThatState1] = useState('')
  const [thatState2, setThatState2] = useState('')
  const [thatState3, setThatState3] = useState('')
  // const [thatState, setThatState] = useState('Click for advance option')
  // const [thatState1, setThatState1] = useState('Click for advance option')
  // const [thatState2, setThatState2] = useState('Click for advance option')
  // const [thatState3, setThatState3] = useState('Click for advance option')
  const [showNewDisplay, setShowNewDisplay] = useState(false)
  const [showNewDisplay1, setShowNewDisplay1] = useState(false)
  const [showNewDisplay2, setShowNewDisplay2] = useState(false)
  const [showNewDisplay3, setShowNewDisplay3] = useState(false)
  const [changeIcon, setChangeIcon] = useState(true)
  const [changeIcon1, setChangeIcon1] = useState(true)
  const [changeIcon2, setChangeIcon2] = useState(true)
  const [changeIcon3, setChangeIcon3] = useState(true)
  const [changeIcon4, setChangeIcon4] = useState(true)
  const [adjustableRate, setAdjustableRate] = useState('');
  const [incomeRevnue, setIncomeRevnue] = useState('');
  const [directExpense, setDirectExpense] = useState('');
  const [indirectExpense, setIndirectExpense] = useState('');
  const [assets, setAssets] = useState('');
  const [liability, setLiability] = useState('');
  const [capital, setCapital] = useState('');
  const [adjustableAmount, setAdjustableAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [adjustableRateError, setAdjustableRateError] = useState(false);
  const [incomeRevnueError, setIncomeRevnueError] = useState(false);
  const [directExpenseError, setDirectExpenseError] = useState(false);
  const [indirectExpenseError, setIndirectExpenseError] = useState(false);
  const [assetsError, setAssetsError] = useState(false);
  const [liabilityError, setLiabilityError] = useState(false);
  const [capitalError, setCapitalError] = useState(false);
  const [adjustableAmountError, setAdjustableAmountError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);



  //Adjustable Rates api calling 
  const { data: taxdata } = useGetRateQuery();

  const saveAdjustableRate = (id) => {
    dispatch(setAdjustableRateId(id))
  }

  //calling Variables in which id's stored  
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const incomeId = useSelector((state) => state.myReducer.incomeId);
  const businessId = useSelector((state) => state.myReducer.businessId);
  const taxRateId = useSelector((state) => state.myReducer.taxRateId);
  const adjustableRateid = useSelector((state) => state.myReducer.adjustableRateid);
  const businessScreenName = useSelector((state) => state.myReducer.businessScreenName)


  const [lastIncome, setLastIncome] = useState('');
  const [id, setId] = useState(0)
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(BASE_URL + `taxfillings/${taxFilingId}/incomes?incometype_id=${incomeId}`)
      .then((response) => {
        const incomes = response.data.incomes;


        if (Object.keys(incomes).length > 0) {
          const incomesArray = Object.values(incomes);
          const lastIndex = incomesArray.length - 1;
          const lastIncomeData = incomesArray[lastIndex];

          let adjustableid=lastIncomeData.adjustable_id
          let updatedadjustableId=adjustableid-1
          setAdjustableRate(taxdata.adjustables[updatedadjustableId])

          setLastIncome(lastIncomeData);
          setDirectExpense(lastIncomeData.direct_expense);
          setIndirectExpense(lastIncomeData.indirect_expense);
          setAssets(lastIncomeData.assets);
          setLiability(lastIncomeData.liability);
          setCapital(lastIncomeData.capital);
          setAdjustableAmount(lastIncomeData.adjustable_amount);
          setId(lastIncomeData.id);
        } else {
          console.log('The savings array is empty.');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching API:', error);
        setIsLoading(false);
      });
  }, [incomeId]);



  const [addpost] = useAddIncomesPostMutation();
  const addnewIncome = async () => {

    const assetsValue = Number(assets);
    const liabilityValue = Number(liability);
    const capitalValue = Number(capital);
    const totalLiabilityCapital = liabilityValue + capitalValue;

    if (!incomeRevnue) {
      setIncomeRevnueError(true);
    }
    else if (!directExpense) {
      setDirectExpenseError(true);
    }
    else if (!indirectExpense) {
      setIndirectExpenseError(true);
    }
    else if (!assets) {
      setAssetsError(true);
    }
    else if (!liability) {
      setLiabilityError(true);
    }
    else if (!capital) {
      setCapitalError(true);
    }
    else if (!adjustableRate) {
      setAdjustableRateError(true);
    }
    else if (!adjustableAmount) {
      setAdjustableAmountError(true);
    }else if  (totalLiabilityCapital !== assetsValue) {
      setModalVisible(true)
    } 
     else {
      const postParams = {
        inctax_revenue: incomeRevnue,
        taxdedected_revenue: '',
        taxrate_id: '',
        direct_expense: directExpense,
        indirect_expense: indirectExpense,
        assets: assets,
        liability: liability,
        capital: capital,
        adjustable_id: adjustableRateid,
        adjustable_amount: adjustableAmount,
        businesstype_id: businessId,
        incometype_id: incomeId,
        taxfilling_id: taxFilingId,
      }
      try {
        setIsLoading(true)
        const res = await addpost({ postParams, taxFilingId, id })
        console.log('IncomeData', res.data)
        if (res.data) {
          navigation.navigate('TaxSavings')
        }

      } catch (error) {
        console.log('Error', error)

      } finally {
        setIsLoading(false)
      }
    }
  }




  return (

    <View style={Style.container}>
      {isLoading ?
        (
          <View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (

          <><ScrollView>
           <View style={Style.screennameview}>
              <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{businessScreenName}</Text>
              </View>
            </View>

            <View>
              <Text style={Style.text1}>Non Exempt</Text>
              <Text style={Style.text2}>Revenue in which tax was not deducted</Text>
            </View>
            <View style={Style.view2}>
              <TextInput style={[Style.placeholder1,{borderColor:incomeRevnueError ? 'red':'grey'}]}
                keyboardType='numeric'
                placeholder='Amount'
                placeholderTextColor={incomeRevnueError ? 'red' : 'black'}
                value={incomeRevnue}
                onChangeText={text => [setIncomeRevnue(text), setIncomeRevnueError(false)]} />
            </View>
            <View style={Style.touchableview}>
              <Pressable style={Style.touchable} onPress={() => [setShowDisplay(!showDisplay), setChangeIcon(!changeIcon)]}>
                <Text style={Style.touchabletext}>Expense</Text>
                {changeIcon ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
              </Pressable>
              {showDisplay === true &&
                (
                  <View>
                    {showDisplay0 === true &&
                      (
                        <View style={Style.hiddenview}>
                          <View style={Style.hiddenview1}>
                            <Text style={Style.hiddenview1text}>Direct</Text>
                            <Text style={Style.hiddenview1text2}>Total Direct Expense</Text>
                            <TextInput style={[Style.innerplaceholder1,{borderColor:directExpenseError ? 'red':'grey'}]} keyboardType='numeric'
                              placeholder='Amount'
                              placeholderTextColor={directExpenseError ? 'red' : 'black'}
                              value={directExpense}
                              onChangeText={text => [setDirectExpense(text), setDirectExpenseError(false)]} />
                          </View>
                        </View>
                      )}

                    {showNewDisplay === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>
                          <Text style={Style.newdisplaytext}>Direct</Text>
                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Direct cost of sales</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Rent</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>
                          <View style={Style.newdisplayview2}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Direct salaries</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Freight And Transportation</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>

                          <View style={Style.newdisplayview3}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Other direct expense</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>
                        </View>
                      )}

                    <View style={{ marginTop: "3%", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowNewDisplay(!showNewDisplay);


                          if (thatState === 'Click for advance option') {
                            setThatState('Click for basic option');
                            setShowDisplay0(false);



                          } else if (thatState === 'Click for basic option') {
                            setThatState('Click for advance option');
                            setShowDisplay0(true);

                          }
                        }}

                        style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                      >

                        <Text style={{ color: "black", fontWeight: "800" }}>{thatState}</Text>
                      </TouchableOpacity>
                    </View>



                    {showDisplay1 === true &&
                      (
                        <View style={Style.hiddenview}>
                          <View style={Style.hiddenview1}>
                            <Text style={Style.hiddenview1text}>In Direct</Text>
                            <Text style={Style.hiddenview1text2}>Total Direct Expense</Text>
                            <TextInput style={[Style.innerplaceholder1,{borderColor:indirectExpenseError ? 'red':'grey'}]} keyboardType='numeric'
                              placeholder='Amount'
                              placeholderTextColor={indirectExpenseError ? 'red' : 'black'}
                              value={indirectExpense}
                              onChangeText={text => [setIndirectExpense(text), setIndirectExpenseError(false)]} />
                          </View>
                        </View>
                      )}

                    {showNewDisplay1 === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>
                          <Text style={Style.newdisplaytext}>In Direct</Text>
                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Salaries wages and benefits</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Rent</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>


                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Travelling communication</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Utilities</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>

                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Repair and Maintenance</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Depreciation</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>

                          </View>

                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Legal and professional</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Other indirect expense</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>

                          </View>



                        </View>
                      )}

                    <View style={{ marginTop: "3%", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowNewDisplay1(!showNewDisplay1);


                          if (thatState1 === 'Click for advance option') {
                            setThatState1('Click for basic option');
                            setShowDisplay1(false);



                          } else if (thatState1 === 'Click for basic option') {
                            setThatState1('Click for advance option');
                            setShowDisplay1(true);

                          }
                        }}

                        style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                      >

                        <Text style={{ color: "black", fontWeight: "800" }}>{thatState1}</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                )}
            </View>

            <View style={Style.touchableview}>
              <Pressable style={Style.touchable}
                onPress={() => [setShowDisplay2(!showDisplay2), setChangeIcon1(!changeIcon1)]}
              >

                <Text style={Style.touchabletext}>Balance Sheet</Text>
                {changeIcon1 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
              </Pressable>
              {showDisplay2 === true &&
                (
                  <View>
                    {showDisplay6 === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>
                          <View style={Style.hiddenview1}>
                            <Text style={Style.hiddenview1text}>Assets</Text>
                            <Text style={Style.hiddenview1text2}>Other Assets</Text>
                            <TextInput style={[Style.innerplaceholder1,{borderColor:assetsError ? 'red':'grey'}]} keyboardType='numeric'
                              placeholder='Amount'
                              placeholderTextColor={assetsError ? 'red' : 'black'}
                              value={assets}
                              onChangeText={text => [setAssets(text), setAssetsError(false)]} />
                          </View>
                        </View>
                      )}

                    {showNewDisplay2 === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>
                          <Text style={Style.newdisplaytext}>Direct</Text>
                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Plant/Machinery/Equipment</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Stock/store/spares</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>


                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Advances/deposite</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Cash/Bank balance</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>

                          <View style={Style.newdisplayview3}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Other Assets</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>

                          </View>
                        </View>
                      )}

                    <View style={{ marginTop: "3%", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowNewDisplay2(!showNewDisplay2);


                          if (thatState2 === 'Click for advance option') {
                            setThatState2('Click for basic option');
                            setShowDisplay6(false);



                          } else if (thatState2 === 'Click for basic option') {
                            setThatState2('Click for advance option');
                            setShowDisplay6(true);

                          }
                        }}

                        style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                      >

                        <Text style={{ color: "black", fontWeight: "800" }}>{thatState2}</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                )}
            </View>
            <View style={Style.touchableview}>
              <Pressable style={Style.touchable}
                onPress={() => [setShowDisplay3(!showDisplay3), setChangeIcon2(!changeIcon2)]}
              >

                <Text style={Style.touchabletext}>Total Liability</Text>
                {changeIcon2 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
              </Pressable>
              {showDisplay3 === true &&
                (
                  <View>
                    {showDisplay7 === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>
                          <View style={Style.hiddenview1}>
                            <Text style={Style.hiddenview1text}>Assets</Text>
                            <Text style={Style.hiddenview1text2}>Other Assets</Text>
                            <TextInput style={[Style.innerplaceholder1,{borderColor:liabilityError ? 'red':'grey'}]}  keyboardType='numeric'
                              placeholder='Amount'
                              placeholderTextColor={liabilityError ? 'red' : 'black'}
                              value={liability}
                              onChangeText={text => [setLiability(text), setLiabilityError(false)]} />
                          </View>
                        </View>
                      )}

                    {showNewDisplay3 === true &&
                      (
                        <View style={{ width: responsiveWidth(100) }}>

                          <View style={Style.newdisplayview1}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Long term Borrowing debit loan</Text>

                              <TextInput style={Style.innerplaceholder2} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                            <View>
                              <Text style={Style.newdisplaytext3}>Other liabilities</Text>
                              <TextInput style={Style.innerplaceholder2} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>
                          </View>
                          <View style={Style.newdisplayview3}>
                            <View>
                              <Text style={Style.newdisplaytext3}>Trade</Text>
                              <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                                placeholderTextColor={"grey"} />
                            </View>

                          </View>



                        </View>
                      )}

                    <View style={{ marginTop: "3%", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowNewDisplay3(!showNewDisplay3);


                          if (thatState3 === 'Click for advance option') {
                            setThatState3('Click for basic option');
                            setShowDisplay7(false);



                          } else if (thatState3 === 'Click for basic option') {
                            setThatState3('Click for advance option');
                            setShowDisplay7(true);

                          }
                        }}

                        style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                      >

                        <Text style={{ color: "black", fontWeight: "800" }}>{thatState3}</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                )}
            </View>
            <View style={Style.touchableview}>
              <Pressable style={Style.touchable}
                onPress={() => [setShowDisplay4(!showDisplay4), setChangeIcon3(!changeIcon3)]}
              >

                <Text style={Style.touchabletext}>Total Capital</Text>
                {changeIcon3 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
              </Pressable>
              {showDisplay4 === true &&
                (
                  <View>
                    <View style={{ width: responsiveWidth(100) }}>
                      <View style={Style.hiddenview1}>
                        <Text style={Style.hiddenview1text2}>Capital</Text>
                        <TextInput style={[Style.innerplaceholder1,{borderColor:capitalError ? 'red':'grey'}]} keyboardType='numeric'
                          placeholder='Amount'
                          placeholderTextColor={capitalError ? 'red' : 'black'}
                          value={capital}
                          onChangeText={text => [setCapital(text), setCapitalError(false)]} />
                      </View>
                    </View>

                  </View>
                )}
            </View>
            <View style={Style.touchableview}>
              <Pressable style={Style.touchable}
                onPress={() => [setShowDisplay5(!showDisplay5), setChangeIcon4(!changeIcon4)]}
              >

                <Text style={Style.touchabletext}>Other Adjustable Tax</Text>
                {changeIcon4 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
              </Pressable>
              {showDisplay5 === true &&
                (
                  <View>
                    <View style={{ width: responsiveWidth(100) }}>
                      <View style={Style.bottomview}>
                        <View style={Style.icntxtinput2}>
                          {taxdata && (
                            <Dropdown
                              style={[Style.dropdown2,{borderColor :adjustableRateError  ? 'red':'grey'}]}
                              placeholderStyle={{
                                fontSize: Fonts.f14,
                                color: 'black',
                                color: adjustableRateError ? 'red' : 'black'
                              }}
                              selectedTextStyle={{
                                fontSize: Fonts.f12,
                                color: 'black',
                              }}
                              iconColor={adjustableRateError ? 'red':'grey'}
                              containerStyle={{
                                height: '50%',
                                backgroundColor: 'white',
                              }}
                              itemTextStyle={{
                                color: 'black',
                                fontSize: Fonts.f14,
                              }}
                              data={taxdata.adjustables}
                              labelField="title"
                              valueField="descriptions"
                              placeholder={'Select Adjustable Rate'}
                              value={adjustableRate}
                              onChange={item => {
                                [setAdjustableRate(item.title), saveAdjustableRate(item.id), setAdjustableRateError(false)];
                              }} />
                          )}
                        </View>
                        <TextInput style={[Style.bottomplaceholder2,{borderColor:adjustableAmountError ? 'red':'grey'}]} keyboardType='numeric'
                          placeholder='Tax Deducted'
                          placeholderTextColor={adjustableAmountError ? 'red' : 'black'}
                          value={adjustableAmount}
                          onChangeText={text => [setAdjustableAmount(text), setAdjustableAmountError(false)]} />
                        <TouchableOpacity style={Style.touchablebutton}>
                          <Text style={{ color: "white" }}>Add</Text>
                        </TouchableOpacity>

                      </View>


                    </View>

                  </View>
                )}

            </View>
          </ScrollView><Button
              onPressBack={() => navigation.navigate('TraderShop')}
              onPressForward={() => addnewIncome()} /></>
        )}

<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.2)',}}>
          
          <View style={Style.modalmainview}>
          <View style={Style.modalimageview}>
            <Image source={require('../../../../../../assets/pictures/image73.png')} style={Style.modalimage}/>
          </View>
          <View style={Style.modaltextview}>
          <Text style={Style.modaltext}>Assets should be equal to Liabilities + Capital</Text>
          </View>
           <View style={Style.modalbuttonview}>
           <TouchableOpacity title="OK" onPress={() => setModalVisible(false)} style={Style.modalbutton}>
            <Text style={Style.modalbuttontext}>OK</Text>
           </TouchableOpacity>
           </View>
           
          </View>
        </View>
      </Modal>

    </View>

  )
}

export default TraderShop2;
