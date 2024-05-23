import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Header from '../../ImportHeader/Header';
import FontFamily from '../../../assets/customFonts/customFonts';
import Button from '../../Components/Index';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASSET_URL, BASE_URL } from '../../../CommonUrl/CommonUrls';
import axios from 'axios';
import AnimatedLottieView from 'lottie-react-native';
import Style2 from './Style2';
import FastImage from 'react-native-fast-image';

const GstRegisterationFormUpload = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState(false)
  const [imagesList, setImageList] = useState([
    {
      id: '0',
      name: 'Business Letterhead',
      img: null,
    },
    {
      id: '1',
      name: 'Bank Maintainance certificate',
      img: null,
    },
    {
      id: '2',
      name: 'Electricity/Gas/Telephone',
      name2: 'Bill of business',
      img: null,
    },
    {
      id: '3',
      name: 'Picture of business premises',
      img: null,
    },
    {
      id: '4',
      name: 'Picture of Machinery',
      name2: '(for Manufactures only)',
      img: null,
    },
    {
      id: '5',
      name: 'Picture of electricity meter',
      img: null,
    },
  ]);

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  //getting values from variables from gstscreen
  const businessname = useSelector((state) => state.salary.businessname);
  const businessType = useSelector((state) => state.salary.businessType);
  const businessDate = useSelector((state) => state.salary.businessDate);
  const nature = useSelector((state) => state.salary.nature);
  const businessDescription = useSelector((state) => state.salary.businessDescription);
  const number = useSelector((state) => state.salary.number);
  const gstId = useSelector((state) => state.salary.gstId) || 0;

  // const openImagePicker = async (itemId) => {
  //   try {
  //     const result = await ImagePicker.openPicker({
  //       width: 300,
  //       height: 400,
  //       cropping: true,
  //     });
  //     if (result.path) {
  //       const updatedList = imagesList.map((item) => {
  //         if (item.id === itemId) {
  //           return {
  //             ...item,
  //             img: result.path,
  //           };
  //         }
  //         return item;
  //       });
  //       const FinalList = updatedList.map((item) => {
  //         if (item.img && item.img.charAt(0) === '/') {
  //           item.img = ASSET_URL + item.img
  //         } else {
  //         }
  //         return item;
  //       });
  //       setImageList(FinalList);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const deleteImage = (itemId) => {
  //   const updatedList = imagesList.map((item) => {
  //     if (item.id === itemId) {
  //       return {
  //         ...item,
  //         img: null,
  //       };
  //     }
  //     return item;
  //   });

  //   setImageList(updatedList);
  // };

  const openImagePicker = async (itemId) => {
    try {
      const result = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      if (result.path) {
        const updatedList = imagesList.map((item) =>
          item.id === itemId ? { ...item, img: result.path } : item
        );
        setImageList(updatedList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = (itemId) => {
    const updatedList = imagesList.map((item) =>
      item.id === itemId ? { ...item, img: null } : item
    );
    setImageList(updatedList);
  };

  //post api
  const postdata = async (formData) => {
    console.log('formData', formData._parts);
    const nonNullImages = formData._parts.filter(([name, value]) => {
      if (value.uri === null) {
        return false;
      }
      return true;
    });
    const formDataToSend = new FormData();
    nonNullImages.forEach(([name, value]) => {
      formDataToSend.append(name, value);
    });
    setLoading(true)
    try {
      axios({
        url: BASE_URL + `users/${userId}/gst-registrations`,
        method: 'POST',
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res.data', res.data);
        setLoading(false)
        setGif(true)

        setTimeout(() => {
          setGif(false);
          navigation.navigate('Payment');
        }, 3000);
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  //formData
  const Submit = async () => {
    const formData = new FormData();
    formData.append('gst[business_name]', businessname);
    formData.append('gst[gsttype_id]', businessType);
    formData.append('gst[start_date]', businessDate);
    formData.append('gst[gstnature_id]', nature);
    formData.append('gst[description]', businessDescription);
    formData.append('gst[consumer_no]', number);

    const imageFields = [
      'maintenance_certificate',
      'association_certificate',
      'form_a_certificate',
      'partnership_certificate',
      'authorization_certificate',
      'registration_certificate',
    ];
    imageFields.map((field, index) => {
      const image = imagesList[index];
      if (image && image.img) {
        formData.append(field, {
          uri: image.img,
          type: 'image/jpeg',
          name: `${field}_${index}.jpg`,
        });
      }
      return null;
    });
    postdata(formData);
  };

  const Updatedata = async (formData) => {
    console.log('formData', formData._parts);
    const nonNullImages = formData._parts.filter(([name, value]) => {
      if (value.uri === null) {
        return false;
      }
      return true;
    });
    const formDataToSend = new FormData();
    nonNullImages.forEach(([name, value]) => {
      formDataToSend.append(name, value);
    });
    setLoading(true)
    try {
      axios({
        url: BASE_URL + `users/${userId}/gst-registrations/${Id}`,
        method: 'POST',
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res.data', res.data);
        setLoading(false)
        setGif(true)
        setTimeout(() => {
          setGif(false);
          navigation.navigate('Payment');
        }, 3000);
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  const updatePost = async () => {
    const formData = new FormData();
    formData.append('_method', 'PATCH');
    formData.append('gst[business_name]', businessname);
    formData.append('gst[gsttype_id]', businessType);
    formData.append('gst[start_date]', businessDate);
    formData.append('gst[gstnature_id]', nature);
    formData.append('gst[description]', businessDescription);
    formData.append('gst[consumer_no]', number);

    const imageFields = [
      'maintenance_certificate',
      'association_certificate',
      'form_a_certificate',
      'partnership_certificate',
      'authorization_certificate',
      'registration_certificate',
    ];
    imageFields.map((field, index) => {
      const image = imagesList[index];
      if (image && image.img) {
        formData.append(field, {
          uri: image.img,
          type: 'image/jpeg',
          name: `${field}_${index}.jpg`,
        });
      }
      return null;
    });
    Updatedata(formData);
  };

  const gettingAsyncValue = async () => {
    let userID = await AsyncStorage.getItem('USER ID');
    if (userID !== null) {
      const id = userID;
      setUserId(id)
      fetchData(id)
    }
  };

  //getting gstid 
  const Id = useSelector((state) => state.salary.Id);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL + `users/${id}/gst-registrations/${gstId}`);
      const responseData = res.data.gstRegistrations;
      if (responseData) {
        const imageProperties = [
          'maintenance_certificate',
          'association_certificate',
          'form_a_certificate',
          'partnership_certificate',
          'authorization_certificate',
          'registration_certificate',
        ];

        setImageList((prevImagesList) => {
          return imageProperties.map((property, index) => {
            return {
              ...prevImagesList[index],
              img: responseData[property] ? ASSET_URL + responseData[property] : null,
            };
          });
        });

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Errorrrrr', error);
    }
  };

  return (
    <View style={Style.mainView1}>
      <View style={Style.innerView}>
            <Header />
          </View>
      {gif ?
        (
          <View style={Style.gifcontainer}>
            <View style={{ width: responsiveScreenWidth(40), height: responsiveScreenHeight(25) }}>
              <FastImage
                style={Style.gif}
                source={require('../../../../src/assets/pictures/shield.gif')}
              />
            </View>
          </View>
        )
        :
        (
          <><View style={{ backgroundColor: "red", borderBottomLeftRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ margin: "5%" }}>
                <Text style={{ color: "white", fontFamily: FontFamily.MONTSERRAT_Medium, fontSize: responsiveScreenFontSize(2.5) }}>Gst Registration</Text>
                <Text style={{ color: "white", fontFamily: FontFamily.OpenSansRegular, fontSize: responsiveScreenFontSize(1.9) }}>Upload Following</Text>
                <Text style={{ color: "white", fontFamily: FontFamily.OpenSansRegular, fontSize: responsiveScreenFontSize(1.9) }}>Click on the upload icon to upload documents as per the</Text>
                <Text style={{ color: "white", fontFamily: FontFamily.OpenSansRegular, fontSize: responsiveScreenFontSize(1.9) }}>list mentioned</Text>
              </View>
            </View><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {loading ?
                (
                  <View style={Style2.loader}>
                    <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                  </View>
                )
                :
                (
                  <View style={{ backgroundColor: "white", }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      {imagesList.map((item) => (
                        <View key={item.id} style={Style2.itemContainer}>
                          <View style={{ marginLeft: responsiveScreenWidth(1), justifyContent: "center", marginTop: responsiveScreenHeight(1) }}>
                            <Text style={Style2.itemName}>{item.name}</Text>
                            <Text style={Style2.itemName}>{item.name2}</Text>
                          </View>
                          {item.img ? (
                            <View style={Style2.imageContainer}>
                              <View style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(6) }}>
                                <Image source={{ uri: item.img }} style={Style2.image} />
                              </View>
                              <TouchableOpacity onPress={() => deleteImage(item.id)} style={Style2.deleteIconContainer}>
                                <Image source={require('../../../../src/assets/pictures/image71.png')} style={Style2.deleteIcon} />
                              </TouchableOpacity>
                            </View>
                          )
                            :
                            (
                              <TouchableOpacity onPress={() => openImagePicker(item.id)} style={Style2.imagePicker}>
                                <Image source={require('../../../../src/assets/pictures/photo.png')} style={Style2.icon} />
                              </TouchableOpacity>
                            )}
                        </View>
                      ))}
                    </View>
                  </View>
                )}
            </ScrollView><Button
              onPressBack={() => navigation.goBack()}
              onPressForward={() => {
                if (gstId === 0) {
                  Submit();
                } else {
                  updatePost();
                }
              }} 
              /></>
        )}
    </View>
  )
}

export default GstRegisterationFormUpload 
