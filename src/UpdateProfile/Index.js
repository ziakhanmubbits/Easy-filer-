import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Style from './Style';

const UpdateProfile = () => {
  return (
    <ScrollView>
          <View style={Style.container}>
           <View style={Style.infoview}>
                    <Text style={Style.txt1}>Adnan Ali,This is your last filed</Text>
                    <Text style={Style.txt2}>Personal Info</Text>
                    <Text style={Style.txt3}>You can upload your information for this year</Text>
                </View>
    </View>
    </ScrollView>
  
  )
}
export default UpdateProfile;