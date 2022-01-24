import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/image/bg_login.jpeg')}
      // resizeMode="contain"
      // resizeMethod="scale"
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 30,
        }}>
        <Text style={{color: 'white', fontSize: 25}}>Everyday new</Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay-Bold',
            color: 'white',
            fontSize: 35,
          }}>
          Technology Blog
        </Text>
      </View>
      <View style={{flex: 1, marginTop: 50}}>
        <TextInput placeholder="Tài khoản" style={styles.input} />
        <TextInput placeholder="Mật khẩu" style={styles.input} />
        <View>
          <TouchableOpacity
            style={{position: 'absolute', right: 27, marginTop: 5}}>
            <Text style={{color: '#6978ff', fontSize: 12}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            marginHorizontal: 25,
            borderRadius: 20,
            backgroundColor: '#50c9de',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
      <View style={{flex: 0.2}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#50c9de'}}>Chưa có tài khoản?</Text>
          <TouchableOpacity>
            <Text style={{color: '#6078ff'}}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 25,
    borderRadius: 10,
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    paddingLeft: 20,
  },
});
