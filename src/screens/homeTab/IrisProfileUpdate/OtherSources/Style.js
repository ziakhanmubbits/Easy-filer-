import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../../assets/customFonts/customFonts";




const Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  emlbox: {
    width: responsiveScreenWidth(90),
    marginTop: '4%',
    alignSelf: "center",
  },
  input: {
    width: responsiveScreenWidth(90),
    left: responsiveScreenWidth(2.9)
  },
  passbox: {
    marginTop: '2%',
    alignSelf: "center",
    flexDirection: "row",
    alignItems: 'center',
  },
  passbox2: {
    marginTop: '2%',
    alignSelf: "center",
    flexDirection: "row",
    alignItems: 'center',
  },
  icn: {
    alignItems: "center",
    right: "40%"
  },
  errortxt: {
    color: "red",
    marginLeft: "6%",
    fontFamily: FontFamily.OpenSansBold
  },
  phoneview: {
    alignSelf: "center",
    marginTop: '2%'
  },
  nbr: {
    paddingVertical: 0.1,
    backgroundColor: "white",
  },
  phoneNumberView: {
    borderWidth: 0.1,
    borderColor: "gray",
    width: responsiveScreenWidth(80),
  },
  addressview: {
    width: responsiveScreenWidth(90.5),
    alignSelf: "center",
    marginTop: '2%'
  },
  btn: {
    backgroundColor: 'darkred',
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(36),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    marginLeft: '5%',
    marginTop: "2%"
  },
  plus: {
    fontSize: responsiveScreenFontSize(2.5),
    color: "white",
    fontFamily: FontFamily.OpenSansBold
  },
  textstyl: {
    fontSize: responsiveScreenFontSize(1.9),
    color: "white",
    fontFamily: FontFamily.OpenSansBold
  },
  infoview: {
    // borderWidth:1,
    backgroundColor: "white",
    width: responsiveScreenWidth(90),
    marginTop: '2%',
    alignSelf: "center",
  },
  backbtn: {
    backgroundColor: '#0492c2',
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(35),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
  },
  nextbtn: {
    backgroundColor: '#EB0414',
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(35),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    marginTop: "2%"
  },
  modalView: {
    flex: 1
  },
  modalViewInside: {
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(70),
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
    backgroundColor: "#EB0414",
    flexDirection: "row",
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(70),
    borderTopStartRadius: 10,
    borderTopEndRadius: 10, alignItems: "center",
    justifyContent: "center"
  },
  textstyle: {
    color: '#FFF',
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: FontFamily.OpenSansBold
  },
  cross: {
    left: "100%"
  },
  crosstextstyle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: FontFamily.OpenSansBold
  },
  icntxtinput: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(7),
    marginTop: "2%",
  },
  dropdown: {
    height: responsiveScreenHeight(5),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  ibanview: {
    width: responsiveScreenWidth(60),
    marginTop: '2%'
  },
  addbtn: {
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(30),
    backgroundColor: "#EB0414",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%"
  },
  modalbtntxt: {
    color: 'white',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansBold
  },
  listview: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: responsiveScreenWidth(90),
    marginTop: "3%",
    alignItems: 'center'
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
  loader: {
    minHeight: responsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%"
  },
  innerView: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  uprView: {
    // height: responsiveScreenHeight(10),
    // marginTop:'5%',
    // marginLeft:'5%',
    backgroundColor: "red"
  },
  vtxt1: {
    fontSize: responsiveScreenFontSize(2.6),
    color: "white",
    fontFamily: FontFamily.OpenSansBold
  },
  vtxt2: {
    color: "white",
    width: responsiveScreenWidth(80),
    fontSize: responsiveScreenFontSize(1.7),
    marginTop: "1%",
    fontFamily: FontFamily.OpenSansSemiBold
  },
  lowerView: {
    height: responsiveScreenHeight(69.5),
    width: responsiveScreenWidth(100),
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },


})
export default Style