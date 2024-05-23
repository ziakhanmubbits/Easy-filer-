import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../../Components/Index';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useGetIncomeTypeQuery } from '../../../../Services/GetApiCall';
import { setIncomeId, setLastStatusName, setScreenName } from '../../../../store/myReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ASSET_URL, BASE_URL } from '../../../../CommonUrl/CommonUrls';
import axios from 'axios';
import SkeletonImage from '../../../Components/skeletonImages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MediumText, SmallText } from '../../../Components/Text';
import { useFocusEffect } from '@react-navigation/native';

const numColumns = 4;
const Income = (props) => {
  const [lastStatus, setLastStatus] = useState('')
  const [selectedItem, setSelectedItem] = useState(null);
  const route = useRoute();
  //getting taxfilling value from taxFilling variable through redux
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);

  useEffect(() => {
    GettinAsyncValue()
    // savelastscreen();
  }, [])

  //IncomeTpes api calling  
  const { data, isLoading, isError } = useGetIncomeTypeQuery();

  const dispatch = useDispatch();

  const saveIncome = (id) => {
    dispatch(setIncomeId(id));
  };

  const saveScreenName = (id) => {
    dispatch(setScreenName(id));
  }

  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name))
  }

  const navigation = useNavigation();
  function nav(name) {
    console.log(name)
    {
      switch (name) {
        case "Salery":
          navigation.navigate('IncomeSalery');
          break;
        case "Business":
          navigation.navigate('IncomeBusiness');
          break;
        case "Freelancer":
          navigation.navigate('Freelancer');
          break;
        case "Professional":
          navigation.navigate('Professional');
          break;
        case "Pension":
          navigation.navigate('Pension');
          break;
        case "Agricultural":
          navigation.navigate('Agriculture');
          break;
        case "Commission Services":
          navigation.navigate('ComissionServices');
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
    if (userID !== null || Laststatus !== null) {
      const status = (Laststatus)
      setLastStatus(status)
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
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ marginTop: "60%" }}>
          <ActivityIndicator size={25} color={'red'} />
        </View>
      )
        :
        (
          <><View style={Style.view1}>
            <MediumText
              text={' Now lets start looking at your income'}
              style={Style.view1txt}
            />
            <SmallText
              text={'Select the sources of your income,you can select more'}
              style={Style.view1txt2}
            />
            <SmallText
              text={' than one if applicable'}
              style={Style.view1txt3}
            />
          </View><View style={Style.flatlist}>
              <FlatList
                data={data?.income_types}
                renderItem={({ item }) => {
                  const isSelected = selectedItem === item.id;

                  return (
                    <View style={Style.item}>
                      <TouchableOpacity
                        onPress={() => {
                          nav(item.title);
                          saveScreenName(item.title);
                          saveIncome(item.id);
                          setSelectedItem(item.id);
                        }}
                      >
                        {item.icon_path ? (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              width: responsiveScreenWidth(12),
                              height: responsiveScreenHeight(5.5),
                            }}
                          >
                            <Image
                              style={Style.image}
                              source={{ uri: ASSET_URL + item.icon_path }}
                            />
                          </View>
                        ) : (
                          <SkeletonImage />
                        )}

                        <View style={Style.flatlisttxt}>
                          <SmallText
                            text={item.title}
                            style={Style.flatlisttxt1}
                          />
                        </View>
                        {isSelected && (
                          <Image
                            source={require('../../../../../src/assets/pictures/correct.png')}
                            style={{
                              position: 'absolute',
                              top: '40%',
                              left: '25%',
                              transform: [{ translateX: -10 }, { translateY: -10 }],
                              width: responsiveScreenWidth(7.3),
                              height: responsiveScreenHeight(3.3),
                            }}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                numColumns={numColumns}
              />
            </View><Button
              onPressBack={() => navigation.navigate('Personal Info')}
              onPressForward={() => [navigation.navigate('TaxSavings'), saveLastStatus('TaxSavings')]} /></>
        )}
    </View>
  );
};

export default Income;