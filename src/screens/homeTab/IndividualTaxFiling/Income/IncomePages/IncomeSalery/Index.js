import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';
import { useAddIncomesPostMutation } from '../../../../../../Services/GetApiCall';
import { useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import axios from 'axios';
import { BASE_URL } from '../../../../../../CommonUrl/CommonUrls';
import { LargeText, MediumText, SmallText } from '../../../../../Components/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';


const IncomeSalery = (props) => {
  const navigation = useNavigation();

  const [modalvisible, setModalVisiblle] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  //1st
  const [bgcolor, setBgColor] = useState("firebrick")
  const [text, settext] = useState("white")
  const [text1, settext1] = useState("firebrick")
  const [bgcolor1, setBgColor1] = useState("white")
  //2nd
  const [bgcolor2, setBgColor2] = useState("firebrick")
  const [text2, settext2] = useState("white")
  const [text3, settext3] = useState("firebrick")
  const [bgcolor3, setBgColor3] = useState("white")
  //3rd
  const [bgcolor5, setBgColor5] = useState("firebrick")
  const [text4, settext4] = useState("white")
  const [text5, settext5] = useState("firebrick")
  const [bgcolor4, setBgColor4] = useState("white")
  //4th
  const [bgcolor6, setBgColor6] = useState("firebrick")
  const [text6, settext6] = useState("white")
  const [text7, settext7] = useState("firebrick")
  const [bgcolor7, setBgColor7] = useState("white")
  //5th
  const [bgcolor8, setBgColor8] = useState("firebrick")
  const [text9, settext9] = useState("white")
  const [text10, settext10] = useState("firebrick")
  const [bgcolor11, setBgColor11] = useState("white")
  //6th
  const [bgcolor12, setBgColor12] = useState("firebrick")
  const [text13, settext13] = useState("white")
  const [text14, settext14] = useState("firebrick")
  const [bgcolor15, setBgColor15] = useState("white")
  //7th
  const [bgcolor16, setBgColor16] = useState("firebrick")
  const [text17, settext17] = useState("white")
  const [text18, settext18] = useState("firebrick")
  const [bgcolor19, setBgColor19] = useState("white")
  //8th
  const [bgcolor20, setBgColor20] = useState("firebrick")
  const [text21, settext21] = useState("white")
  const [text22, settext22] = useState("firebrick")
  const [bgcolor23, setBgColor23] = useState("white")
  //9th
  const [bgcolor24, setBgColor24] = useState("firebrick")
  const [text25, settext25] = useState("white")
  const [text26, settext26] = useState("firebrick")
  const [bgcolor27, setBgColor27] = useState("white")

  const [showDisplay, setShowDisplay] = useState(false)
  const [showScreen2, setShowScreen2] = useState(false)
  const [showScreen3, setShowScreen3] = useState(false)
  const [thatState, setThatState] = useState("")
  const [hideView, setHideView] = useState('')
  const [hideView2, setHideView2] = useState('')
  const [dateText, setDateText] = useState('Select Date')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [incomeRevnue, setIncomeRevnue] = useState('')
  const [taxDeducted, setTaxDeducted] = useState('')
  const [incomeRevnueError, setIncomeRevnueError] = useState(false)
  const [taxDeductedError, setTaxDeductedError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fiscalYear,setFiscalYear]=useState('')


  //GETTING TAXFILLING ID 
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const incomeId = useSelector((state) => state.myReducer.incomeId);
  const screenName = useSelector((state) => state.myReducer.screenName)


  const GettingAsyncvalue = async () => {
    let year = await AsyncStorage.getItem('fiscalyear')
    if (year !==null) {
      const fiscalyear=(year)
      setFiscalYear(fiscalyear)
      
    }
  }


  //GET API 
  const [lastIncome, setLastIncome] = useState('');
  const [id, setId] = useState(0)
  useEffect(() => {
    GettingAsyncvalue()
    setIsLoading(true);

    axios
      .get(BASE_URL + `taxfillings/${taxFilingId}/incomes?incometype_id=${incomeId}`)
      .then((response) => {
        const incomes = response.data.incomes;
        if (Object.keys(incomes).length > 0) {
          const incomesArray = Object.values(incomes);
          const lastIndex = incomesArray.length - 1;
          const lastIncomeData = incomesArray[lastIndex];
          setLastIncome(lastIncomeData);
          setIncomeRevnue(lastIncomeData.inctax_revenue);
          setTaxDeducted(lastIncomeData.taxdedected_revenue);
          setId(lastIncomeData.id);
        } else {
          setLastIncome(null);
          setIncomeRevnue('');
          setTaxDeducted('');
          setId(0);
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
    if (!incomeRevnue) {
      setIncomeRevnueError(true);
    }
    else if (!taxDeducted) {
      setTaxDeductedError(true);
    }
    else {
      const postParams = {
        inctax_revenue: incomeRevnue,
        taxdedected_revenue: taxDeducted,
        taxrate_id: '',
        direct_expense: '',
        indirect_expense: '',
        assets: '',
        liability: '',
        capital: '',
        adjustable_id: '',
        adjustable_amount: '',
        businesstype_id: '',
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

      }
      finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <View style={Style.container}>
      {isLoading ? (
        <View style={Style.loader}>
          <AnimatedLottieView source={require('../../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
        </View>
      )
        :
        (
          <><ScrollView contentContainerStyle={{ flexGrow: 1, }}
          >
            <View style={Style.screennameview}>
              <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{screenName}</Text>
              </View>
            </View>
            <View style={Style.imageview}>
              <Image source={require('../../../../../../assets/pictures/image1.png')}
                style={Style.image} />
            </View>
            <View style={Style.imageviewtext}>
              <MediumText
              text={'What is your annual taxable salary'}
              style={Style.text1}
              />
              <Text style={Style.text2}>(i.e from 1st July to 30th June){fiscalYear}</Text>
            </View>
            <View style={Style.touchabletext}>
              <TouchableOpacity onPress={() => {

                setShowDisplay(!showDisplay);


                if (thatState === 'click here for advance options') {
                  setThatState('click here for basic options');

                } else if (thatState === 'click here for basic options') {
                  setThatState('click here for advance options');
                  setBgColor('firebrick');
                  setBgColor1('white');
                  settext('white');
                  settext1('firebrick');
                  setBgColor2('firebrick');
                  setBgColor3('white');
                  settext2('white');
                  settext3('firebrick');
                }
              }}
                style={Style.touchabletextstyle}>
                <Text style={Style.text3}>{thatState}</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.textinputview}>
              {/* <Text style={Style.text4}>
                Enter your <Text style={{ fontFamily: FontFamily.OpenSansSemiBold, color: "black" }}>annual</Text>  taxable Salary
              </Text> */}
              <SmallText
              text={'Enter your annual taxable Salary'}
              style={Style.text4}
              />
            </View>
            <View style={Style.placeholder1view}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalvisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisiblle(!modalvisible);
                }}>
                <Pressable
                  onPress={() => {
                    setModalVisiblle(false);
                  }}
                  style={Style.pressable}>
                  <View style={Style.innercontainer}>
                    <LargeText
                    text={'Tip'}
                    style={Style.modaltxt1}
                    />
                    <SmallText
                    text={'Obtain salary certificate from your employer to make sure'}
                    style={Style.modaltxt2}
                    />
                    <SmallText
                    text={'that you enter all relevant information.'}
                    style={Style.modaltxt2}
                    />
                  </View>
                </Pressable>
              </Modal>
              <TextInput
                style={[Style.placeholder1,{borderColor:incomeRevnueError ? 'red':'grey'}]}
                placeholder="Amount"
                textAlign={'center'}
                keyboardType="numeric"
                placeholderTextColor={incomeRevnueError ? 'red' : 'grey'}
                value={incomeRevnue}
                onChangeText={(text) => [setIncomeRevnue(text), setIncomeRevnueError(false)]} />
              <TouchableOpacity style={{ left: "30%" }} onPress={() => setModalVisiblle(true)}>
                <MaterialCommunityIcons name='information' color={'red'} size={20} />
              </TouchableOpacity>
            </View>
            <View style={Style.textinputview2}>
              <SmallText
              text={'Enter tax deducted by employer from your salary'}
              style={Style.textinputview2style}
              />
            </View>
            <View style={Style.placeholder2view}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setIsModalVisible(!isModalVisible);
                }}>
                <Pressable
                  onPress={() => {
                    setIsModalVisible(false);

                  }}
                  style={Style.pressable}>
                  <View style={Style.innercontainer}>
                    <LargeText
                    text={'Tip'}
                    style={Style.modaltxt1}
                    />
                    <SmallText
                    text={'As per your taxable salary,the tax deductible should be Rs:0'}
                    style={Style.modaltxt3}
                    />
                  </View>

                </Pressable>
              </Modal>
              <TextInput
                style={[Style.placeholder1,{borderColor:taxDeductedError ? 'red':'grey'}]}
                placeholder="Amount"
                textAlign={'center'}
                keyboardType="numeric"
                placeholderTextColor={taxDeductedError ? 'red' : 'grey'}
                value={taxDeducted}
                onChangeText={(text) => [setTaxDeducted(text), setTaxDeductedError(false)]} />
              <TouchableOpacity style={{ left: "30%" }} onPress={() => setIsModalVisible(true)}>
                <MaterialCommunityIcons name='information' color={'red'} size={20} />
              </TouchableOpacity>
            </View>
            {showDisplay === true &&
              (
                <View style={{ flex: 1, }}>
                  <View>
                    <View style={[Style.hideview]}>
                      <Text style={Style.text5}>Did you receive any T.A/D.A or per diem?</Text>
                      <View style={Style.switchtoggleview}>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor }}
                          onPress={() => {
                            // setBgColor
                            if (bgcolor === 'white') {
                              setBgColor1('white');
                              setBgColor('firebrick');
                              settext1('firebrick');
                              settext('white');
                            }
                          }}>
                          <Text style={{ color: text }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor1 }}
                          onPress={() => {
                            if (bgcolor1 === 'white') {
                              setBgColor1('firebrick');
                              setBgColor('white');
                              settext1('white');
                              settext('firebrick');
                            }
                          }}>
                          <Text style={{ color: text1 }}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View>
                      {bgcolor1 === 'firebrick' &&
                        (
                          <View style={{ alignItems: "center" }}>
                            <TextInput
                              style={Style.placeholder1}
                              placeholder="T.A/D.A or per diem"
                              textAlign={'center'}
                              keyboardType="numeric"
                              placeholderTextColor={placeholderTextColors.numeric3}
                              value={inputValues.numeric1}
                              onChangeText={(value) => handleInputChange('numeric3', value)} />
                          </View>
                        )}
                    </View>
                  </View>
                  <View style={Style.hideview}>
                    <View>
                      <Text style={Style.text6}>Are you provided free of cost medical traetment </Text>
                      <Text style={Style.text6}>or hospitalize by your employer? </Text>
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor2 }}
                        onPress={() => {
                          setHideView(true);
                          // setBgColor
                          if (bgcolor2 === 'white') {
                            setBgColor3('white');
                            setBgColor2('firebrick');
                            settext3('firebrick');
                            settext2('white');
                          }
                        }}>
                        <Text style={{ color: text2 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor3 }}
                        onPress={() => {
                          setHideView(false);
                          if (bgcolor3 === 'white') {
                            setBgColor3('firebrick');
                            setBgColor2('white');
                            settext3('white');
                            settext2('firebrick');
                            setShowScreen2(false);

                          }
                        }}>
                        <Text style={{ color: text3 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {hideView === true ?
                    (
                      <View>
                        <View style={[Style.hideview]}>
                          <Text style={Style.text5}>Do you receive any medical allownce?</Text>
                          <View style={Style.switchtoggleview}>
                            <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor5 }}
                              onPress={() => {
                                // setBgColor
                                if (bgcolor5 === 'white') {
                                  setBgColor4('white');
                                  setBgColor5('firebrick');
                                  settext5('firebrick');
                                  settext4('white');
                                  setShowScreen2(false);
                                }
                              }}>
                              <Text style={{ color: text4 }}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor4 }}
                              onPress={() => {
                                if (bgcolor4 === 'white') {
                                  setBgColor4('firebrick');
                                  setBgColor5('white');
                                  settext5('white');
                                  settext4('firebrick');
                                  setShowScreen2(true);
                                }
                              }}>
                              <Text style={{ color: text5 }}>Yes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          {showScreen2 === true ?
                            (
                              <View style={{ alignItems: "center" }}>
                                <TextInput
                                  style={Style.placeholder1}
                                  placeholder="Amount"
                                  textAlign={'center'}
                                  keyboardType="numeric"
                                  placeholderTextColor={placeholderTextColors.numeric4}
                                  value={inputValues.numeric4}
                                  onChangeText={(value) => handleInputChange('numeric4', value)} />
                              </View>
                            )
                            :
                            (
                              console.log('fail')
                            )}
                        </View>

                      </View>
                    )
                    :
                    (
                      console.log('null')
                    )}
                  <View style={Style.hideview}>
                    <View>
                      <Text style={Style.text6}>Has your employeer established a recognized </Text>
                      <Text style={Style.text6}>provident fund? </Text>
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor6 }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor6 === 'white') {
                            setBgColor7('white');
                            setBgColor6('firebrick');
                            settext7('firebrick');
                            settext6('white');
                          }
                        }}>

                        <Text style={{ color: text6 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor7 }}
                        onPress={() => {
                          if (bgcolor7 === 'white') {
                            setBgColor7('firebrick');
                            setBgColor6('white');
                            settext7('white');
                            settext6('firebrick');
                          }
                        }}
                      >
                        <Text style={{ color: text7 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    {bgcolor7 === 'firebrick' &&
                      (
                        <View style={{ alignItems: "center" }}>
                          <TextInput
                            style={Style.placeholder1}
                            placeholder="Amount"
                            textAlign={'center'}
                            keyboardType="numeric"
                            placeholderTextColor={placeholderTextColors.numeric5}
                            value={inputValues.numeric5}
                            onChangeText={(value) => handleInputChange('numeric5', value)} />
                        </View>
                      )}

                  </View>

                  <View>

                    <View style={[Style.hideview]}>
                      <Text style={Style.text5}>Are you provided with vehicle by your employer?</Text>


                      <View style={Style.switchtoggleview}>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor8 }}
                          onPress={() => {
                            setHideView2(false);
                            // setBgColor
                            if (bgcolor8 === 'white') {
                              setBgColor11('white');
                              setBgColor8('firebrick');
                              settext10('firebrick');
                              settext9('white');
                            }
                          }}>

                          <Text style={{ color: text9 }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor11 }}
                          onPress={() => {
                            setHideView2(true);
                            if (bgcolor11 === 'white') {
                              setBgColor11('firebrick');
                              setBgColor8('white');
                              settext10('white');
                              settext9('firebrick');
                            }
                          }}
                        >
                          <Text style={{ color: text10 }}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View>
                      {bgcolor11 === 'firebrick' &&
                        (
                          <View>
                            <Text style={Style.text5}>What is the cost of Vehicle provided by your employer?</Text>
                            <View style={{ alignItems: "center" }}>
                              <TextInput
                                style={Style.placeholder1}
                                placeholder="Amount"
                                textAlign={'center'}
                                keyboardType="numeric"
                                placeholderTextColor={placeholderTextColors.numeric6}
                                value={inputValues.numeric6}
                                onChangeText={(value) => handleInputChange('numeric6', value)} />
                            </View>
                          </View>
                        )}
                    </View>

                  </View>

                  {hideView2 === true ?
                    (
                      <View>


                        <View style={[Style.hideview]}>
                          <Text style={Style.text5}>Did you receive the vehicle after June 2022?</Text>


                          <View style={Style.switchtoggleview}>
                            <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor24 }}
                              onPress={() => {
                                // setBgColor
                                if (bgcolor24 === 'white') {
                                  setBgColor27('white');
                                  setBgColor24('firebrick');
                                  settext26('firebrick');
                                  settext25('white');
                                }
                              }}>

                              <Text style={{ color: text25 }}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor27 }}
                              onPress={() => {
                                if (bgcolor27 === 'white') {
                                  setBgColor27('firebrick');
                                  setBgColor24('white');
                                  settext26('white');
                                  settext25('firebrick');
                                }
                              }}
                            >
                              <Text style={{ color: text26 }}>Yes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View>
                          {bgcolor27 === 'firebrick' &&
                            (
                              <View>
                                <Text style={Style.text9}>Please enter the date on which your employer provided you with vehicle</Text>

                                <View style={Style.accview}>
                                  <TouchableOpacity style={Style.accinput} onPress={() => setOpen(true)}>
                                    <AntDesign style={Style.icn} name='calendar' color={'red'} size={25} />
                                    <Text style={Style.inputrs}>{dateText}</Text>
                                  </TouchableOpacity>
                                </View>
                                <View>
                                  <DatePicker
                                    modal
                                    mode='date'
                                    open={open}
                                    date={date}
                                    onConfirm={(date) => {
                                      setOpen(false);
                                      setDate(date);
                                      setDateText(date.toLocaleString());
                                    }}
                                    onCancel={() => {
                                      setOpen(false);
                                    }} />
                                </View>

                              </View>
                            )}

                        </View>

                      </View>
                    )
                    :
                    (
                      console.log('null')
                    )}


                  <View style={Style.hideview}>
                    <View>
                      <Text style={Style.text6}>Did you have any other allownce/benefit </Text>
                      <Text style={Style.text6}>including bonus? </Text>
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor12 }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor12 === 'white') {
                            setBgColor15('white');
                            setBgColor12('firebrick');
                            settext14('firebrick');
                            settext13('white');

                          }
                        }}>

                        <Text style={{ color: text13 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor15 }}
                        onPress={() => {
                          if (bgcolor15 === 'white') {
                            setBgColor15('firebrick');
                            setBgColor12('white');
                            settext14('white');
                            settext13('firebrick');
                          }
                        }}
                      >
                        <Text style={{ color: text14 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    {bgcolor15 === 'red' &&
                      (
                        <View style={{ alignItems: "center" }}>
                          <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                            placeholderTextColor={"grey"} />
                        </View>
                      )}

                  </View>

                  <View style={Style.hideview}>
                    <View>
                      <Text style={Style.text6}>Did you receive any amount from a recognized </Text>
                      <Text style={Style.text6}>provident/gratuity fund on amount of permanent </Text>
                      <Text style={Style.text6}>withdrawl of funds? </Text>
                    </View>
                    <View style={Style.switchtoggleview}>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor16 }}
                        onPress={() => {
                          // setBgColor
                          if (bgcolor16 === 'white') {
                            setBgColor19('white');
                            setBgColor16('firebrick');
                            settext18('firebrick');
                            settext17('white');

                          }
                        }}>

                        <Text style={{ color: text17 }}>No</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor19 }}
                        onPress={() => {
                          if (bgcolor19 === 'white') {
                            setBgColor19('firebrick');
                            setBgColor16('white');
                            settext18('white');
                            settext17('firebrick');
                          }
                        }}
                      >
                        <Text style={{ color: text18 }}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    {bgcolor19 === 'firebrick' &&
                      (
                        <View style={{ alignItems: "center", marginTop: "5%" }}>
                          <TextInput
                            style={Style.placeholder1}
                            placeholder="Amount"
                            textAlign={'center'}
                            keyboardType="numeric"
                            placeholderTextColor={placeholderTextColors.numeric7}
                            value={inputValues.numeric7}
                            onChangeText={(value) => handleInputChange('numeric7', value)} />
                        </View>
                      )}

                  </View>


                  <View>
                    <View style={[Style.hideview]}>
                      <Text style={Style.text5}>Is the tax on your salery borne by your employer?</Text>
                      <View style={Style.switchtoggleview}>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor20 }}
                          onPress={() => {
                            if (bgcolor20 === 'white') {
                              setBgColor23('white');
                              setBgColor20('firebrick');
                              settext22('firebrick');
                              settext21('white');
                            }
                          }}>

                          <Text style={{ color: text21 }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor23 }}
                          onPress={() => {
                            if (bgcolor23 === 'white') {
                              setBgColor23('firebrick');
                              setBgColor20('white');
                              settext22('white');
                              settext21('firebrick');
                            }
                          }}
                        >
                          <Text style={{ color: text22 }}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
          </ScrollView><Button
              onPressBack={() => navigation.navigate('Income')}
              onPressForward={() => addnewIncome()} /></>
        )}
    </View>
  )
}

export default IncomeSalery;