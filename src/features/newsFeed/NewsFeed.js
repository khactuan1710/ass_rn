import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Share,
} from 'react-native';
import {Color} from '../../assets/color/color';
import useNewsFeedStore from './useNewsFeedStore';
const FakeData = [
  {
    id: 1,
    fullname: 'User 1',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    content:
      'bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo',
    numberOfLike: 12,
    image:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  },
  {
    id: 2,
    fullname: 'User 2',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    content:
      'bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo bafi vietdfsd tgeo cong nghe nhuw nafo',
    numberOfLike: 1111,
    image: null,
  },
  {
    id: 3,
    fullname: 'User 3',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    content: 'bafi vietdfsd tgeo cong nghe nhuw nafo',
    numberOfLike: 11,
    image: 'https://www.w3schools.com/howto/img_forest.jpg',
  },
  {
    id: 4,
    fullname: 'User 4',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    content: 'bafi vietdfsd tgeo cong nghe nhuw nafo',
    numberOfLike: 23,
    image: null,
  },
  {
    id: 5,
    fullname: 'User 5',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    content: 'bafi vietdfsd tgeo cong nghe nhuw nafo',
    numberOfLike: 19,
    image:
      'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
  },
];
const NewsFeed = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building na ',
        image:
          'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'https://stackoverflow.com/questions/55492300/share-images-to-social-media-using-react-native',
    subject: 'Subject',
  };

  const {isLike, setIsLike} = useNewsFeedStore(state => state);
  const onSharePress = () => Share.share(shareOptions);

  const goToSearchNewsFeed = () => {
    navigation.navigate('SearchNewsFeed');
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => {
            goToSearchNewsFeed();
          }}>
          <Image
            source={require('../../assets/image/ic_search.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={{marginLeft: 5, color: '#c4c4c4'}}>
            {' '}
            {'Tìm kiếm bài viết theo tên tác giả'}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={FakeData}
          keyExtractor={item => item.id}
          renderItem={({item, idx}) => {
            return (
              <View
                style={{
                  minHeight: 40,
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    height: 6,
                    width: '110%',
                    backgroundColor: '#c4c4c4',
                    borderColor: '#c4c4c4',
                    position: 'absolute',
                    top: 0,
                    opacity: 0.7,
                  }}
                />
                <View style={{flexDirection: 'row', marginTop: 16}}>
                  <TouchableOpacity>
                    <Image
                      source={{uri: item.avatar}}
                      style={{height: 40, width: 40, borderRadius: 20}}
                    />
                  </TouchableOpacity>
                  <View style={{marginLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>{item.fullname}</Text>
                      <Text>{' đã đăng một bài viết mới'}</Text>
                    </View>
                    <Text style={{fontSize: 12}}>{'Hôm qua lúc 20:29'}</Text>
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Text>{item.content}</Text>
                </View>
                <View>
                  {item.image !== null ? (
                    <Image
                      source={{uri: item.image}}
                      style={{width: '100%', height: 300, marginTop: 10}}
                    />
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    borderTopColor: '#c4c4c4',
                    marginTop: 10,
                    borderTopWidth: 1,
                    justifyContent: 'space-between',
                    height: 40,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsLike(!isLike);
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginLeft: 15,
                    }}>
                    {isLike ? (
                      <Image
                        source={require('../../assets/image/liked.png')}
                        style={{height: 18, width: 18}}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/image/like.png')}
                        style={{height: 18, width: 18}}
                      />
                    )}
                    <Text
                      style={{
                        color: isLike ? 'blue' : '#9c9c9c',
                        marginLeft: 5,
                      }}>
                      Thích
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={require('../../assets/image/comment.png')}
                      style={{height: 18, width: 18}}
                    />
                    <Text style={{color: '#9c9c9c', marginLeft: 5}}>
                      Bình luận
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onSharePress();
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginRight: 15,
                    }}>
                    <Image
                      source={require('../../assets/image/share.png')}
                      style={{height: 18, width: 18}}
                    />
                    <Text style={{color: '#9c9c9c', marginLeft: 5}}>
                      Chia sẻ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

//#9C9C9C
export default NewsFeed;
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
    width: '100%',
    height: 40,
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
