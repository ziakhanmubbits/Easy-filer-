import {StyleSheet} from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../../../assets/customFonts/customFonts';


const Style = StyleSheet.create({
    container: {
        flex: 1,
      },
      txt5:{
        color:"black",
        fontFamily:FontFamily.MONTSERRAT_Medium,
        fontSize:responsiveScreenFontSize(2),
        margin:"5%",
      },
      modalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      modalViewInside: {
        height: responsiveScreenHeight(30),
        width: responsiveScreenWidth(80),
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "70%",
        alignItems: "center",
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      txtView: {
        marginTop: responsiveScreenHeight(2),
        alignItems:"center",justifyContent:"center"
      },
      textstyle: {
        fontSize: responsiveScreenFontSize(1.8),
        fontFamily: FontFamily.MONTSERRAT_Medium,
        color: 'black',
      },
      btn: {
        marginTop: '6%',
        backgroundColor: "steelblue",
        height: responsiveScreenHeight(5),
        width: responsiveScreenWidth(40),
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
      },
      btn2: {
        marginTop: '3%',
        backgroundColor: "steelblue",
        height: responsiveScreenHeight(5),
        width: responsiveScreenWidth(40),
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
      },
      btntxt: {
        color: 'white',
        fontFamily: FontFamily.OpenSansBold
      },
      closeBtn: {
        marginTop: "7%",
        height: responsiveScreenHeight(4),
        width: responsiveScreenWidth(10),
        backgroundColor: "steelblue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
      },
      closetxt: {
        color: "white",
        fontSize: responsiveScreenFontSize(2.4),
        fontFamily: FontFamily.OpenSansBold
      },
      image: {
        width: "100%",
        height: "100%",
        overflow:"hidden",
        borderRadius:10
      },
      placeholder1: {
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        width: responsiveScreenWidth(90),
        borderRadius: 5,
        color: "black",
        paddingHorizontal:"5%"
      },
      touchable:{
        backgroundColor:"steelblue",
        width:responsiveScreenWidth(40),
        height:responsiveScreenHeight(12),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12
       
      },
      imageview:{
        backgroundColor:"steelblue",
        width:responsiveScreenWidth(40),
        height:responsiveScreenHeight(12),
        alignItems:"center",
        alignItems:"flex-end",
        borderRadius:10
      },
      imagesmainview: {
        // height: responsiveScreenHeight(60),
        width: responsiveScreenWidth(100),
        borderRadius: 5,
      },
      imageview2:{
        flexDirection: "row",
        flexWrap: "wrap",
         width: responsiveScreenWidth(90),
        //  height: responsiveScreenHeight(30),
          alignSelf: "center",
          justifyContent:"center",
       
         
      },
      image: {
        // margin: 10,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        height: "100%",
        resizeMode:"contain",
        // marginTop: '8%',
        backgroundColor:"red"
      },
   
});
export default Style;