import { View, Text, TouchableOpacity, Switch, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import NewHeader from '../../NewHeader'
import Style from './Style'
import RBSheet from "react-native-raw-bottom-sheet";
import AccountCategoriesList from '../RbSheetlist/AccountCatList';

const ExpenceModule = () => {
    const refRBSheet = useRef();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
    return (
        <View style={Style.main}>
            <StatusBar backgroundColor={'#EB0414'} />
            <View style={Style.hdr}>
                <NewHeader />
            </View>
            <View>
                <View style={Style.textview}>
                    <Text style={Style.textcolor}>Categries</Text>
                </View>
                <View style={Style.Opacityw}>
                    <TouchableOpacity style={Style.btn}>
                        <Text style={Style.btnText}>
                            Categries
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={Style.textview}>
                    <Text style={Style.textcolor}>Accounts</Text>
                </View>
                <View style={Style.Opacityw}>
                    <TouchableOpacity style={Style.btn} onPress={() => refRBSheet.current.open()}>
                        <Text style={Style.btnText}>
                            Categories
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <View style={Style.textview}>
                        <Text style={Style.textcolor}>EasyFiler Home Widgets</Text>
                    </View>
                    <View style={Style.showExpenceView}>
                        <Text style={Style.btnText}>Show Expence</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#b00404' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={Style.textview}>
                    <Text style={Style.textcolor}>Home Widgets</Text>
                </View>

                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Show balance Only</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled1 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>
                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Make quick Transaction</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled2 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>
                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Show favourite category only</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled3 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                </View>
                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Show favourite categories & balance</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled4 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch4}
                        value={isEnabled4}
                    />
                </View>
                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Show balace and quick transaction</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled5 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch5}
                        value={isEnabled5}
                    />
                </View>

            </View>
            <View>
                <View style={Style.textview}>
                    <Text style={Style.textcolor}>Backup</Text>
                </View>

                <View style={Style.showExpenceView}>
                    <Text style={Style.btnText}>Enable Auto Backup</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled6 ? '#b00404' : '#f4f3f4'}
                        onValueChange={toggleSwitch6}
                        value={isEnabled6}
                    />
                </View>
            </View>
            <View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}>
                    <View style={Style.rbsheetheader}>
                        <Text style={Style.hdrTxt}>
                            Categories
                        </Text>
                    </View>
                    <AccountCategoriesList />
                </RBSheet>
            </View>
        </View>
    )
}

export default ExpenceModule