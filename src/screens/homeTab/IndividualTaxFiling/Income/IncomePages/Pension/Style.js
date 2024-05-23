import { StyleSheet } from 'react-native';

import React from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder1view: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "2%"
  },
  placeholder1: {
    paddingHorizontal:"3%",
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    width: responsiveWidth(60),
    borderRadius: 5,
    color: "black"
  },
  textinputview2: {
    marginTop: "1%"
  },
  textinputview2style: {
    color: "black",
    margin: "2%",
    fontWeight: "300"
  },
  placeholder2view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  hideview: {
    height: responsiveHeight(5),
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text5: {
    color: "black",
    margin: "2%",
    fontSize: 14,
    fontWeight: "300",
  },
  text6: {
    left: "3%",
    color: "black",
    fontSize: 14,
    fontWeight: "300",
  },
  text7: {
    left: "3%",
    color: "black",
    fontSize: 14,
    fontWeight: "300",
  },
  text8: {
    left: "3%",
    marginTop: "3%",
    color: "black",
    fontSize: 14,
    fontWeight: "300",
  },
  innercontainer: {
    width: responsiveWidth(97),
    height: responsiveHeight(22),
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    padding: "1%"

  },
  view1: {
    marginTop: "20%"
  },
  txt1: {
    color: "black",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2.6),
    fontFamily:FontFamily.OpenSansSemiBold
  },
  modaltxt1: {
    color: "black",
    fontWeight: "bold",
    fontFamily:FontFamily.OpenSansRegular
  },
  modaltxt2: {
    color: "black",
    fontWeight: "400",
    fontFamily:FontFamily.OpenSansRegular,
    fontSize: 12,
    textAlign: "center",
    marginTop: "1%",
    
  },
  modaltxt3: {
    color: "black",
    fontWeight: "400",
    fontFamily:FontFamily.OpenSansRegular,
    fontSize: 12,
    textAlign: "center"
  },
  backgroundview: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  modalview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
},
modalviewstyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
},
modaltext1: {
  color: "black",
  textAlign: "center",
  fontSize: responsiveScreenFontSize(2),
  fontFamily: FontFamily.MONTSERRAT_Bold
},
modaltext2: {
  color: "black",
  fontFamily: FontFamily.MONTSERRAT_Regular,
  fontSize: responsiveScreenFontSize(1.6),
  textAlign: "center"
},
modaltext3: {
  color: "black",
  fontFamily: FontFamily.MONTSERRAT_Light,
  fontSize: responsiveScreenFontSize(1.6),
  textAlign: "center"
},
modaltext4: {
  color: "black",
  fontFamily: FontFamily.MONTSERRAT_Regular,
  fontSize: responsiveScreenFontSize(1.6),
  textAlign: "center"
},

});
export default Style;