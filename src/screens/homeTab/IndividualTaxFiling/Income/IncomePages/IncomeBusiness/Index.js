import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import Button from '../../../../../Components/Index';
import { useGetBusinessTypeQuery } from '../../../../../../Services/GetApiCall';
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessId, setBusinessScreenName } from '../../../../../../store/myReducer';
import AnimatedLottieView from 'lottie-react-native';
import { ASSET_URL } from '../../../../../../CommonUrl/CommonUrls';
import { Fonts } from '../../../../../../assets/Styles/Fonts';
import FontFamily from '../../../../../../assets/customFonts/customFonts';
import SkeletonImage from '../../../../../Components/skeletonImages';
import { LargeText, SmallText } from '../../../../../Components/Text';







const numColumns = 4;


const IncomeBusiness = () => {

  const [selectedItem, setSelectedItem] = useState(null)

  //getting screen name
  const screenName = useSelector((state) => state.myReducer.screenName)


  const { data, isLoading } = useGetBusinessTypeQuery();
  // console.log('BusinessType',data?.business_types)

  const dispatch = useDispatch();

  const saveBusinnes = (id) => {
    dispatch(setBusinessId(id))
  }

  const saveBusinessScreenName = (id) => {
    dispatch(setBusinessScreenName(id))
  }


  const navigation = useNavigation();
  function nav(name) {
    console.log(name)
    {
      switch (name) {
        case "Treader/Shops":
          [navigation.navigate('TraderShop'),];
          break;
        case "Dealers":
          navigation.navigate('Dealer');
          break;
        case "Supplier/Wholesaler":
          navigation.navigate('Wholesaler');
          break;
        // case "3":
        //   navigation.navigate('Manufacturer');
        //   break;
        // case "4":
        //   navigation.navigate('Imports');
        //   break;
        // case "5":
        //   navigation.navigate('Exports');
        //   break;
        default:
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
          <>
            <View style={Style.screennameview}>
              <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{screenName}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
              <LargeText 
              text={'Please Select Business Type'}
              style={Style.businnes}
              />
            </View><View style={{ alignItems: "center", marginTop: "5%" }}>
              <FlatList
                data={data?.business_types}
                renderItem={({ item }) => {
                  const isselected = selectedItem === item.id;
                  return (

                    <View style={Style.item}>
                      <TouchableOpacity onPress={() => [nav(item.name), saveBusinessScreenName(item.name), saveBusinnes(item.id), setSelectedItem(item.id)]}>
                        {item.icon_path ?
                          (
                            <View style={{ alignItems: "center", justifyContent: "center", width: responsiveScreenWidth(12), height: responsiveScreenHeight(5.5) }}>
                              <Image style={Style.image} source={{ uri: ASSET_URL + item.icon_path }} />
                            </View>
                          )
                          :
                          (
                            <SkeletonImage />
                          )}

                        <View style={Style.flatlisttxt}>
                          {/* <Text style={Style.flatlisttxt1}>{item.name}</Text> */}
                          <SmallText
                          text={item.name}
                          style={Style.flatlisttxt1}
                          />
                        </View>
                        {isselected &&
                          (
                            <Image
                              source={require('../../../../../../../src/assets/pictures/correct.png')}
                              style={{
                                position: 'absolute',
                                top: '40%',
                                left: '25%',
                                transform: [{ translateX: -10 }, { translateY: -10 }],
                                width: responsiveScreenWidth(7.3),
                                height: responsiveScreenHeight(3.3),
                              }}
                            />
                          )
                        }
                      </TouchableOpacity>


                    </View>
                  );
                }}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                numColumns={numColumns} />
            </View><Button
              onPressBack={() => navigation.navigate('Income')}
              onPressForward={() => navigation.navigate('TaxSavings')} /></>
        )}
    </View>
  )
}

export default IncomeBusiness;