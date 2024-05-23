import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import FontFamily from '../../../assets/customFonts/customFonts'
import { useGetIrisTypesQuery } from '../../../Services/irisprofileapicall'
import { Fonts } from '../../../assets/Styles/Fonts'
import { ASSET_URL } from '../../../CommonUrl/CommonUrls'
import { ActivityIndicator } from 'react-native-paper'
import AnimatedLottieView from 'lottie-react-native'
import { setIrisTypesId } from '../../../store/irisProfileReducer'
import { useDispatch } from 'react-redux'

const numColumns = 4;
const ItemList = () => {

  const [selectedItem, setSelectedItem] = useState(null)
  const dispatch = useDispatch();
  const saveIrisTypeId = (id) => {
    dispatch(setIrisTypesId(id))
  }

  const { data, isLoading } = useGetIrisTypesQuery();
  // console.log('data', data?.incomesources)

  const navigation = useNavigation();
  const call = (id) => {
    switch (id) {
      case 'Salery':
        navigation.navigate('Salary')
        break;
      case 'Rental Income':
        navigation.navigate('RentalIncome')
        break;
      case 'Capital Assets':
        navigation.navigate('CapitalAssests')
        break;
      case 'Agriculture':
        navigation.navigate('Agriculture')
        break;
      case 'Foriegn':
        navigation.navigate('Foriegn')
        break;
      case 'Other Sources':
        navigation.navigate('OtherSources')
        break;
      case 'Business Income':
        navigation.navigate('BusinessIncome')
        break;
      case '8':
        navigation.navigate('NoSourceOfIncome')
        break;
    }
    console.log('yes arrived', id)

  }
  return (
    <View style={styles.main}>
      {isLoading ?
        (
          <View style={styles.loader}>
            <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (
          <><View style={styles.txtview}>
            <Text style={styles.txt}>Primary Occupation / Source of Income</Text>
          </View><View style={styles.flatlist}>
              <FlatList
                data={data?.incomesources}
                renderItem={({ item }) => {
                  const isselected = selectedItem === item.id;
                  return (
                    <View style={styles.item}>
                      <TouchableOpacity onPress={() => [call(item.title), saveIrisTypeId(item.id), setSelectedItem(item.id)]}
                      >
                        <View style={{ alignItems: "center", justifyContent: "center", width: responsiveScreenWidth(18), height: responsiveScreenHeight(5.5) }}>
                          <Image style={styles.image} source={{ uri: ASSET_URL + item.icon_path }} />
                        </View>
                        <View style={styles.flatlisttxt}>
                          <Text style={styles.flatlisttxt1}>{item.title}</Text>
                        </View>
                      </TouchableOpacity>
                      {isselected && (
                        <Image
                          source={require('../../../../src/assets/pictures/correct.png')}
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
                    </View>
                  )
                }}
                keyExtractor={(item, index) => {
                  return item.id
                }}
                numColumns={numColumns} />
            </View></>
        )
      }
    </View>
  )
}
export default ItemList;
const styles = StyleSheet.create({
  mian: {
    flex: 1,
  },
  txtview: {
    marginTop: '2%',
  },
  txt: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    color: "black",
    fontFamily: FontFamily.OpenSansSemiBold
  },
  filesview: {
    backgroundColor: 'gainsboro',
    width: responsiveWidth(21),
    height: responsiveHeight(10),
    margin: 20,
    borderRadius: 9,
    borderWidth: 0.4,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  cntntstyle: {
    flexGrow: 1
  },
  item: {
    backgroundColor: 'white',
    width: responsiveWidth(21),
    height: responsiveHeight(11.5),
    margin: 17,
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 11,
    color: 'black',
    fontFamily: FontFamily.OpenSansSemiBold,
    marginTop: "3%"
  },
  title2: {
    fontSize: 11,
    color: "black",
    fontFamily: FontFamily.OpenSansSemiBold,

  },
  flatlist: {
    alignItems: "center",
    marginTop: "5%"
  },
  item: {
    alignItems: 'center',
    marginVertical: "3%",
    borderRadius: 10,
    width: responsiveWidth(22)
  },
  flatlisttxt: {
    alignItems: "center",
    marginTop: responsiveScreenHeight(1)
  },
  flatlisttxt1: {
    color: "black",
    textAlign: "center",
    fontSize: Fonts.f11,
    fontFamily: FontFamily.OpenSansSemiBold
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "center"
  },
  loader: {
    minHeight: responsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%"
  }
})