import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const Apploader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject,styles.constainer]}>
    <AnimatedLottieView source={require('../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop/>
    </View>
  )
}

const styles=StyleSheet.create({
    constainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'rgba(0,0,0,0.3)'

    }
})
export default Apploader;
