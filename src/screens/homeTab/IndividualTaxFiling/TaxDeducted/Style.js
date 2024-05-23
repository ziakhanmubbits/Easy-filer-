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
import { scale } from 'react-native-size-matters';



const Style = StyleSheet.create({
container:{
    flex:1
},
view1:{
  justifyContent:"center",
  alignItems:"center",
  marginTop:"10%"
},
view2:{
  justifyContent:"center",
    alignItems:"center",
    marginTop:"5%"
},
view3:{
  alignItems:"center",
  
},
txt1:{
  color:"black",
  fontSize:responsiveScreenFontSize(2.2),
  fontFamily:FontFamily.OpenSansBold
},
txt2:{
  color:"black",
  fontSize:responsiveScreenFontSize(2),
  fontFamily:FontFamily.OpenSansRegular
},
txt3:{
  color:"black",
  fontFamily:FontFamily.OpenSansBold,
  fontSize:scale(11.5),
},
txt4:{
  color:"black",
  fontFamily:FontFamily.OpenSansBold,
  fontSize:responsiveScreenFontSize(1.6),
  borderBottomWidth:1
},
flatlistview:{
  justifyContent:"center",
  alignItems:"center",
  marginTop:"10%",
  
},
item: {
  marginLeft:"4%",
  borderRadius:10,
 width:responsiveScreenWidth(22),
},
image: {
  height: "100%",
    width: "100%",
    resizeMode:"center"
 
},
view5:{
  justifyContent:"center",
  alignItems:"center",
  padding:"10%",
},
view1txt:{
  color:"black",
  textAlign:"center"
  ,fontSize:12,
  fontFamily:FontFamily.OpenSansRegular
},
view1txt2:{
  color:"black",
  textAlign:"center",
  fontSize:10,
  fontFamily:FontFamily.OpenSansRegular
},
flatlisttxt:{
  justifyContent:"center",
  alignItems:"center",
  padding:"10%",
},
flatlisttxt1:{
  color:"black",
  textAlign:"center",
  fontSize:responsiveScreenFontSize(1.8),
  fontFamily:FontFamily.MONTSERRAT_Light
},

});
export default Style;