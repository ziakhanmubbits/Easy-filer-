import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
import { Fonts } from "../../../assets/Styles/Fonts";

const Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  innerview: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  calculatorimageview: {
    alignSelf: "center",
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(11)

  },
  calculatorimage: {
    width: "100%",
    height: "100%",
    resizeMode: "center"
  },
  imagetext: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2.6),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  textview: {
    justifyContent: "center",
    alignItems: "center"
  },
  icntxtinput: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    marginTop: "2%"
  },
  dropdown: {
    height: responsiveScreenHeight(6),
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  icn: {
    marginRight: "2%",
  },
  boxstyle: {
    backgroundColor: "lightgrey",
    width: responsiveScreenWidth(90),
    color: "white",
    borderWidth: 2,
    borderColor: "black"
  },
  placeholder1: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: "2%",
    width: responsiveScreenWidth(75),
    marginTop: "4%",
    borderRadius: 5,
    color: "black",
    fontSize: responsiveScreenFontSize(2.1),
    fontFamily: FontFamily.OpenSansMedium,
  },
  calculatorimageview2:{
   
    alignSelf: "center",
    marginTop:"4%",
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(5)
  },
  loader:{
    minHeight:responsiveHeight(10),
    justifyContent:"center",
    alignItems:"center",
    // marginTop:"70%"
  },
  loader2:{
    justifyContent:"center",
    alignItems:"center",
  },
})
export default Style