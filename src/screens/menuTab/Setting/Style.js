import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth,responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from "../../../assets/customFonts/customFonts";

const Style = StyleSheet.create({
    mian: {
        flex: 1,
        backgroundColor: "white"
    },
    contentstyle: {
        flexGrow: 1
    },
    dropdown: {
        height: responsiveHeight(5),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        width: responsiveWidth(90)
    },
    viewinsidescroll: {
        alignItems: 'center',
        // marginTop: '5%'
    },
    box1: {
        height: responsiveHeight(5),
        borderWidth: 0.5,
        width: responsiveWidth(90),
        marginTop: "5%",
        borderRadius: 5,
        borderColor: 'gray'
    },
    box2: {
        marginTop: "1.5%",
        // borderRadius:5,
        // borderWidth:0.5,
        // height: responsiveHeight(5),
        // width: responsiveWidth(90),
        // borderColor:'gray'
    },
    box: {
        height: responsiveHeight(5),
        borderWidth: 0.5,
        width: responsiveWidth(90),
        marginTop: "1.5%",
        borderRadius: 5,
        borderColor: "gray"
    },
    nbr: {
        paddingVertical: 0,
        backgroundColor: "white",
    },
    phoneNumberView: {
        // paddingVertical: 0,
        borderWidth: 0.7,
        borderRadius: 5,
        borderColor: "gray",
        width: responsiveWidth(90)
    },
    cnicview: {
        height: responsiveHeight(5),
        width: responsiveWidth(90),
        borderRadius: 5,
        borderWidth: 0.5,
        marginTop: '2%',
        borderColor: "gray"
      },
      btn:{
        height: responsiveHeight(5),
        width: responsiveWidth(40),
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"red",
        borderRadius:5
      },
      txtbtn:{
        color:"white",
        fontSize:16,
        fontWeight:'700',
        fontFamily: FontFamily.OpenSansBold
      },
      btnview:{
        alignSelf:"flex-end",
        marginRight:"5%",
        marginTop:"1%"
      },
      passbox: {
        marginTop: '5%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
      },
      input: {
        width: responsiveScreenWidth(90),
        left: "30%"
      },
      passbox2: {
        marginTop: '5%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
      },
      input2: {
        width: responsiveScreenWidth(90),
        left: '5%'
      },
      icn: {
        alignItems: "center",
        right: "70%"
      },
      UpdateBtn:{
        height: responsiveHeight(5),
        width: responsiveWidth(32),
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"red",
        borderRadius:5,
        marginRight:'6%'
      },
      btnTxt:{
        color:"white",
        fontSize:16,
        fontWeight:'700',
        fontFamily: FontFamily.OpenSansBold
      },
      btnView:{
       marginTop:'5%',
       alignSelf:"flex-end"
      }

})
export default Style