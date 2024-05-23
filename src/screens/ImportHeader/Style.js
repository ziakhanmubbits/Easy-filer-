import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth
} from 'react-native-responsive-dimensions'
import FontFamily from "../../assets/customFonts/customFonts";
import { Fonts } from "../../../src/assets/Styles/Fonts";


const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomWidth: 0.8,
    borderColor: "grey"
  },
  innerView2: {
    backgroundColor: "white",
    width: responsiveWidth(30),
    height: responsiveHeight(4.5),
    borderRadius: 50,
    flexDirection: "row",
    marginLeft: '2%',
    borderWidth: 0.3,
    borderColor: "red",
    alignItems: "center",
    justifyContent: 'space-around',
    marginTop: '2.5%'
  },
  txt: {
    left: '20%',
    color: 'black',
    fontSize: Fonts.f16,
    fontFamily: FontFamily.OpenSansRegular,

  },
  headerview: {
    flexDirection: 'row',
    marginTop: '3.5%',
    marginLeft: "45%"
  },
  icon: {
    marginRight: "3%"
  },
  icon2: {
    right: "20%",
    height: "100%",
    width: "100%",
    resizeMode:"contain"
  },
  icon3: {
    height: "100%",
    width: "100%",
    resizeMode:"contain"
  },
  imageview: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3.5)
  },
  modalView: {
    flex: 1
  },
  modalViewInside: {
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(80),
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
    marginTop: "20%"
  },
  textstyle: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "800",
    color: 'black',
  },
  btn: {
    marginTop: '7%',
    backgroundColor: "red",
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btntxt: {
    color: 'white',
    fontFamily: FontFamily.OpenSansSemiBold,
    fontSize: 16
  },
  closetxt: {
    color: "white",
    fontSize: responsiveScreenFontSize(2.4),
    fontWeight: '800'
  },
  btmname: {
    color: "black",
    fontSize: 18,
    marginTop: "2%",
    fontFamily: FontFamily.OpenSansBold
  },
  characterview: {
    backgroundColor: 'red',
    borderWidth: 1,
    alignSelf: "center",
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderColor: "red",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  character: {
    color: "white",
    fontSize: 23,
    fontWeight: '600'

  },
  viewemail: {
    alignItems: "center"
  },
  emailcolor: {
    color: 'black',
    fontWeight: "500"
  },
  rbview: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: "1%"
  },
  rbtext: {
    color: "black",
    fontFamily: FontFamily.OpenSansBold
  },
  rbicon: {
    left: "220%",
  },
  rblastview: {
    marginTop: "2%",
    borderTopWidth: 1,
    borderColor: "gainsboro",
    width: responsiveWidth(85),
    alignSelf: "center"
  },
  btnrb: {
    marginTop: '6%',
    backgroundColor: "red",
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  modalmainview: {
    backgroundColor: 'white',
    // height: responsiveScreenHeight(20),
    padding:12,
    alignItems: "center",
    borderRadius: 10,
    width: responsiveScreenWidth(90)
  },
  modaltext: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansSemiBold
  },
  modalbuttonview: {
    alignSelf: "center",
    // marginTop:"2%"

  },
  modalbutton: {
    backgroundColor: "#EB0414",
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(18),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "4%"
  },
  modalbuttontext: {
    color: "white",
    fontSize: Fonts.f16,
    alignItems: "center",
    fontFamily: FontFamily.OpenSansRegular
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: responsiveScreenWidth(90),
    marginTop: responsiveScreenHeight(2)
  },
  touchview: {
    backgroundColor: "transparent",
    width: responsiveScreenWidth(20),
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: "black",
    flexDirection: "row"
  },
  text: {
    color: "black",
    fontFamily: FontFamily.MONTSERRAT_Regular,
    fontSize: responsiveScreenFontSize(1.4)
  }

})
export default Style