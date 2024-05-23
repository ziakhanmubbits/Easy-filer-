import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const Style=StyleSheet.create({
    main:{
        flex:1
    },
    hdr:{
        height : responsiveScreenHeight(5)
    },
    textview:{
        height: responsiveScreenHeight(4),
        justifyContent:'center',
        width:responsiveScreenWidth(100),
        backgroundColor:'#d8bfd8'
    },
    textcolor:{
        fontSize: responsiveScreenFontSize(1.6),
        color:'#000000',
        marginLeft:7,
        fontWeight:'700'
    },
    Opacityw:{
        height : responsiveScreenHeight(4),
        justifyContent:"center"
    },
    btn:{
        height: responsiveScreenHeight(4),
        justifyContent:'center'
    },
    btnText:{
        fontSize: responsiveScreenFontSize(1.5),
        marginLeft:7,
        color:'#000000'
    },
    showExpenceView:{
        height : responsiveScreenHeight(4),
        justifyContent:"center",
        flexDirection:"row",alignItems:"center",
        justifyContent:'space-between'
    },
    rbsheetheader:{
        height: responsiveScreenHeight(4),
        width: responsiveScreenWidth(100),
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        backgroundColor:'red',
        bottom:'9.5%',
        justifyContent:"center"
    },
    hdrTxt:{
        color:'white',
        fontSize:16,
        fontWeight:"700",
        left:'2%'
    }
})
export default Style