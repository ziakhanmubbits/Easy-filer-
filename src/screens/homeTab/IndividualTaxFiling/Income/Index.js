import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Style from './Style';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
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

const numColumns = 4;

const Income = (props) => {
  const [lastStatus, setLastStatus] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const route = useRoute();
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Retrieve data from AsyncStorage and set state
  const GettinAsyncValue = async () => {
    try {
      const userID = await AsyncStorage.getItem('USER ID');
      const Laststatus = await AsyncStorage.getItem('lastStatusName');
      const selectedItemId = await AsyncStorage.getItem('selectedIncomeId');

      if (userID !== null && Laststatus !== null) {
        setLastStatus(Laststatus);
        DataSubmit(userID);
      }

      if (selectedItemId !== null) {
        setSelectedItem(JSON.parse(selectedItemId));
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  // Save selected item to AsyncStorage
  const saveSelectedItem = async (itemId) => {
    try {
      await AsyncStorage.setItem('selectedIncomeId', JSON.stringify(itemId));
    } catch (error) {
      console.log('Error saving selected item:', error);
    }
  };

  useEffect(() => {
    GettinAsyncValue();
  }, []);

  const { data, isLoading, isError } = useGetIncomeTypeQuery();

  const saveIncome = (id) => {
    dispatch(setIncomeId(id));
  };

  const saveScreenName = (id) => {
    dispatch(setScreenName(id));
  };

  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name));
  };

  const DataSubmit = async (uId) => {
    try {
      await axios.patch(`${BASE_URL}users/${uId}/taxfillings/${taxFilingId}`, {
        taxfiling: {
          last_status: lastStatusName,
        },
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const saveLastScreen = async (lastStatusName) => {
        try {
          await AsyncStorage.setItem('lastscreen', lastStatusName);
        } catch (error) {
          console.log('Failed to save last screen:', error);
        }
      };
      saveLastScreen();

      return () => {
        // Optional cleanup function if needed when the screen is unfocused
      };
    }, [])
  );

  const navigateToScreen = (name) => {
    switch (name) {
      case 'Salery':
        navigation.navigate('IncomeSalery');
        break;
      case 'Business':
        navigation.navigate('IncomeBusiness');
        break;
      case 'Freelancer':
        navigation.navigate('Freelancer');
        break;
      case 'Professional':
        navigation.navigate('Professional');
        break;
      case 'Pension':
        navigation.navigate('Pension');
        break;
      case 'Agricultural':
        navigation.navigate('Agriculture');
        break;
      case 'Commission Services':
        navigation.navigate('ComissionServices');
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ marginTop: '60%' }}>
          <ActivityIndicator size={25} color={'red'} />
        </View>
      ) : (
        <>
          <View style={Style.view1}>
            <MediumText text={'Now let\'s start looking at your income'} style={Style.view1txt} />
            <SmallText text={'Select the sources of your income, you can select more'} style={Style.view1txt2} />
            <SmallText text={'than one if applicable'} style={Style.view1txt3} />
          </View>
          <View style={Style.flatlist}>
            <FlatList
              data={data?.income_types}
              renderItem={({ item }) => {
                const isSelected = selectedItem === item.id;

                return (
                  <View style={Style.item}>
                    <TouchableOpacity
                      onPress={() => {
                        navigateToScreen(item.title);
                        saveScreenName(item.title);
                        saveIncome(item.id);
                        setSelectedItem(item.id);
                        saveSelectedItem(item.id); // Save selected item to AsyncStorage
                      }}
                    >
                      {item.icon_path ? (
                        <View style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: responsiveScreenWidth(12),
                          height: responsiveScreenHeight(5.5),
                        }}>
                          <Image style={Style.image} source={{ uri: ASSET_URL + item.icon_path }} />
                        </View>
                      ) : (
                        <SkeletonImage />
                      )}
                      <View style={Style.flatlisttxt}>
                        <SmallText text={item.title} style={Style.flatlisttxt1} />
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
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
            />
          </View>
          <Button
            onPressBack={() => navigation.navigate('Personal Info')}
            onPressForward={() => {
              navigation.navigate('TaxSavings');
              saveLastStatus('TaxSavings');
            }}
          />
        </>
      )}
    </View>
  );
};

export default Income;
