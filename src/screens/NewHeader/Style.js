import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import {
  responsiveScreenHeight,
  responsiveScreenWidth
} from 'react-native-responsive-dimensions'
import FontFamily from "../../assets/customFonts/customFonts";

const Style = StyleSheet.create({
  mainView: {
    // flex: 1,
    paddingVertical: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  innerView2: {
    borderWidth:0.7,
    borderColor:"red",
    backgroundColor: "white",
    width: responsiveScreenWidth(32),
    height: responsiveHeight(4),
    borderRadius: 50,
    flexDirection: "row",
    marginLeft: '2%',
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: '1%'
  },
  txt: {
    left: responsiveScreenWidth(2),
    color: 'black',
    fontFamily: FontFamily.OpenSansMedium
  },
  headerview: {
    flexDirection: 'row',
    justifyContent:"space-around",
    marginTop: '1%',
    width:responsiveScreenWidth(20),
    marginLeft: "40%"
  },
  icon: {
    marginRight: "3%"
  },
  icon2: {
    right: "20%"
  },
  icon3: {
    right: "40%"
  },
  btmname: {
    color: "black",
    fontSize: 18,
    fontFamily: FontFamily.OpenSansBold,
    marginTop: "2%"
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
    color: "black",
    fontSize: 23,
    fontFamily: FontFamily.OpenSansBold
  },
  viewemail: {
    alignItems: "center"
  },
  emailcolor: {
    color: 'black',
    fontFamily: FontFamily.OpenSansBold
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
  btntxt: {
    color: 'white',
    fontFamily: FontFamily.OpenSansBold,
    fontSize: 16
  },
})
export default Style