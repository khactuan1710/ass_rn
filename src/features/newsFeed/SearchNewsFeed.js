import React, {useEffect, useRef} from 'react';
import {Color} from '../../assets/color/color';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SearchNewsFeed = ({navigation}) => {
  const focusSearch = useRef();
  useEffect(() => {
    focusSearch.current.focus();
  }, []);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          //   style={styles.btnLogOut}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/image/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <View style={styles.btnLogOut} onPress={() => {}}>
          <Image
            source={require('../../assets/image/ic_search.png')}
            style={{width: 20, height: 20}}
          />
          <TextInput
            ref={focusSearch}
            style={{marginLeft: 5}}
            placeholder="Tìm kiếm bài viết"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchNewsFeed;

const styles = StyleSheet.create({
  header: {
    height: 96,
    backgroundColor: Color.mainColor,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    paddingHorizontal: 30,
  },
  btnLogOut: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    marginLeft: 20,
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
