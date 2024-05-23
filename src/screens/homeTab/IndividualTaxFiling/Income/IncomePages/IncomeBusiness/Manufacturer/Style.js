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
    innercontainer:{
        width:responsiveWidth(95),
        height:responsiveHeight(20),
        backgroundColor:"white",
        // alignItems:"center",
        borderRadius:10,
        padding:"1%"

    },
    topview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
    },
    topviewtext1:{
        color:"black",
        fontSize:17,
        fontWeight:"300",
        fontFamily:FontFamily.OpenSansRegular
    },
    topviewtext2:{
        color:"black",
        fontSize:17,
        fontWeight:"300",
        fontFamily:FontFamily.OpenSansRegular
    },
    topviewtext3:{
        color:"black",
        fontSize:18,
        fontWeight:"300",
        fontFamily:FontFamily.OpenSansRegular
    },
    modalview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%"
    },
    modalviewstyle:{
        justifyContent: "center",
         alignItems: "center",
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1
    },
    modaltext1:{
        color: "black",
         fontWeight: "600",
         textAlign:"center",
         fontFamily:FontFamily.OpenSansRegular,
          
    },
    modaltext2:{
        marginTop:"2%",
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center",
          fontFamily:FontFamily.OpenSansRegular,
    },
    modaltext3:{
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center",
          fontFamily:FontFamily.OpenSansRegular,
    },
    modaltext4:{
        color: "black",
         fontWeight: "400", 
         fontSize: 12.5,
         marginTop:"2%",
         textAlign:"center",
         fontFamily:FontFamily.OpenSansRegular, 
    },
    modaltext5:{
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center",
          fontFamily:FontFamily.OpenSansRegular, 
    },
    touchablestyle:{
        borderBottomWidth:1,
        borderColor:"red"
    },
    touchabletext:{
        color:"black",
        fontSize:14,
        fontFamily:FontFamily.OpenSansRegular
    },
    touchable1view:{
        justifyContent:"center",
        alignItems:"center",
         marginTop:"10%"
    },
    touchable1viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),borderRadius:10
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
        fontFamily:FontFamily.OpenSansRegular
    },
    touchable2view:{
        justifyContent:"center",
        alignItems:"center",
         marginTop:"10%"
    },
    touchable2viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),borderRadius:10
    },
    touchable2text:{
        marginLeft:"5%"
    },
    touchable2text1:{
        color:"black",
        textAlign:"center",
        fontFamily:FontFamily.OpenSansRegular
    },
    touchable2text2:{
        color:"black",
        textAlign:"center",
        fontFamily:FontFamily.OpenSansRegular
    },
    touchable3view:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
    },
    touchable3viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),
        borderRadius:10
    },
    touchable3text:{
        marginLeft:"5%"
    },
    touchable3text1:{
        color:"black",
        fontFamily:FontFamily.OpenSansRegular
    },
    touchable3text2:{
        color:"black",
        textAlign:"center",
        fontFamily:FontFamily.OpenSansRegular
    },
    text4:{
        fontFamily:FontFamily.OpenSansRegular
    },
    
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },

});
export default Style;