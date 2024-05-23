import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
}
  from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
import { Fonts } from "../../../assets/Styles/Fonts";



const Style = StyleSheet.create({
  outview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  CntntStyle: {
    flexGrow: 1,
    // alignItems: "center",
    // justifyContent:"center",
  },
  txtView: {
    width: responsiveScreenWidth(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(10)
  },
  uprtxt: {
    fontFamily: FontFamily.MONTSERRAT_Medium,
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    textAlign: "center"
  },
  box: {
    width: responsiveScreenWidth(90),
    marginTop: "10%",
    alignSelf: "center"
  },
  placeholder1: {
    paddingHorizontal: "3%",
    // marginTop:"4%",
    borderWidth: 1,
    borderColor: "black",
    padding: "1%",
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 5,
    color: "black"
  },
  btnView: {
    alignSelf: "center",
    marginTop: "3%"
  },
  btn: {
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(90),
    backgroundColor: "#EB0414",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EB0414"
  },
  btntxt: {
    color: "white",
    fontSize: Fonts.f18,
    fontFamily: FontFamily.OpenSansRegular
  },
  Forpass: {
    color: "#000000",
    fontFamily: FontFamily.OpenSansRegular
    , marginLeft: "4%",
    fontSize: Fonts.f18
  },
  pasView: {
    marginTop: "3%"
  },
  lastView: {
    alignSelf: "center",
    marginTop: "5%"
  },
  lasttxt: {
    color: "#EB0414",
    fontSize: Fonts.f18,
    fontFamily: FontFamily.OpenSansRegular,
    alignSelf: "center"
  },
  lasttxt1: {
    color: "#000000",
    fontSize: Fonts.f18,
    fontFamily: FontFamily.OpenSansRegular,
  },
  textFailed: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: "5%"
  },
  icon: {
    height: "70%",
    width: "50%",

  },
  txtinput: {
    right: '20%'
  },
  textFailed1: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: "2%"
  },
  indc: {
    bottom: '45%'
  },
  input: {
    width: responsiveScreenWidth(90),
    left: "18%"
  },
  placeholder1: {
    width: responsiveScreenWidth(90),
    backgroundColor: "white",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansLight,
    color: "black"
  },
  placeholder2: {
    borderColor: "black",
    borderWidth: 1
  },
  passbox: {
    marginTop: '2%',
    alignSelf: "center",
    flexDirection: "row",
    alignItems: 'center',
  },
  icn: {
    alignItems: "center",
    right: "45%"
  },
  loader: {
    minHeight: responsiveHeight(10),
    // height:responsiveScreenHeight(20),
    minWidth: responsiveScreenWidth(20),
    // marginTop:responsiveScreenHeight(30)
  },
})

export default Style