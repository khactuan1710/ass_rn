import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Color} from '../../assets/color/color';
const PostBlog = ({navigation}) => {
  const [image, setImage] = useState();
  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/image/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.txtHome}>Đăng bài</Text>
        <View />
      </View>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <TextInput
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            width: '100%',
            minHeight: 50,
            paddingLeft: 15,
            justifyContent: 'center',
          }}
          placeholder="Nhập nội dung bài đăng"
          numberOfLines={20}
          multiline={true}
          autoCorrect={false}
        />
        <Image
          style={{
            height: 500,
            width: '100%',
            paddingHorizontal: 10,
            marginTop: 10,
          }}
          source={{uri: image}}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          takePhotoFromLibrary();
        }}
        style={{
          height: 40,
          borderWidth: 1,
          width: '100%',
          position: 'absolute',
          borderColor: '#c4c4c4',
          bottom: 90,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/image/image.png')}
            style={{height: 35, width: 35, marginLeft: 10}}
          />
          <Text style={{marginLeft: 5}}>Ảnh/video</Text>
        </View>
        <Image
          source={require('../../assets/image/backRight.png')}
          style={{height: 20, width: 20, marginRight: 5}}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 90,
          backgroundColor: '#c4c4c4',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 45,
            backgroundColor: Color.mainColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          <Text style={{color: 'white'}}>Đăng bài</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostBlog;

const styles = StyleSheet.create({
  header: {
    height: 96,
    backgroundColor: Color.mainColor,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btnPost: {},
  txtLogOut: {
    color: 'white',
  },
  txtHome: {fontSize: 25, color: 'white', alignSelf: 'center'},
  txtPost: {
    color: 'white',
  },
});
