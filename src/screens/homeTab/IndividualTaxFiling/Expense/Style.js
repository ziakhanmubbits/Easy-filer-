import {StyleSheet} from 'react-native';

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
    marginTop:"2%",
    fontSize:18,
    fontFamily:FontFamily.OpenSansSemiBold
  },
  view2:{
    marginTop:"5%"
  },
  placeholder1: {
    paddingHorizontal: "3%",
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    marginLeft: "4%",
    width: responsiveWidth(90),
    borderRadius: 5,
    color: "black"
},
touchabletext: {
    alignItems: "center",
    marginTop: "5%"
  },
  touchabletextstyle: {
    borderBottomWidth: 1,
    borderBottomColor: "red"
  },
  text3: {
    color: "black",
    fontFamily:FontFamily.OpenSansSemiBold
  },
  view3:{
    flex: 1,
    marginTop:"5%"
  },
  view4:{
    marginTop:"3%"
  }
});
export default Style;