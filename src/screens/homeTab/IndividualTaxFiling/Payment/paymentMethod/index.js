import { View, Text, Pressable, TextInput, Modal, TouchableOpacity, Image, PermissionsAndroid, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Style from './style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';
import Button6 from '../../../../Components/index6';
import { useNavigation } from '@react-navigation/native';
import FontFamily from '../../../../../assets/customFonts/customFonts';

const PaymentMethod = () => {
    const navigation = useNavigation();
    const [changeIcon3, setChangeIcon3] = useState(true)
    const [showDisplay2, setShowDisplay2] = useState(true)
    // const [photos, setAddPhotos] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [accouttitle, setAccoutTitle] = useState('')
    const [accoutnumber, setAccoutNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [numImagesSelected, setNumImagesSelected] = useState(0)
    const [images, setImages] = useState([])

    const postProof=()=>{
        setTimeout(()=>{
            navigation.navigate("homeTab")
        },1000)
    }
    //cgetting camnera permission from user
    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Access to photos',
                        message: 'App would like to access your Gallery',
                        buttonNegative: 'Deny',
                        buttonPositive: 'Allow',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return granted;
                } else {
                    console.log('Camera permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            return true;
        }
    }
    //selecting image from phone gallery 
    const GalleryImages = async () => {

        let files = 2


        if (numImagesSelected >= 2) {
            ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
            return;
        }
        let isStoragePermitted = await requestExternalWritePermission();
        if (isStoragePermitted) {
            ImagePicker.openPicker({
                multiple: true,
            })
                .then((selectedImages) => {
                    if (selectedImages.length > 2) {
                        ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
                    }
                    console.log('hhhhhh', selectedImages.length)
                    const newImages = [...images, ...selectedImages];
                    setImages(newImages);
                    setNumImagesSelected(newImages.length);

                })
                .catch((error) => console.log(error));
        }
    };
    //take image from camera
    const openCamera = async () => {
        console.log('hdhdhdhdhdh')
        if (numImagesSelected >= 2) {
            ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
            return;
        }
        let isStoragePermitted = await requestExternalWritePermission();
        if (isStoragePermitted) {
            ImagePicker.openCamera({
                multiple: true,
                // mediaType: 'photo',
                // showsSelectedCount: true,
            }).then((selectedImages) => {
                if (numImagesSelected >= 2) {
                    ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
                    return;
                }
                const newImages = [...images, selectedImages];
                setImages(newImages);
                setNumImagesSelected(newImages.length);

            }).catch((error) => console.log(error));
        }
    }
      //method for deleting image from state
  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setNumImagesSelected(numImagesSelected - 1);
  };
    return (
        <View style={Style.container}>
            <ScrollView>
                <View>
                    <Text style={Style.txt5}>Payment method</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Pressable style={{ backgroundColor: "pink", justifyContent: "center", width: responsiveScreenWidth(90), height: responsiveScreenHeight(8), borderRadius: 10 }}
                        onPress={() =>
                            [setChangeIcon3(!changeIcon3),
                            setShowDisplay2(!showDisplay2)]
                        }>
                        <View style={{height: responsiveScreenHeight(6), flexDirection: "row",alignItems:'center',paddingHorizontal:14}}>
                            {changeIcon3 ? (<MaterialCommunityIcons name='circle-slice-8' size={30} color={'red'} />) : (<MaterialCommunityIcons name='circle-outline' size={30} color={'red'}  />)}
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:6}}>
                            <Text style={{ color: "black" }}>{"OnlineBank "}</Text>
                            <Text style={{ color: "black"}}>{" Transfer"} </Text>
                            <Text style={{ color: "black"}}>(IBFT) </Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                {showDisplay2 === true &&
                    (
                        <View style={{ alignItems: "center", marginTop: "5%" }}>
                            <View style={{ width: responsiveScreenWidth(90) }}>
                                <Text style={{ color: "grey" }}>Transfer our fee in below bank account,and upload</Text>
                                <Text style={{ color: "grey" }}>the proof of payment</Text>

                            </View>
                            <View style={{ width: responsiveScreenWidth(90), marginTop: "5%" }}>
                                <Text style={{ color: "grey" }}>Account Title</Text>
                                <TextInput style={Style.placeholder1}
                                    placeholderTextColor={"black"}
                                    placeholder='Easy Filer(SMC PVT)LTD'
                                />
                            </View>
                            <View style={{ width: responsiveScreenWidth(90), marginTop: "5%" }}>
                                <Text style={{ color: "grey" }}>Bank Account Number</Text>
                                <TextInput style={Style.placeholder1}
                                    placeholderTextColor={"black"}
                                    placeholder='02991008808265'
                                />
                            </View>
                            <View style={{ width: responsiveScreenWidth(90), marginTop: "5%" }}>
                                <Text style={{ color: "grey" }}>Bank Name</Text>
                                <TextInput style={Style.placeholder1}
                                    placeholderTextColor={"black"}
                                    placeholder='Bank Alfalah'
                                />
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2), justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ backgroundColor: "steelblue", width: responsiveScreenWidth(80), height: responsiveScreenHeight(5), justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: "row" }}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={{ color: "white", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>
                                        Proof of Payment
                                    </Text>
                                    <View style={{ width: responsiveScreenWidth(7), height: responsiveScreenHeight(4), marginLeft: scale(4) }}
                                    >
                                        <Image source={require('../../../../../../src/assets/pictures/camera.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={Style.imagesmainview}>
                                <View style={Style.imageview2}>
                                    {images.map((image, index) => {
                                        return (
                                            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: "5%",borderRadius:10 }}>
                                                <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => deleteImage()}>
                                                    <Entypo name='circle-with-cross' size={22} color={'red'} />
                                                </TouchableOpacity>
                                                <View style={{ width: responsiveScreenWidth(30), height: responsiveScreenHeight(16) }}>
                                                    <Image key={index} source={{ uri: image.path }} style={Style.image} />
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                    )
                }
                <Modal
                    visible={modalVisible}
                    animationType='fade'
                    transparent>
                    <View style={Style.modalView}>
                        <View style={Style.modalViewInside}>
                            <View>
                                <TouchableOpacity style={Style.closeBtn}
                                    onPress={() => setModalVisible(false)}>
                                    <Text style={Style.closetxt}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Style.txtView}>
                                <Text style={Style.textstyle}>
                                    Please share the proof of your payment,</Text>
                                <Text style={Style.textstyle}>
                                    select your desired option.</Text>
                            </View>
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                <View style={{ flexDirection: "row", width: responsiveScreenWidth(50), justifyContent: "space-around" }}>
                                    <TouchableOpacity style={{ width: responsiveScreenWidth(15), height: responsiveScreenHeight(10) }}
                                        onPress={() => GalleryImages()}
                                    >
                                        <Image source={require('../../../../../../src/assets/pictures/imagefolder.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: responsiveScreenWidth(15), height: responsiveScreenHeight(10) }}
                                        onPress={() => openCamera()}>
                                        <Image source={require('../../../../../../src/assets/pictures/camera.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <Button6
                onPressBack={() => navigation.navigate('Payment')}
                 onPressForward={postProof}
            />
        </View>
    )
}
export default PaymentMethod;