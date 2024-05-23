import {StyleSheet,Dimensions} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../../assets/Styles/Fonts';


const Style = StyleSheet.create({
container:{
    flex:1
},
view1:{
  alignItems:"center"
},
view2:{
    borderBottomWidth:0.2,
    borderBottomColor:"black",
    marginTop:"1%"
},
view1txt:{
  color:"black",
  fontSize:18,
  fontFamily:FontFamily.OpenSansSemiBold
},
hideview:{
  height:responsiveHeight(5), 
  marginTop:"10%",
  flexDirection:"row",  
  justifyContent:"space-between"
},
hideview1:{
  alignItems:"center",
  marginTop:"10%",  
},
hideview2:{
  height:responsiveHeight(5), 
  marginTop:"5%",
  flexDirection:"row",  
  justifyContent:"space-between"
},
hideview3:{
  height:responsiveHeight(5), 
  marginTop:"8%",
  flexDirection:"row",  
  justifyContent:"space-between"
},
hideview4:{
  height:responsiveHeight(5), 
  marginTop:"8%",
  flexDirection:"row",  
  justifyContent:"space-between"
},
text5:{
  color:"black",
  margin:"2%",
  fontSize:14,
  fontWeight:"400", 
},
switchtoggleview:{
  width:responsiveWidth(18),
  height:responsiveHeight(4) ,
  borderColor:"red",
  borderWidth:0.8,
  flexDirection:"row",
  marginRight:"2%"
},
placeholder1: {
  marginTop:"1%",
  borderWidth: 1.5,
  borderColor: "grey",
  padding:"1%",
  width: responsiveWidth(40),
  borderRadius: 5,
  color:"black"
},
placeholder: {
  borderWidth: 1.5,
  borderColor: "grey",
  padding:"1%",
  marginHorizontal:"1%",
  width: responsiveWidth(44),
  borderRadius: 5,
  color:"black"
},
text5:{
color:"black",
left:"3%",
fontFamily:FontFamily.MONTSERRAT_Regular,
fontSize:responsiveScreenFontSize(2),

},
text7: {
  left: "3%",
  color: "black",
  fontFamily:FontFamily.OpenSansRegular,
  fontSize: 15,

},
text6: {
  left: "3%",
  color: "black",
  fontFamily:FontFamily.OpenSansRegular,
  fontSize: 15,
},
screennameview:{
  borderBottomWidth:0.8,
  borderBottomColor:"darkred",
  // marginTop:"3%"
},
screennametext:{
  color:"darkred",
  fontSize:Fonts.f17,
  fontFamily:FontFamily.OpenSansSemiBold,
  marginLeft:"2%",
},
loader:{
  minHeight:responsiveHeight(10),
  justifyContent:"center",
  alignItems:"center",
  marginTop:"70%"
}
 

});
export default Style;