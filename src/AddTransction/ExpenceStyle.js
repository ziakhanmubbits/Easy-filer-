import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import FontFamily from "../assets/customFonts/customFonts";



const ExpenceStyle = StyleSheet.create({
    contentStyle: {
        flexGrow: 1
    },
    listview: {
        flexDirection: "row",
        marginTop: '2%',
        marginLeft: "2.7%",
        height: responsiveHeight(100),
        flexWrap: 'wrap'

    },
    filesview: {
        backgroundColor: "gainsboro",
        height: responsiveHeight(11),
        width: responsiveWidth(18),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "1%",
        marginTop: '5%'
    },
    textlist:{
        color:'black',
        fontSize:13,
        alignSelf:"center",
        marginTop:"15%",
        fontFamily: FontFamily.OpenSansBold
    }
})
export default ExpenceStyle