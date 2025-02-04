import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import userProfile from './pages/auth/userProfile';
import introduction from './pages/introduction/introduction';
import * as A from "./styles/AppStyles";

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <A.SafeAreaView>
      <A.View>
        <A.Text>App.tsx 페이지</A.Text>
        <A.Button onPress={() => navigation.navigate('userProfile')}>
          <A.ButtonText>회원 정보 페이지로 이동</A.ButtonText>
        </A.Button>
        {/* <A.Button onPress={() => navigation.navigate('introduction')}>
          <A.ButtonText>프로젝트 소개 페이지로 이동</A.ButtonText>
        </A.Button> */}
      </A.View>
    </A.SafeAreaView>
  );
};

const App = () => {
  return (
    <A.SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: '메인 화면' }}
          />
          <Stack.Screen
            name="userProfile"
            component={userProfile}
            options={{ title: '회원 정보 페이지' }}
          />
          <Stack.Screen
            name="introduction"
            component={introduction}
            options={{ title: '프로젝트 소개 페이지' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </A.SafeAreaView>
  );
};


export default App;
