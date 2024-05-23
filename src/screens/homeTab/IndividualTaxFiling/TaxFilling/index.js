import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './Style'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import axios from 'axios';
import { BASE_URL, SelectYears } from '../../../../../src/CommonUrl/CommonUrls';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../ImportHeader/Header';
import AnimatedLottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFiscalyear, setResumeId, setVariable } from '../../../../store/myReducer';

const TaxFilling = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [newview, setNewView] = useState(false)
  const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [year, setYear] = useState('')
  const [lastStatus, setLastStatus] = useState('')
  const [userID, setUserID] = useState('')
  const [array, setArrray] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFiscalyear();
    GettingAsyncvalue();
  }, []);

  const getFiscalyear = async () => {
    try {
      const response = await axios.get(SelectYears);
      setData(response.data.fiscalyears);
      response.data.fiscalyears.forEach(async (fiscalyear) => {
        const fiscalYearId = fiscalyear.id;
        try {
          await AsyncStorage.setItem('fiscalYearId', fiscalYearId.toString());
        } catch (error) {
          console.error('Error saving fiscal year ID:', error);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const GettingAsyncvalue = async () => {
    let userName = await AsyncStorage.getItem('NAME')
    let Fisacalyear = await AsyncStorage.getItem('fiscalYearId')
    let Laststatus = await AsyncStorage.getItem('lastscreen')
    let userID = await AsyncStorage.getItem('USER ID')
    let year = await AsyncStorage.getItem('fiscalyear')
    if (userName !== null || Fisacalyear !== null || Laststatus !== null || userID !== null || year !== null) {
      const name = JSON.parse(userName)
      setName(name)
      const Year = JSON.parse(Fisacalyear)
      setYear(Year)
      const status = JSON.stringify(Laststatus)
      setLastStatus(status)
      const userid = JSON.parse(userID)
      setUserID(userid)
      getTaxfilingData(userid)
      const fiscalyear = (year)
      saveFiscalyear(fiscalyear)
    }
  }

  const getTaxfilingData = async (uId) => {
    try {
      const response = await axios.get(BASE_URL + `users/${uId}/taxfillings`);
      const taxFilings = response.data.taxfilings;
      setArrray(taxFilings);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  };
  const saveVariable = (id) => {
    dispatch(setVariable(id));
  };
  const saveIsResume = (value) => {
    dispatch(setResumeId(value))
  };
  const saveFiscalyear = (value) => {
    dispatch(setFiscalyear(value))
  };

  // getting id through variable 
  const fiscalYear = useSelector((state) => state.myReducer.fiscalYear);
  const insertTaxfilling = async () => {
    try {
      let userID = await AsyncStorage.getItem('USER ID')
      let fiscalYearId = await AsyncStorage.getItem('fiscalYearId')
      const response = await axios.post(BASE_URL + `users/${userID}/taxfillings`,
        {
          taxfiling: {
            last_status: '',
            fiscalyear_id: fiscalYearId,
            user_id: userID,
          }
        })
      console.log('response', response.data)
      console.log('response.data.taxfiling.id', response.data.taxfiling.id)
      saveVariable(response.data.taxfiling.id)
      navigation.navigate('Personal Info');
    } catch (error) {
      console.log('Tax Filing Id', error)
    }
  }

  const saveFiscalYearToAsyncStorage = async (fiscalYear) => {
    try {
      await AsyncStorage.setItem('fiscalyear', fiscalYear.toString());
    } catch (error) {
      console.error('Error saving fiscalyear to AsyncStorage:', error);
    }
  };

  const renderItem = ({ item, id }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={Style.lowerView}>
          <View style={Style.insideLowerView}>
            <Text style={Style.txtsixe}>
              Tax Year {item.fiscalyear}
            </Text>
          </View>
          <View style={Style.nxtview}>
            <Text style={Style.frsttxt}>
              Occupations
            </Text>
            <Text style={Style.secndtxt}>
              Last Status
            </Text>
          </View>
          <View style={Style.nxtview1}>
            <View>
              <Text style={Style.frsttxt2}>
                {item.occupation}
              </Text>
            </View>
            <View>
              <Text style={Style.secndtxt2}>
                {item.last_status}
              </Text>
            </View>
          </View>
          <View style={Style.btnview1}>
            <TouchableOpacity style={Style.btnview2}
              onPress={() => {
                saveVariable(item.id)
                saveIsResume('1')
                saveFiscalYearToAsyncStorage(item.fiscalyear);

                navigation.navigate('Personal Info')
              }}
            >
              <Text style={Style.txtsixe1}>Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={Style.mainView}>
      {isLoading ? (
        <View style={Style.loader}>
          <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
        </View>
      )
        :
        (
          <View style={{ flex: 1 }}>
            <View style={Style.innerView}>
              <Header />
            </View>
            <View style={Style.introview1}>
              <Text style={Style.txtname}>
                {name}
              </Text>
            </View>
            {array.length != 0 &&
              <>
                <View style={Style.introview}>
                  <View style={Style.introview1}>
                    <Text style={Style.description}>
                      Here's Where you left off, tax year {fiscalYear}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={Style.btnC}
                      onPress={() => {
                        saveIsResume('1');
                        navigation.navigate('Res');
                      }}
                    >
                      <Text style={Style.btnCtxt}>
                        Continue Filling
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View style={{ borderBottomWidth: 1, width: responsiveScreenWidth(90), }}>
                  </View>
                </View>
              </>
            }
            <View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={Style.newYearTax} onPress={() => setNewView(!newview)}>
                  <Text style={Style.btnCtxt1}>
                    Select New Tax Year
                  </Text>
                  <View>
                    <MaterialCommunityIcons name='chevron-down' size={23} color={'white'} style={{ left: 60 }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", marginTop: "2%" }}></View>
              <View style={{ alignItems: "center" }}>
                {newview === true &&
                  (
                    <View style={{ width: responsiveWidth(90), height: responsiveHeight(25), borderColor: "grey", borderWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10 }}>
                      <ScrollView>
                        <View style={Style.listview}>
                          {<View>
                            <Text style={Style.listviewtxt}>Select new tax year</Text>
                            {data.map((item, id) => (
                              <TouchableOpacity
                                key={item.id}
                                onPress={async () => {
                                  console.log('Selected Year ID:', item.id);
                                  try {
                                    AsyncStorage.setItem('fiscalYearId', item.id.toString());
                                    saveIsResume('0');
                                    insertTaxfilling();
                                  } catch (error) {
                                    console.log('Error saving fiscalYearId to AsyncStorage:', error);
                                  }
                                }}
                              >
                                <Text style={Style.fiscalyeartxt}>{item.fiscalyear}</Text>
                              </TouchableOpacity>
                            ))}
                          </View>}
                        </View>
                      </ScrollView>
                    </View>
                  )}
              </View>
            </View>
            <FlatList
              data={array}
              renderItem={(item) => renderItem(item)}
              keyExtractor={(item) => item.id.toString()}
              navigation={navigation}
            />
          </View>
        )
      }
    </View>
  )
}
export default TaxFilling;

