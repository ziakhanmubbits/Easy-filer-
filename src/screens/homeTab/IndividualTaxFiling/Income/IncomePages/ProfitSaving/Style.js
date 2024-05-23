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
    view1:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"20%"
    },
    txt1:{
        color:"black",
        fontFamily:FontFamily.OpenSansRegular,
        fontSize:18,
        textAlign:"center"
    },
    txt2:{
       fontFamily:FontFamily.OpenSansSemiBold
    },
    txt3:{
        color:"black",
        fontSize:14,
        fontFamily:FontFamily.OpenSansRegular
    },
    item: {
        alignItems: 'center',
        marginVertical:"3%",
        borderRadius:10,
      width:responsiveWidth(22)
      },
      image: {
        height:responsiveHeight(6),
        width:responsiveWidth(12)
       
      },
      txt4:{
        color:"black",
        textAlign:"center",
        fontSize:11,
        fontFamily:FontFamily.OpenSansRegular
      },
});
export default Style;