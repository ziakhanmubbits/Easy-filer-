import {StyleSheet,Dimensions} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveScreenWidth,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../assets/Styles/Fonts';

const Style = StyleSheet.create({
container:{
    flex:1
},
imageview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%"
  },
  image: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(15)

  },
  txt1:{
    color:"black",
    textAlign:"center",
    fontSize:responsiveScreenFontSize(2.2),
    fontFamily:FontFamily.OpenSansSemiBold
  },    
  view2:{
    width:responsiveScreenWidth(90),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5%"
  },
  view3:{
    width:responsiveScreenWidth(90),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5%"
  },
  txt2:{
    textAlign:"center",
    color:"black",
    fontSize:responsiveScreenFontSize(1.6),
    fontFamily:FontFamily.OpenSansRegular
  },
  view4:{
        alignItems:"center",
        marginTop:"5%"
  },
  placeholder1: {
    paddingHorizontal: "3%",
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    marginLeft: "4%",
    width: responsiveWidth(50),
    borderRadius: 5,
    color: "black"
},
loader:{
  minHeight:responsiveHeight(10),
  justifyContent:"center",
  alignItems:"center",
  marginTop:"70%"
}
});
export default Style;