import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    placeholder: {
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(44),
        borderRadius: 5,
        color:"black"
    },
   view1:{
    marginTop:"10%"
   },
   view1txt:{
    color:"black",
    margin:"4%",
    fontSize:15,
    
   },
   view2:{
    alignItems: "center"
   },
   view3:{
    flexDirection: "row",
   },
   view4:{
    marginRight: "2%"
   },
   view5:{
    marginTop:"5%"
   }

});
export default Style;