import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Color} from '../../assets/color/color';
import useHomeStore from './useHomeStore';
const Home = ({navigation}) => {
 
  const testZustand = useHomeStore(state => state.testZustand);
  const setTestZustand = useHomeStore(state => state.setTestZutand);
  useEffect(() => {
    console.log(testZustand, 'test zustand from home');
  }, []);


  const goToPostBlog = () => {
    navigation.navigate('PostBlog');
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnLogOut}>
          <Text style={styles.txtLogOut}>Đăng xuất</Text>
        </TouchableOpacity>
        <Text style={styles.txtHome}>Trang chủ</Text>
        <TouchableOpacity
          style={styles.btnPost}
          onPress={() => {
            goToPostBlog();
          }}>
          <Text style={styles.txtPost}>Đăng bài</Text>
        </TouchableOpacity>
      </View>
      {/* <Image source={{uri: image}} style={{height: 400, width: 300}} /> */}
      <Text>Home</Text>
      <TouchableOpacity
        style={{height: 30, width: 100, borderWidth: 1}}
        onPress={() => {
          // takePhotoFromCamera();
          setTestZustand(testZustand + 1);
        }}>
        <Text>take photo from camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 96,
    backgroundColor: Color.mainColor,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 22,
  },
  btnLogOut: {
    marginLeft: 10,
  },
  btnPost: {
    marginRight: 10,
  },
  txtLogOut: {
    color: 'white',
  },
  txtHome: {fontSize: 25, color: 'white'},
  txtPost: {
    color: 'white',
  },
});
