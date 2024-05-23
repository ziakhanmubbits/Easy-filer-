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
  item: {
    marginLeft: "10%",
    borderRadius: 10,
    width: responsiveWidth(22)
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveWidth(12)

  },
  flatlistview: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  txt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  topview: {
    justifyContent: "center",
    alignItems: "center"
    , marginTop: "20%"
  },
  txt2: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    textAlign: "center",
    fontFamily: FontFamily.OpenSansRegular
  },
  txt3: {
    color: "black",
    fontSize: responsiveScreenFontSize(2.4),
    textAlign: "center",
    fontFamily: FontFamily.OpenSansSemiBold
  },
  txt4: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.OpenSansRegular
  },
  flatlist: {
    alignItems: "center",
    marginTop: "10%"
  }
});
export default Style;