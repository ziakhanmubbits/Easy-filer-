import {StyleSheet} from 'react-native';
import FontFamily from '../../assets/customFonts/customFonts';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'

const Style = StyleSheet.create({
container:{
    flexGrow:1,
    justifyContent:"flex-end",
   
},
view2:{
    flexDirection:"row",
    justifyContent:"space-between",
    // position:"absolute",
    alignSelf:"baseline",
    bottom:0,
    width:responsiveWidth(95),
    alignSelf:"center",
    marginVertical:responsiveHeight(2)

},
button1:{
    backgroundColor:"red",
    width:responsiveWidth(25),
    height:responsiveHeight(6),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    
},
button1txt:{
    color:"white",
    fontFamily:FontFamily.OpenSansSemiBold
    
},
button2:{
    backgroundColor:"steelblue",
    width:responsiveWidth(25),
    height:responsiveHeight(6),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
},
button2txt:{
    color:"white",
    fontFamily:FontFamily.OpenSansSemiBold
    
}

});
export default Style;