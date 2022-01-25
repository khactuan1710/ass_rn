import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useHomeStore from '../home/useHomeStore';

const Home = ({navigation}) => {
  const testZustand = useHomeStore(state => state.testZustand);
  useEffect(() => {
    console.log(testZustand, 'test zustand  from login');
  }, []);
  return (
    <ImageBackground
      source={require('../../assets/image/bg_login.jpeg')}
      // resizeMode="contain"
      // resizeMethod="scale"
      style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={styles.text1}>Everyday new</Text>
        <Text style={styles.text2}>Technology Blog</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput placeholder="Tài khoản" style={styles.input} />
        <TextInput placeholder="Mật khẩu" style={styles.input} />
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log(testZustand, 'test zustand  from login');
            }}
            style={styles.forgotPass}>
            <Text style={styles.textForgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsFeed')}
          style={styles.btnLogin}>
          <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
      <View style={{flex: 0.2}}>
        <View style={styles.ViewNoAcc}>
          <Text style={styles.txtNoAcc}>Chưa có tài khoản?</Text>
          <TouchableOpacity>
            <Text style={styles.txtSignIn}>Đăng ký</Text>
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
  title: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  text1: {color: 'white', fontSize: 25},
  text2: {
    fontFamily: 'PlayfairDisplay-Bold',
    color: 'white',
    fontSize: 35,
  },
  viewInput: {flex: 1, marginTop: 50},
  forgotPass: {position: 'absolute', right: 27, marginTop: 5},
  textForgot: {color: '#6978ff', fontSize: 12},
  btnLogin: {
    marginHorizontal: 25,
    borderRadius: 20,
    backgroundColor: '#50c9de',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textLogin: {color: 'white', fontSize: 16},
  ViewNoAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtNoAcc: {color: '#50c9de'},
  txtSignIn: {color: '#6078ff'},
});
