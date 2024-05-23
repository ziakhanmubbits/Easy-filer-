import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white"
  },
  contentContainer: {
    flexGrow: 1
  },
  Header1: {
    height: responsiveHeight(5)
  },
  img: {
    height: responsiveHeight(6),
    width: responsiveWidth(10),
    marginTop: "3%"
  },
  txtheder: {
    fontSize: 22,
    color: "black",
    fontFamily: FontFamily.OpenSansBold,
    marginTop: "2%"
  },
  txttop: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    marginTop: "1%",
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  txttop1: {
    color: "black",
    fontSize: responsiveScreenFontSize(1.88),
    fontFamily: FontFamily.OpenSansRegular
  },
  v1: {
    alignItems: "center",
    // marginTop: "1%",
    // backgroundColor:'red'
  },
  btn11: {
    width: responsiveWidth(90),
    height:responsiveHeight(6),
    backgroundColor: "steelblue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%"
  },
  btntxt: {
    fontSize: 16,
    color: 'white',
    fontFamily: FontFamily.OpenSansBold
  },
  btn1: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    backgroundColor: "#EB0414",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%"
  },
  btntxt1: {
    fontSize: 16,
    color: 'white',
    fontFamily: FontFamily.OpenSansBold
  },
  txtbottom: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '5%',
    fontFamily: FontFamily.OpenSansBold
  },
  txtbottom1: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: FontFamily.OpenSansBold
  },
  cntbtn: {
    width: responsiveWidth(45),
    height: responsiveHeight(6),
    backgroundColor: '#EB0414',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: '5%',
    alignSelf: 'flex-end',
    right: '4%'
  },
  cntbtntxt: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  imagesmainview: {
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderRadius: 5,
  },
  imageview2:{
    flexDirection: "row",
    flexWrap: "wrap",
     width: responsiveWidth(90),
     height: responsiveHeight(30),
      alignSelf: "center",
      justifyContent:"center",
   
     
  },
  image: {
    margin: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 100,
    marginTop: '10%',
    backgroundColor:"red"
  },
  inputview: {
    alignSelf: "center",
    width: responsiveWidth(90),
    marginTop: '5%'
  },
  emailview: {
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    borderRadius: 5,
    borderWidth: 1,
    marginTop: '4%',
    borderColor: "gainsboro"
  },
  cnicview: {
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    borderRadius: 5,
    borderWidth: 1,
    marginTop: '2%',
    borderColor: "gainsboro"
  },
  modalView: {
    flex: 1
  },
  modalViewInside: {
    height: responsiveHeight(30),
    width: responsiveWidth(80),
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "70%",
    alignItems: "center",
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtView: {
    marginTop: "10%"
  },
  textstyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FontFamily.OpenSansBold,
    color: 'black'
  },
  btn: {
    marginTop: '6%',
    backgroundColor: "red",
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btn2: {
    marginTop: '3%',
    backgroundColor: "red",
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btntxt: {
    color: 'white',
    fontSize:responsiveScreenFontSize(2),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  closeBtn: {
    marginTop: "7%",
    height: responsiveHeight(4),
    width: responsiveWidth(10),
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  closetxt: {
    color: "white",
    fontSize: responsiveFontSize(2.4),
    fontFamily: FontFamily.OpenSansBold
  },
  cnicnmber: {
    marginTop: "3%"
  },
  txt3:{
    color:"grey",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.MONTSERRAT_Light,
    marginLeft:"5.2%",
    marginTop:"1%"
  },
  txt4:{
    color:"black",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.OpenSansBold
  },
  txt5:{
    color:"grey",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.MONTSERRAT_Light,
    marginLeft:"5.2%",
  },
  txt6:{
    color:"black",
    fontFamily:FontFamily.OpenSansBold
  },
  txtbold:{
    color:"black",
   fontSize:responsiveScreenFontSize(2),
   fontFamily:FontFamily.MONTSERRAT_Medium
  },
  innerplaceholder1: {
    paddingHorizontal: "2%",
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "0.3%",
    marginTop: "3%",
    width: responsiveWidth(90),
    height:responsiveHeight(6),
    borderRadius: 5,
    color: "black"
},
txtinput:{
    alignItems:"center",
  },
  touchableicon:{
    padding:"16%",
    position:"absolute",
    alignSelf:"flex-end"
},
touchableiconview:{
    height:"30%",
    width:"30%",
    alignSelf:"flex-end",
    right:"10%"
},
iconstyle:{
    width:"100%",
    height:"100%"
},
messageContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
},
message: {
  fontSize: 16,
  fontWeight: 'bold',
},
image: {
  width:"100%",
  height:"100%",
 //  resizeMode:"contain"
  
 },
 loader:{
  minHeight:responsiveHeight(6),
  // height:responsiveScreenHeight(20),
  minWidth:responsiveScreenWidth(20),
  marginTop:responsiveScreenHeight(30)
},
modalmainview:{
  backgroundColor: 'white',
  height: responsiveScreenHeight(17),
  alignItems:"center",
  borderRadius:20,
  width:responsiveScreenWidth(90)
},
modalimageview:{
  width:responsiveScreenWidth(12),
  height:responsiveScreenHeight(5),
  marginTop:"5%"
},
modalimage:{
  height:"100%",
  width:"100%",
  resizeMode:"center"
},
modaltextview:{
  marginTop:"2%"
},
modaltext:{
  color:"black",
  fontSize:responsiveScreenFontSize(2),
  fontFamily:FontFamily.OpenSansSemiBold
},
modalbuttonview:{
  alignSelf:"flex-end",
  marginRight:"5%"
},
modalbutton:{
  backgroundColor:"#EB0414",
  height:responsiveScreenHeight(4),
  width:responsiveScreenWidth(22),
  alignItems:"center",
  justifyContent:"center",
  borderRadius:5,
  marginTop:"4%"
},
modalbuttontext:{
  color:"white",
  fontSize:responsiveScreenFontSize(2),
  fontFamily:FontFamily.OpenSansRegular
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
modalContainer: {
  alignItems: 'center',
  justifyContent: 'center',
},
})
export default Style