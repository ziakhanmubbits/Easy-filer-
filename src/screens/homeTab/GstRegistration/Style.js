import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
import colors from "../../../Utility/colors/colors";
import { scale } from "react-native-size-matters";
import { Fonts } from "../../../assets/Styles/Fonts";


const Style = StyleSheet.create({
  mainView1: {
    flex: 1,
    backgroundColor: "white"
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
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
  icntxtinput: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    marginTop: responsiveScreenHeight(2)
  },
  dropdown: {
    height: responsiveScreenHeight(6.3),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  accview: {
    alignSelf: "center",
    width: responsiveScreenWidth(90),
    // left:scale(2),
    height: responsiveScreenHeight(6.2),
    justifyContent: "center"
  },
  accinput: {
    flexDirection: 'row',
    alignItems: "center",
    // marginHorizontal:"3%",
  },
  inputrs: {
    width: responsiveScreenWidth(90),
    color: 'rgb(69,69,69)',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansMedium
  },
  toptextview: {
    backgroundColor: "red",
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10
  },
  toptext1: {
    color: "white",
    fontFamily: FontFamily.MONTSERRAT_Medium,
    fontSize: responsiveScreenFontSize(2.5)
  },
  toptext2: {
    color: "white",
    fontFamily: FontFamily.OpenSansRegular,
    fontSize: responsiveScreenFontSize(1.9)
  },
  loader:{
    minHeight:responsiveHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
  },
  lowerView: {
    borderWidth: 0.7,
    borderRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderColor: "black",
    // marginLeft: "3%",
    marginTop: "2%",
    marginBottom:"3%",
    backgroundColor:`rgb(245,245,245)`
    
  },
  insideLowerView: {
    height: responsiveHeight(4),
    borderBottomWidth: 0.7,
    borderBottomColor: "black"
  },
  txtsixe: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansMedium,
     marginTop: "2%",
    left:'2%'
  },
  nxtview:{
    marginTop:'3%',
    flexDirection:"row",
    justifyContent:"space-around"
  },
  frsttxt:{
    color:"black",
    fontSize:Fonts.f18,
    fontFamily: FontFamily.OpenSansMedium
  },
  secndtxt:{
    color:"black",
    fontSize:Fonts.f18,
    fontFamily: FontFamily.OpenSansMedium
  },
  nxtview1:{

    marginTop:'5%',
    // marginRight:"5%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  },
  frsttxt2:{
    color:"black",
    fontSize:Fonts.f16,
    fontFamily: FontFamily.OpenSansRegular
  },
  secndtxt2:{
    color:"black",
    fontSize:Fonts.f16,
    fontFamily: FontFamily.OpenSansRegular
  },
  btnview1:{
    alignItems:"flex-end",
    marginTop:"8%",
    marginRight:"6%",
    position:"relative"
  },
  btnview2:{
    backgroundColor:"#EB0414",
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(25),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  },
  txtsixe1:{
    color:"white",
    fontSize:Fonts.f16,
    fontFamily: FontFamily.OpenSansRegular
  },
  loader:{
    minHeight:responsiveScreenHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
  },
  gifcontainer: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: "100%",
    height: "100%",
    resizeMode:"cover"
  },
  
})
export default Style