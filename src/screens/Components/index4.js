import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from '../../assets/customFonts/customFonts'
// import Style from './Style';

const Button4 = (props) => {
    const {onPressBack,onPressForward}=props

  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <TouchableOpacity style={styles.button1} onPress={onPressBack}>
            <Text style={styles.button1txt}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPressForward}>
            <Text style={styles.button2txt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Button4;

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:"flex-end",
       
    },
    view2:{
        flexDirection:"row",
        justifyContent:"space-between",
        position:"absolute",
        alignSelf:"baseline",
        bottom:0,
        width:responsiveScreenWidth(95),
        alignSelf:"center",
        // marginVertical:responsiveScreenHeight(2)
    
    },
    button1:{
        backgroundColor:"red",
        width:responsiveScreenWidth(25),
        height:responsiveScreenHeight(6),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginBottom:"6%"
        
    },
    button1txt:{
        color:"white",
        fontFamily:FontFamily.OpenSansSemiBold
        
    },
    button2:{
        backgroundColor:"steelblue",
        width:responsiveScreenWidth(25),
        height:responsiveScreenHeight(6),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    button2txt:{
        color:"white",
        fontFamily:FontFamily.OpenSansSemiBold
        
    }
    
})