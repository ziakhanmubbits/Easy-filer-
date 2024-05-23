import { StyleSheet } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../../assets/customFonts/customFonts';
const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25%"
  },
  image: {
    height: responsiveHeight(8),
    width: responsiveWidth(14)
  },
  txt1: {
    marginTop: "5%",
    color: "black",
    textAlign: "center",
    fontSize: 17,
    fontFamily: FontFamily.OpenSansRegular
  },
  txt2: {
    marginTop: "0.5%",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontFamily: FontFamily.OpenSansRegular
  },
  txt3: {
    marginLeft: "5%",
    color: "black",
    fontSize: 15,
    fontFamily: FontFamily.OpenSansRegular
  },
  view1: {
    marginTop: "5%"
  },
  placeholder: {
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    marginHorizontal: "1%",
    width: responsiveWidth(50),
    borderRadius: 5,
    color: "black"
  },
  text5: {
    color: "black",
    marginLeft: "5%",
    fontFamily: FontFamily.OpenSansRegular,
    fontSize: 14.5,
    fontWeight: "600",
  },
  text7: {
    left: "3%",
    color: "black",
    fontFamily: FontFamily.OpenSansRegular,
    fontSize: 14,
    fontWeight: "700",
  },
  switchtoggleview: {
    width: responsiveWidth(18),
    height: responsiveHeight(4),
    borderColor: "red",
    borderWidth: 0.8,
    flexDirection: "row",
    marginRight: "2%"
  },
  hideview: {
    height: responsiveHeight(5),
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeholder1: {
    marginTop: "1%",
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    width: responsiveWidth(50),
    borderRadius: 5,
    color: "black"
  },
});
export default Style;