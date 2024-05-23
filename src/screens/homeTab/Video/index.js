import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{width:responsiveScreenWidth(30),height:responsiveScreenHeight(20)}}>
      <FastImage
        style={styles.gif}
        source={require('../../../../src/assets/pictures/shield.gif')}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: "100%",
    height: "100%",
    // resizeMode:"center"
  },
});

export default YourComponent;
















