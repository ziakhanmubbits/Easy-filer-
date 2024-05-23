import {StyleSheet} from 'react-native';

import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    innerplaceholder1: {
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"0.3%",
        marginTop:"2%",
        width: responsiveWidth(43),
        borderRadius: 5,
        color:"black"
    },
    innerplaceholder: {
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"0.3%",
        marginTop:"2%",
        width: responsiveWidth(90),
        borderRadius: 5,
        color:"black"
    },
   textview:{
    marginTop:"10%",
    padding:"2%",
    left:"3%"
   },
   text:{
    color:"black",
    fontSize:responsiveScreenFontSize(2),
    fontFamily:FontFamily.OpenSansSemiBold,
    textAlign:"auto",

   },
   view2:{
    flexDirection:"row",
    justifyContent:"space-evenly"
   },
   view3:{
    alignItems:"center",
    marginTop:"2%"
   },
   view4:{
    alignItems:"center",
    marginTop:"2%",
    marginBottom:"2%"
   },
   textview2:{
    marginTop:"5%",
    padding:"2%",
    left:"3%"
   }
});
export default Style;