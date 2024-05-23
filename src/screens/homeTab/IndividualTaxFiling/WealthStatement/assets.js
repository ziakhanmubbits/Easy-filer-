import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Fonts } from '../../../../assets/Styles/Fonts'
import FontFamily from '../../../../assets/customFonts/customFonts'
import { useGetWealthTypeQuery } from '../../../../Services/GetApiCall'
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../Components/Index'
import { useDispatch, useSelector } from 'react-redux'
import { setAssetTypeId, setLastStatusName, setWealthScreenName } from '../../../../store/myReducer'
import { ASSET_URL, BASE_URL } from '../../../../CommonUrl/CommonUrls'
import AnimatedLottieView from 'lottie-react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SmallText } from '../../../Components/Text'
import { useFocusEffect } from '@react-navigation/native';


const numColumns = 4;
const Assets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    GettinAsyncValue()
    // savelastscreen();
  }, [])


  const [selectedItem, setSelectedItem] = useState(null)
  const [lastStatus, setLastStatus] = useState('')
  const [fiscalYear, setFiscalYear] = useState('')

  const GettingAsyncvalue = async () => {
    let year = await AsyncStorage.getItem('fiscalyear')
    if (year !== null) {
      const fiscalyear = (year)
      setFiscalYear(fiscalyear)

    }
  }

  const saveAssetId = (id) => {
    dispatch(setAssetTypeId(id))
  }

  const saveWealthScreenName = (id) => {
    dispatch(setWealthScreenName(id))
  }

  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name))
  }


  const { data, isLoading } = useGetWealthTypeQuery();
  // console.log('wealthType',data?.weathTypes)

  //getting value from variable
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);


  let assets;
  let liabilities;

  if (data?.weathTypes) {

    const { weathTypes } = data;
    assets = weathTypes.filter((item) => item.type === 'assets');
    liabilities = weathTypes.filter((item) => item.type === 'liabilities');
  }

  const navigation = useNavigation();
  function nav(name) {
    console.log(name)
    {
      switch (name) {
        case "Property":
          navigation.navigate('Property');
          break;
        case "Vehicle":
          navigation.navigate('WealthVehicle');
          break;
        case "Bank Account":
          navigation.navigate('BankAccount');
          break;
        case "Insurence":
          navigation.navigate('Insurence');
          break;
        case "Possession":
          navigation.navigate('Possession');
          break;
        case "Foriegn Assets":
          navigation.navigate('ForiegnAssets');
          break;
        case "Cash":
          navigation.navigate('Cash');
          break;
        case "Other Assets":
          navigation.navigate('OtherAssets');
          break;
        case "Bank Loan":
          navigation.navigate('Bankloan');
          break;
        case "Other Liabilities":
          navigation.navigate('Liabilities');
          break;
        default:
      }
    }
  }

  //setting  screen name in taxfillign updated api  
  const DataSubmit = async (uId) => {
    try {
      const response = await axios.patch(BASE_URL + `users/${uId}/taxfillings/${taxFilingId}}`,
        {
          taxfiling: {
            last_status: lastStatusName,
          }
        })
    } catch (error) {
      console.log('nnnnTax Filing Id', error)

    }
  }

  //getting async values 
  const GettinAsyncValue = async () => {
    let userID = await AsyncStorage.getItem('USER ID')
    let Laststatus = await AsyncStorage.getItem('lastStatusName')
    let year = await AsyncStorage.getItem('fiscalyear')
    if (userID !== null || Laststatus !== null || year !== null) {
      const status = (Laststatus)
      setLastStatus(status)
      const fiscalyear = (year)
      setFiscalYear(fiscalyear)
      DataSubmit(userID)

    }
  }

  useFocusEffect(
    React.useCallback(() => {
      //save screen name in async 
      const savelastscreen = async (lastStatusName) => {
        try {
          await AsyncStorage.setItem('lastscreen', lastStatusName);
        } catch (error) {
          console.log('failed to save last screen', error);
        }
      }
      savelastscreen();
      return () => {
        // Optional cleanup function if needed when the screen is unfocused
      };
    }, [])
  );
  return (
    <View style={styles.constainer}>
      {isLoading ?
        (
          < View style={styles.loader}>
            <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (
          <>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
              <View style={styles.toptxtview}>
                <Text style={styles.txt1}>We Will now gather the details of yours assets/liabilities at the end of the tax year {fiscalYear}</Text>

              </View>
            </View>
            <View style={styles.toptxt2view}>
              <Text style={styles.txt2}>Please select the type of assets/liabilities that you</Text>
              <Text style={styles.txt2}>owned/owed as at june 30,{fiscalYear}</Text>
            </View><View style={styles.assetsview}>
              <Text style={styles.txt3}>Assets</Text>
              <View style={styles.flatlist}>
                <FlatList
                  data={assets}
                  renderItem={({ item }) => {
                    const isselected = selectedItem === item.id;
                    return (

                      <View style={styles.item}>
                        <TouchableOpacity onPress={() => [nav(item.name), saveWealthScreenName(item.name), saveAssetId(item.id), setSelectedItem(item.id)]}
                        >
                          <View style={{ alignItems: "center", justifyContent: "center", width: responsiveScreenWidth(22), height: responsiveScreenHeight(5.5) }}>
                            <Image style={styles.image} source={{ uri: ASSET_URL + item.icon_path }} />
                          </View>

                          <View style={styles.flatlisttxt}>
                            <Text style={styles.flatlisttxt1}>{item.name}</Text>
                          </View>
                          {isselected &&
                            (
                              <Image
                                source={require('../../../../../src/assets/pictures/correct.png')}
                                style={{
                                  position: 'absolute',
                                  top: '40%',
                                  left: '45%',
                                  transform: [{ translateX: -10 }, { translateY: -10 }],
                                  width: responsiveScreenWidth(7.3),
                                  height: responsiveScreenHeight(3.3),
                                }}
                              />
                            )}
                        </TouchableOpacity>

                      </View>
                    )
                  }}
                  keyExtractor={(item, index) => {
                    return item.id
                  }}
                  numColumns={numColumns} />
              </View>
            </View>
            <View style={styles.assetsview}>
              <Text style={styles.txt3}>Liabilities</Text>
              <View style={styles.flatlist2}>
                <FlatList
                  horizontal
                  data={liabilities}
                  renderItem={({ item }) => {
                    const isselected = selectedItem === item.id;
                    return (

                      <View style={styles.item}>
                        <TouchableOpacity onPress={() => [nav(item.name), saveWealthScreenName(item.name), saveAssetId(item.id), setSelectedItem(item.id)]}
                        >
                          <View style={{ alignItems: "center", justifyContent: "center", width: responsiveScreenWidth(22), height: responsiveScreenHeight(5.5) }}>
                            <Image style={styles.image} source={require('../../../../../src/assets/pictures/image38.png')} />
                          </View>

                          <View style={styles.flatlisttxt}>
                            {/* <Text style={styles.flatlisttxt1}>{item.name}</Text> */}
                            <SmallText
                              text={item.name}
                              style={styles.flatlisttxt1}
                            />
                          </View>

                          {isselected &&
                            (
                              <Image
                                source={require('../../../../../src/assets/pictures/correct.png')}
                                style={{
                                  position: 'absolute',
                                  top: '40%',
                                  left: '45%',
                                  transform: [{ translateX: -10 }, { translateY: -10 }],
                                  width: responsiveScreenWidth(7.3),
                                  height: responsiveScreenHeight(3.3),
                                }}
                              />
                            )}

                        </TouchableOpacity>

                      </View>
                    )
                  }}
                  keyExtractor={(item, index) => {
                    return item.id
                  }} />
              </View>
            </View>
            <Button
              onPressBack={() => navigation.goBack()}
              onPressForward={() => [navigation.navigate('Expense'), saveLastStatus('Expense')]}
            />
          </>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "white"
  },
  toptxtview: {
    width: responsiveScreenWidth(90),
    justifyContent: "center",
    alignItems: "center",

  },
  toptxt2view: {
    alignItems: "center",
    marginTop: "2%"
  },
  txt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  txt2: {
    color: "black",
    fontFamily: FontFamily.OpenSansRegular
  },
  assetsview: {
    marginTop: "5%",
    marginLeft: "5%"
  },
  txt3: {
    color: "black",
    fontFamily: FontFamily.OpenSansSemiBold,
    fontSize: Fonts.f18
  },
  flatlist: {
    alignItems: "center",
    marginTop: "1%"
  },
  item: {
    alignItems: 'center',
    marginVertical: "3%",
    borderRadius: 10,
    width: responsiveWidth(22)
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "center"

  },
  flatlisttxt: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  flatlisttxt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.4),
    fontFamily: FontFamily.MONTSERRAT_Light
  },
  flatlist2: {
    marginTop: "1%",
    marginLeft: "2%"
  },
  loader: {
    minHeight: responsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%"
  }

})

export default Assets;