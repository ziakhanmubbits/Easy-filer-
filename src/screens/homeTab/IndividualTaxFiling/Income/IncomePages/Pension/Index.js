import { View, Text,Modal,TouchableOpacity,Pressable,TextInput } from 'react-native'
import React,{ useState } from 'react'
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';


const Pension = () => {

  const[showModal,setShowModal]=useState(false)
  const navigation = useNavigation();

  return (
    <View style={Style.container}>
      <View style={Style.view1}>
      <Text style={Style.txt1}>Pension</Text>
      </View>
<View style={Style.placeholder1view}>
<Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisiblle(!showModal);
            }}>
            <Pressable
              onPress={() => {
             setShowModal(false)

              }}
              style={Style.modalviewstyle}>
              <View style={Style.innercontainer}>
                <Text style={Style.modaltext1}>
                  Help
                </Text>
                <Text style={Style.modaltext2}>Pension Benefit:</Text>
                <Text style={Style.modaltext3}>Pension received from a former employer is fully exempt from tax.However if you're still working for your previous employer or any of its associate company,then it is not exempt and must be reported under Salary income.</Text>
                <Text style={Style.modaltext3}>Further,in case you're receiving pension from multiple employers then enter the higher pensions amount as pension income and report the remaining pension income under salary income.</Text>
              </View>
            </Pressable>
          </Modal>
          <TextInput style={Style.placeholder1} keyboardType='numeric' placeholder='Enter your Profit Amount'
            placeholderTextColor={"grey"}
          />
          <TouchableOpacity style={{ left: "30%" }} onPress={() => setShowModal(true)}>
            <MaterialCommunityIcons name='information' color={'red'} size={20} />
          </TouchableOpacity>
        </View>
        <Button
          onPressBack={() => navigation.navigate('Income')}
        />
    </View>
  )
}

export default Pension;
