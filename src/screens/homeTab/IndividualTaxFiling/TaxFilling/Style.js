import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import { Fonts } from "../../../../../src/assets/Styles/Fonts";
import FontFamily from "../../../../assets/customFonts/customFonts";

const Style = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: "white"
    },
    cntnt: {
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
    innerView2: {
      backgroundColor: "#EBEBEB",
      width: responsiveWidth(28),
      height: responsiveHeight(4),
      borderRadius: 50,
      flexDirection: "row",
      top: 4
    },
    txt: {
      color: "#000000",
      top: '4%',
      marginLeft: "10%",
      fontFamily: FontFamily.OpenSansBold
    },
    icon: {
      backgroundColor: "white",
      borderRadius: 40,
      top: '15%',
      left: "100%"
    },
    iconV: {
      flexDirection: "row",
      alignSelf: "center",
      marginLeft: "50%",
      justifyContent: "space-evenly"
    },
    icon2: {
      left: "20%"
    },
    icon3: {
      left: "40%"
    },
    contntstyle: {
      flexGrow: 1
    },
    txtname: {
      color: "black",
      fontSize:Fonts.f22,
      fontFamily: FontFamily.OpenSansRegular,
    },
    description: {
      color: "black",
      fontSize:Fonts.f17,
      fontFamily: FontFamily.OpenSansRegular
    },
    btnC: {
      width: responsiveWidth(90),
      height: responsiveHeight(7),
      backgroundColor: "#43A5FF",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%"
    },
    btnCtxt: {
      color: "white",
      fontSize:Fonts.f20,
      fontFamily: FontFamily.OpenSansRegular
    },
    introview: {
      
      height: responsiveHeight(15),
      width: responsiveWidth(100),
      borderBottomColor: "black",
      backgroundColor:"white"
    },
    introview1: {
      marginLeft: "5%",
      marginTop: '2%',
    },
    newYearTax: {
      width: responsiveWidth(90),
      height: responsiveHeight(7),
      backgroundColor: "#EB0414",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%",
      // marginLeft: 10,
      flexDirection:"row"
    },
    btnCtxt1: {
      color: "white",
      fontSize:Fonts.f20,
      fontFamily: FontFamily.OpenSansRegular
    },
    lowerView: {
      borderWidth: 0.7,
      borderRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      width: responsiveWidth(90),
      height: responsiveHeight(25),
      borderColor: "black",
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
      fontSize: Fonts.f18,
      fontFamily: FontFamily.OpenSansRegular,
       marginTop: "2%",
      left:'2%'
    },
    nxtview:{
      marginTop:'3%',
      flexDirection:"row",
      justifyContent:"space-around"
    },
    nxtview1:{
      marginTop:'5%',
      flexDirection:"row",
      alignItems:"center",
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
    listview: {
      flexDirection: "row",
      marginTop:"2%",
      width:responsiveScreenWidth(80),
      left:"5%"
    },
    filesview: {
      backgroundColor: "gainsboro",
      height: responsiveHeight(10),
      width: responsiveWidth(18),
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "1%",
      marginTop: '2%'
    },
    textlist: {
      color: 'black',
      fontSize: 13,
      fontFamily: FontFamily.OpenSansBold,
      alignSelf: "center",
      marginTop: "5%",
      fontWeight: '600'
    },
    fiscalyeartxt:{
      color:"black",
      marginVertical:"5%",
      fontSize:responsiveFontSize(2),
      fontFamily:FontFamily.OpenSansMedium,
      textDecorationLine:"underline",
    },
    listviewtxt:{
      color:"black",
      fontSize:Fonts.f18,
      fontFamily:FontFamily.OpenSansRegular
    },
    loader:{
      minHeight:responsiveHeight(10),
      justifyContent:"center",
      alignItems:"center",
      marginTop:responsiveScreenHeight(40)
    }
  })
  export default Style