import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontFamily from '../../../assets/customFonts/customFonts'

const list=[
  {
     id:'1', 
     name:'NTN Registartion-Salaried',
     rs:'600',
     duration:'1-2 Working Days',
     req:'Requirments :',
     call:'Request For Call',
     icon: <FontAwesome name='whatsapp' size={30} color={'white'} />,
     icon2: <FontAwesome name='envelope' size={22} color={'white'} />
  },
  {
    id:'2', 
    name:'NTN Registartion-Business',
    rs:'2500',
    duration:'1-2 Working Days',
    req:'Requirments :',
    call:'Request For Call',
    icon: <FontAwesome name='whatsapp' size={30} color={'white'} />,
    icon2: <FontAwesome name='envelope' size={22} color={'white'} />
 },
]

const ServiceList = () => {
  return (
    <View style={styles.main}>
    <View>
 {list.map((list,id) => {
        return (
          <View key={id} style={styles.view}>
            <Text style={styles.headertxt}>{list.name}</Text>
            <Text style={styles.txt1}> RS : {list.rs}</Text>
            <Text style={styles.txt2}>Completion : {list.duration}</Text>
            <Text style={styles.txt3}>{list.req}</Text>
            <View style={styles.viewlist}>
           <Entypo style={styles.icon} name='check' size={15} color={'#EB0414'}/>
           <Text style={styles.txta1}>Color Copy Of NIC</Text>
            </View>
            <View style={styles.viewlist}>
           <Entypo style={styles.icon} name='check' size={15} color={'#EB0414'}/>
           <Text style={styles.txta1}>Latest paid an electricity bill</Text>
            </View>
            <View style={styles.viewlist}>
           <Entypo style={styles.icon} name='check' size={15} color={'#EB0414'}/>
           <Text style={styles.txta1}>Phone Number</Text>
            </View>
            <View style={styles.viewlist}>
           <Entypo style={styles.icon} name='check' size={15} color={'#EB0414'}/>
           <Text style={styles.txta1}>Email Address</Text>
            </View>
            <View style={styles.lastview}>
              <Text style={styles.calltxt}>{list.call}</Text>
              <TouchableOpacity style={styles.icons1}>
                <Text>{list.icon}</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.icons2}>
                <Text>{list.icon2}</Text>
              </TouchableOpacity>
              </View>
          </View>
        );
      })}
    </View>
    </View>
  )
}

export default ServiceList

const styles=StyleSheet.create({
view:{
borderWidth:1,
width: responsiveWidth(85),
backgroundColor:'gainsboro',
height: responsiveHeight(40),
borderRadius:5,
alignSelf:"center",
marginTop:'3%',
},
headertxt:{
  fontSize:20,
  color:"black", fontFamily: FontFamily.OpenSansBold,
  left:'1%'
},
txt1:
{
  color:'black',
  fontSize:15,
   fontFamily: FontFamily.OpenSansBold,
  left:'1%',
  marginTop:'3%'
},
txt2:
{
  color:'black',
  fontSize:15,
   fontFamily: FontFamily.OpenSansBold,
  left:'1%',
  marginTop:'3%'
},
txt3:{
  color:'black',
  left:'1%',
  fontSize:16,
   fontFamily: FontFamily.OpenSansBold,
  marginTop:'3%'
},
viewlist:{
  flexDirection:'row',
  marginTop:'3%',
  marginLeft:"10%"
},
txta1:
{
  color:'black',
  fontSize:15,
   fontFamily: FontFamily.OpenSansBold,
  left:'30%',
},
icon:{
  top:'1%'
},
icons1:{
  backgroundColor:"#EB0414",
  borderRadius:5,
  width:responsiveWidth(10),
  height: responsiveHeight(5),
  justifyContent:"center",
  alignItems:"center",
  marginRight:"2%"
},
icons2:{
  backgroundColor:"#EB0414",
  borderRadius:5,
  width:responsiveWidth(10),
  height: responsiveHeight(5),
  justifyContent:"center",
  alignItems:"center"
},
lastview:{
  flexDirection:'row',
  alignSelf:'flex-end',
  right:'5%',
  marginTop:'8%',
},
calltxt:{
  color:'red',
  alignSelf:"center",
  marginRight:"3%",
  fontSize:15,
   fontFamily: FontFamily.OpenSansBold,},
// main:{
//   flex:1,
// }
})