import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../features/login/Login';
import Home from '../features/home/Home';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  function StackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
          gestureEnabled: false,
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawerStyles,
          sceneContainerStyle: styles.bgTransparent,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default Navigation;

const styles = StyleSheet.create({
  drawerStyles: {flex: 1, width: '70%', backgroundColor: 'transparent'},
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  disabledText: {
    color: 'rgba(0,0,0,0.5)',
  },
  enabledText: {
    color: '#000',
  },
  logoutText: {
    color: '#EE0033',
  },
  mx_12: {
    marginHorizontal: 12,
  },
  userInfoContainer: {
    alignItems: 'center',
    borderBottomColor: '#C8C8CA',
    borderBottomWidth: 0.4,
  },
  usernameText: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuItemButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    height: 52,
  },
  menuItemContainer: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginRight: 15,
    alignItems: 'center',
  },
});
