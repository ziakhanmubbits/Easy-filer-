import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../assets/customFonts/customFonts';
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
    fontFamily:FontFamily.OpenSansBold,
    fontSize:17,
    marginTop:"5%"
    
  },
  txt2:{
    color:"black",
    fontFamily:FontFamily.OpenSansRegular,
    fontSize:18,
  },
  txt3:{
    color:"black",
    fontFamily:FontFamily.OpenSansMedium,
    fontSize:14,
  },
  view2:{
    alignItems:"center",
    marginTop:"5%"
  },
  buttonstyle:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:"10%"
},
touchable1viewstyle:{
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"3%",
    width:responsiveWidth(25),borderRadius:10
},
touchable1text:{
    marginLeft:"5%"
},
touchable1text1:{
    color:"black",
    fontFamily:FontFamily.OpenSansRegular
},
touchable1viewstyle:{
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"3%",
    width:responsiveWidth(25),borderRadius:10
},
touchable1text:{
    marginLeft:"5%"
},
touchable1text1:{
    color:"black",
    fontFamily:FontFamily.OpenSansRegular 
},
touchable1text2:{
    color:"black",
    textAlign:"center", 
},
});
export default Style;