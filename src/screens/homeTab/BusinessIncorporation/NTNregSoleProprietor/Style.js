import { StyleSheet } from "react-native";

import FontFamily from "../../../../assets/customFonts/customFonts";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Fonts } from "../../../../assets/Styles/Fonts";


const Style = StyleSheet.create({
  innerView: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
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
   toptext3: {
    color: "white",
    fontFamily: FontFamily.MONTSERRAT_Medium,
    fontSize: responsiveScreenFontSize(2)
  },
  toptext2: {
    color: "white",
    fontFamily: FontFamily.OpenSansRegular,
    fontSize: responsiveScreenFontSize(1.9)
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
  nbr: {
    paddingVertical: 0,
    backgroundColor: "white",
    borderWidth: 0.2,
    borderRadius:2.4,
    borderColor:"black"
  },
  phoneNumberView: {
    borderWidth: 0.7,
    borderRadius:5,
    borderColor: "black",
    width: responsiveScreenWidth(90)
  },
  loader:{
    minHeight:responsiveScreenHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
  },
  mainView1: {
    flex: 1,
    backgroundColor: "white"
  },
  lowerView: {
    borderWidth: 0.7,
    borderRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(25),
    borderColor: "black",
    // marginLeft: "3%",
    marginTop: "2%",
    marginBottom:"3%",
    backgroundColor:`rgb(245,245,245)`
    
  },
  insideLowerView: {
    height: responsiveScreenHeight(4),
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
  gifcontainer: {
    flex: 1,
    backgroundColor:'tranparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
  passbox: {
    marginTop: '4%',
    alignSelf: "center",
    flexDirection: "row",
    alignItems: 'center',
    // width:responsiveScreenWidth(90)
},
icn: {
    alignItems: "center",
    right: "60%"
},
input: {
    width: responsiveScreenWidth(90),
    left: "16%"
},
  })
  export default Style