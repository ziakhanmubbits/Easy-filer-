import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const Style = StyleSheet.create({
main:{
    flex:1
},
contntContianer:{
    flexGrow:1
},
headerView:{
    height: responsiveScreenHeight(5)
},
image:{
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(23)
}
})
export default Style
