import { StyleSheet } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';


const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  modalviewstyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  modaltext1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.MONTSERRAT_Bold
  },
  modaltext2: {
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Regular,
    fontSize: responsiveScreenFontSize(1.6),
    textAlign: "center"
  },
  modaltext3: {
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Regular,
    fontSize: responsiveScreenFontSize(1.6),
    textAlign: "center"
  },
  modaltext4: {
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Regular,
    fontSize: responsiveScreenFontSize(1.6),
    textAlign: "center"
  },
  modaltext5: {
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Regular,
    fontSize: responsiveScreenFontSize(1.6),
    textAlign: "center"
  },
  touchablestyle: {
    borderBottomWidth: 1,
    borderColor: "red"
  },
  touchabletext: {
    color: "black",
    fontSize: 14,
    fontFamily: FontFamily.OpenSansRegular
  },
  innercontainer: {
    width: responsiveWidth(95),
    height: responsiveHeight(20),
    backgroundColor: "white",
    // alignItems:"center",
    borderRadius: 10,
    padding: "1%"

  },
  item: {
    alignItems: 'center',
    marginVertical: "3%",
    borderRadius: 10,
    width: responsiveWidth(22)
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveWidth(12)

  },
  txtview: {
    justifyContent: "center"
    , alignItems: "center",
    padding: "10%",
  },
  txt1: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontFamily: FontFamily.OpenSansRegular
  },
  topview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  txt3: {
    color: "black",
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.OpenSansSemiBold
  }

});
export default Style;