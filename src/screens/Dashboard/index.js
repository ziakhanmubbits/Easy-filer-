import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FontFamily from '../../assets/customFonts/customFonts'

const ListItem=[
    {
    id: '1',
    title: 'INdividual Tax Filling',
  },
  {
    id: '2',
    title: 'NTN Registration',
  },
  {
    id: '3',
    title: 'NTN Finder',
  },
  {
    id: '4',
    title: 'ATL Status Finder',
  },
]


const Dashboard = () => {
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (
        <View style={styles.mainview}>
           <FlatList
        data={ListItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
    )
}

export default Dashboard
const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        top:20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})