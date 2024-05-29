import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
  mainView: {
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
  item: {
    backgroundColor: 'white',
    width: responsiveWidth(24),
    height: responsiveHeight(12),
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
    padding: "10%",
  },
  flatlisttxt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(1.4),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  text1view: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(2)
  },
  text1: {
    color: "black",
    fontSize: responsiveScreenFontSize(2.4),
    fontFamily: FontFamily.MONTSERRAT_Medium
  },
  text2: {
    color: "black",
    fontSize: responsiveScreenFontSize(2.1),
    fontFamily: FontFamily.OpenSansMedium
  },
  placholderview: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(1)
  },
  placeholder1: {
    width: responsiveScreenWidth(85),
    backgroundColor: "white",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansLight,
    color: "black",
    borderColor:'gray',
    borderWidth:1,
    borderRadius:6,
    paddingLeft:10
  },
  placeholder2: {
    borderColor: "black",
    borderWidth: 1
  },
  placeholder3: {
    width: responsiveScreenWidth(37),
    height:responsiveScreenHeight(4.5),
    backgroundColor: "white",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.OpenSansLight,
    color: "black",
    borderColor:'gray',
    borderWidth:1,
    borderRadius:6,
    paddingLeft:10,
    left:-5,
  },
  placeholder4: {
    borderColor: "black",
    borderWidth: 1,
  },
  loader:{
    minHeight:responsiveHeight(8),
    justifyContent:"center",
    alignItems:"center",
  }
})
export default Style