import { View, Text, ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../ImportHeader/Header'

import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'

import List1Index from '../homeTab/ExpenseTracker/list1Index'
import List2Index from '../homeTab/ExpenseTracker/List2Index'
import FontFamily from '../../assets/customFonts/customFonts'



const Index2 = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.cntnt}>
      <View style={styles.mainviewinscroll}>
          <View style={styles.uprview}>
            <Text style={styles.hdrtxt}>Total Balance</Text>
            <TouchableOpacity style={styles.transbtn}>
              <Text style={styles.transtxt}>Transction</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.Rs}>
            RS : 0
          </Text>
          <View style={styles.txtview}>
            <View style={styles.text1}><Text style={styles.text}>Current</Text></View>
            <View style={styles.text1}><Text style={styles.text}>Savings</Text></View>
            <View style={styles.text1}><Text style={styles.text}></Text></View>
          </View>
        </View>
        <View style={styles.v3}>
          <List1Index />
        </View>
        <View>
          <List2Index />
        </View>
        <View style={styles.icnview}>
          <TouchableOpacity onPress={() => navigation.navigate('Transction')}>
            <AntDesign name='pluscircle' size={50} color={"#EB0414"} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

export default Index2
const styles=StyleSheet.create({
  main: {
    flex: 1
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  cntnt: {
    flexGrow: 1
  },
  transbtn: {
    backgroundColor: "#EB0414",
    borderRadius: 50,
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(4),
    justifyContent: "center",
    alignItems: "center"
  },
  transtxt: {
    color: "white",
    fontFamily: FontFamily.OpenSansBold
  },
  hdrtxt: {
    fontSize: responsiveScreenFontSize(2.5),
    color: 'gray'
  },
  uprview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    marginLeft: '2%'
  },
  Rs: {
    fontSize: responsiveScreenFontSize(2.6),
    fontFamily: FontFamily.OpenSansBold,
    color: 'black',
    marginLeft: '2%'
  },
  text1: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(6),
    backgroundColor: 'white',
    borderRadius: 25,
  },
  txtview: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: '3%'
  },
  mainviewinscroll: {
    height: responsiveScreenHeight(18),
    borderBottomWidth: 1,
    backgroundColor: '#EBEBEB'
  },
  text: {
    fontSize: 19,
    alignSelf: 'center',
    fontFamily: FontFamily.OpenSansBold
  },
  v3: {
    borderBottomWidth: 1,
    height: responsiveScreenHeight(18)
  },
  icnview:{
    alignItems:"flex-end",
    marginTop:'5%',
    marginRight:'5%'
  }

})