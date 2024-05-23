import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
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
  imageviewtop:{
    height: responsiveHeight(10),
    width: responsiveWidth(18),
  },
  img: {
    height: "100%",
    width: "100%",
    marginTop: "5%"
  },
  txtheder: {
    fontSize: 22,
    color: "black",
    fontFamily: FontFamily.OpenSansBold,
    marginTop: "2%"
  },
  txttop: {
    color: "black",
    fontSize: responsiveScreenFontSize(2.2),
    marginTop: responsiveScreenHeight(2),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  txttop1: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    marginTop:responsiveScreenHeight(2),
    textAlign:"center",
    fontFamily: FontFamily.MONTSERRAT_Regular
  },
  txttop2: {
    color: "black",
    fontSize: 18,
    fontFamily: FontFamily.OpenSansRegular
  },
  v1: {
    alignItems: "center",
    marginTop: "10%"
  },
  btn11: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    backgroundColor: "steelblue",
    borderRadius: 4,
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
    width: responsiveWidth(38),
    height: responsiveHeight(5),
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
    fontSize: responsiveFontSize(2),
    fontFamily: FontFamily.OpenSansBold
  },
  imagesmainview: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    marginTop: '5%',
    borderRadius: 5
  },
  imageview: {
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    width: 93,
    height: 110,
    marginTop: '20%',
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
    fontFamily: FontFamily.OpenSansBold
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
    marginLeft:"10%",
    marginTop:"1%"
  },
  txt5:{
    color:"grey",
    marginLeft:"10%",
  },
  cntbtn: {
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    backgroundColor: '#EB0414',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: '4%'
  },
  imagesmainview: {
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderRadius: 5,
  },
  imageview2:{
    flexDirection: "row",
    flexWrap: "wrap",
      alignSelf: "center",
      justifyContent:"center",
  },
  image: {
   width:"100%",
   height:"100%",
   resizeMode:"center"
   
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
gifcontainer: {
  flex: 1,
  backgroundColor:'white',
  alignItems: 'center',
  justifyContent: 'center',
},
modalContainer: {
  alignItems: 'center',
  justifyContent: 'center',
},
gif: {
  width: "100%",
  height: "100%",
  resizeMode:"cover"
},
buttonloader:{
  minHeight:responsiveHeight(6),
  minWidth:responsiveScreenWidth(20),
}, 
loader:{
  minHeight:responsiveHeight(10),
  justifyContent:"center",
  alignItems:"center",
}
})
export default Style