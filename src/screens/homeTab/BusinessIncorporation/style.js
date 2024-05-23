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
  flatlistview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  item: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(24),
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "center"
  },
  flatlisttxt: {
    justifyContent: "center",
    alignItems: "center",
    padding: "7%",
  },
  flatlisttxt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.6),
    fontFamily: FontFamily.MONTSERRAT_Light
  },
  loader: {
    minHeight: responsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%"
  },
})
export default Style