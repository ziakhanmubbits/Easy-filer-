import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React from 'react'
// import Header from '../ImportHeader/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Style from './Style'
import PieChart from 'react-native-pie-chart'
import List1Index from './list1Index'
import Header from '../../ImportHeader/Header'

const Expences = ({navigation}) => {
  const widthAndHeight = 180
  const series = [123, 321, 123, 298, 537]
  const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

  return (
    <View style={Style.main}>
      <View style={Style.header}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={Style.cntnt}>
        <View style={Style.mainviewinscroll}>
          <View style={Style.uprview}>
            <Text style={Style.hdrtxt}>Total Balance</Text>
            <TouchableOpacity style={Style.transbtn}>
              <Text style={Style.transtxt}>Transction</Text>
            </TouchableOpacity>
          </View>
          <Text style={Style.Rs}>
            RS : 0
          </Text>
          <View style={Style.txtview}>
            <View style={Style.text1}><Text style={Style.text}>Current</Text></View>
            <View style={Style.text1}><Text style={Style.text}>Savings</Text></View>
            <View style={Style.text12}><Text style={Style.text11}>+</Text></View>
          </View>
        </View>
        <View style={Style.v3}>
          <List1Index />
        </View>
        <View style={Style.v4}>
          <List2Index />
          <View style={Style.chart}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          
          </View>
        </View>
        <View style={Style.icnview}>
          <TouchableOpacity onPress={() => navigation.navigate('Transction')}>
            <AntDesign name='pluscircle' size={50} color={"#EB0414"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Expences
