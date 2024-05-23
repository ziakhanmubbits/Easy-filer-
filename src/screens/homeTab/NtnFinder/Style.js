import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveScreenHeight
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white"
  },
  contentContainer: {
    flexGrow: 1
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  imageview: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveHeight(8),
    height: responsiveHeight(10),
    marginTop: "5%"
  },
  img: {
    height: "100%",
    width: "100%"
  },
  txtheder: {
    fontSize: responsiveScreenFontSize(2.2),
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Medium,
    marginTop: responsiveScreenHeight(2)
  },
  txttop: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    marginTop: responsiveScreenHeight(1),
    textAlign:"center",
    fontFamily: FontFamily.MONTSERRAT_Regular,

  },
  txttop1: {
    color: "black",
    fontSize: 15,
    fontFamily: FontFamily.OpenSansRegular
  },
  v1: {
    alignItems: "center",
    marginTop: "10%"
  },
  search: {
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: '5%',
  },
  searchbar: {
    borderWidth: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 5,
    borderColor: "darkgrey"
  },
  txt: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: FontFamily.OpenSansMedium
  },
  txtView: {
    marginTop: '2%',
    alignItems: "center"
  },
  texterror: {
    color: "red",
    marginLeft: '6%',
    fontFamily: FontFamily.OpenSansBold
  },
  txtButton: {
    backgroundColor: "red",
    height: responsiveHeight(7),
    width: responsiveScreenWidth(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  placeholder1: {
    width: responsiveScreenWidth(80),
    backgroundColor: "white",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansLight,
    color: "black"
  },
  placeholder2: {
    borderColor: "black",
    borderWidth: 1
  },


})
export default Style