import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    hideview:{
        height:responsiveHeight(5), 
        marginTop:"5%",
        flexDirection:"row",  
        justifyContent:"space-between"
      },
      hideview1:{
        height:responsiveHeight(5), 
        marginTop:"10%",
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
        width: responsiveWidth(90),
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
      fontFamily:FontFamily.OpenSansRegular,
      fontSize:14,
      fontWeight:"700", 
    },
      text7: {
        left: "3%",
        color: "black",
        fontFamily:FontFamily.OpenSansRegular,
        fontSize: 14,
        fontWeight:"700", 
      },
      text6: {
        left: "3%",
        color: "black",
        fontFamily:FontFamily.OpenSansRegular,
        fontSize: 14,
        fontWeight:"700", 
      },
});
export default Style;