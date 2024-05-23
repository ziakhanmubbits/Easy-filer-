import React from 'react';
import { View } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonImage = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{ alignItems: "center",justifyContent:"center",width:responsiveScreenWidth(12),height:responsiveScreenHeight(5.5) }}>
        <View style={{ height: "100%",
    width: "100%",
    resizeMode:"center" }} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonImage;