import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../../../../assets/Styles/Fonts';
import { scale } from 'react-native-size-matters';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    width: responsiveWidth(95),
    // height: responsiveHeight(18),
    backgroundColor: "white",
    borderRadius: 10,
    padding: "1%"

  },
  topview: {
    width: responsiveScreenWidth(90),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  topviewtext1: {
    textAlign: "center",
    color: "black",
    fontSize: scale(16),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  topviewtext2: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  topviewtext3: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  modalview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  modalviewstyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1
  },
  modaltext1: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.MONTSERRAT_Bold,
    textAlign: "center"
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
    marginTop: responsiveScreenHeight(0.8),
    textAlign: "center"
  },

  touchablestyle: {
    // width:responsiveScreenWidth(78),
    borderBottomWidth: 1,
    borderColor: "red"
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  touchablestyleActive: {
    backgroundColor: 'white',
  },
  screennameview: {
    borderBottomWidth: 0.8,
    borderBottomColor: "darkred",
    // marginTop:"3%"
  },
  screennametext: {
    color: "darkred",
    fontSize: Fonts.f17,
    fontFamily: FontFamily.OpenSansSemiBold,
    marginLeft: "2%",
  },
  touchableview: {
    marginTop: responsiveScreenHeight(2),
    alignItems: "center"
  },
  touchablebutton: {
    backgroundColor: "gainsboro",
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(9),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: responsiveScreenHeight(1),
    borderRadius: 10
  },
  touchablebutton2: {
    backgroundColor: "gainsboro",
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(9),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: responsiveScreenHeight(2),
    borderRadius: 10
  },
  touchabletext: {
    color: "black",
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.MONTSERRAT_Medium
  }


});
export default Style;