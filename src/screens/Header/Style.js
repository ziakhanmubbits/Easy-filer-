import { StyleSheet } from 'react-native'
import FontFamily from '../../assets/customFonts/customFonts';
const Style = StyleSheet.create({
    container:{
       flexDirection:"row",
       justifyContent:"space-evenly",
       borderBottomWidth:0.5,
    },
    touchableview:{
        alignItems:"flex-end",
        marginRight:"30%"
    },
    touchableopacity:{
        padding: "3%",
        backgroundColor: "lightgrey",
        width: "55%",
        borderRadius: 20,
        margin: "6%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'row',
    },
    touchabletext:{
        color:"black",
        fontFamily: FontFamily.OpenSansBold
    },
    view3:{
        alignItems:"stretch",
        marginLeft:"30%"
    },
    view3style:{
        padding: "2%",
        width: "40%",
        borderRadius: 20,
        margin: "7%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    }
   
 
})
export default Style;