import {StyleSheet} from 'react-native';
import React from 'react';
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
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
        padding:"2%"

    },
    topview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
    },
    topviewtext1:{
        color:"black",
        fontSize:responsiveScreenFontSize(2),
        fontFamily:FontFamily.MONTSERRAT_Light
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
        fontSize:responsiveScreenFontSize(2),
         textAlign:"center",
         fontFamily:FontFamily.MONTSERRAT_Medium
    },
    modaltext2:{
        color: "black",
        fontFamily:FontFamily.MONTSERRAT_Regular,
        fontSize: responsiveScreenFontSize(1.6),
        textAlign:"center"
    },
    modaltext3:{
        color: "black",
        fontFamily:FontFamily.MONTSERRAT_Regular,
        fontSize: responsiveScreenFontSize(1.6),
        textAlign:"center"
    },
    modaltext4:{
        color: "black",
        fontFamily:FontFamily.MONTSERRAT_Regular,
        fontSize: responsiveScreenFontSize(1.6),
        textAlign:"center"
    },
    modaltext5:{
        color: "black",
        fontFamily:FontFamily.MONTSERRAT_Regular,
        fontSize: responsiveScreenFontSize(1.6),
        textAlign:"center"
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
        fontSize:responsiveScreenFontSize(1.8),
        fontFamily:FontFamily.MONTSERRAT_Medium
        
    },
    touchable1text2:{
        color:"black",
        fontSize:responsiveScreenFontSize(1.8),
        fontFamily:FontFamily.MONTSERRAT_Medium,
        textAlign:"center"
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
        fontSize:responsiveScreenFontSize(1.8),
        fontFamily:FontFamily.MONTSERRAT_Medium
    },
    touchable2text2:{
        color:"black",
        fontSize:responsiveScreenFontSize(1.8),
        fontFamily:FontFamily.MONTSERRAT_Medium
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
    txt4:{
           fontFamily:FontFamily.OpenSansRegular,
            
    },
    touchableview: {
        marginTop: responsiveScreenHeight(2),
        alignItems: "center"
      },
      touchablebutton: {
        backgroundColor: "gainsboro",
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(9),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: responsiveScreenHeight(1),
        borderRadius: 10
      },
      touchablebutton2: {
        backgroundColor: "gainsboro",
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(9),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: responsiveScreenHeight(2),
        borderRadius: 10
      },
      touchabletext: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.8),
        fontFamily: FontFamily.MONTSERRAT_Medium
      }

});
export default Style;