import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    item: {
        marginLeft:"10%",
        borderRadius:10,
       width:responsiveWidth(22),
      },
      image: {
        height:responsiveHeight(6),
        width:responsiveWidth(12)
       
      },
      view1:{
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
      view2:{
        alignItems:"center",
        marginTop:"20%"
      },
      view2txt:{
        color:"black",
        fontSize:17,
        textAlign:"center",
        fontFamily:FontFamily.OpenSansRegular
      },
      view2txt2:{
        color:"black",
        fontSize:17,
      fontFamily:FontFamily.OpenSansSemiBold
      },
      view2txt3:{
        color:"black",
        textAlign:"center",
        fontSize:13.5,
        fontFamily:FontFamily.OpenSansRegular
      },
      view3:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
      }
   
});
export default Style;