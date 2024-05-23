import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../../src/assets/Styles/Fonts';
import FontFamily from '../../../../assets/customFonts/customFonts';
const Style = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: "center",
    marginTop: responsiveScreenHeight(1)
  },
  flatlisttxt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.4),
    fontFamily: FontFamily.MONTSERRAT_Light
  },
  flatlisttxt2: {
    color: "black",
    textAlign: "center",
    fontSize: Fonts.f10,
    fontFamily: FontFamily.OpenSansSemiBold
  },
  view1: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  view1txt: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.MONTSERRAT_Medium

  },
  view1txt2: {
    color: "black",
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.MONTSERRAT_Light,
    textAlign: "center"
  },
  view1txt3: {
    color: "black",
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.MONTSERRAT_Light,
    textAlign: "center"
  },
  flatlist: {
    alignItems: "center",
    marginTop: "5%"
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
});
export default Style;