import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import userProfile from './pages/auth/userProfile';
import Landing from './pages/landing/landing';
import * as A from './styles/AppStyles';
import SignUp from './pages/landing/SignUp';
import Login from './pages/landing/Login';
import Home from './pages/Home/Home';

const Stack = createStackNavigator();

const MainScreen = ({navigation}) => {
  return (
    <A.SafeAreaView>
      <A.View>
        <A.Text>App.tsx 페이지</A.Text>
        <A.Button onPress={() => navigation.navigate('userProfile')}>
          <A.ButtonText>회원 정보 페이지로 이동</A.ButtonText>
        </A.Button>
        <A.Button onPress={() => navigation.navigate('Landing')}>
          <A.ButtonText>랜딩</A.ButtonText>
        </A.Button>
        <A.Button onPress={() => navigation.navigate('Home')}>
          <A.ButtonText>홈</A.ButtonText>
        </A.Button>
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
            options={{title: '메인 화면'}}
          />
          <Stack.Screen
            name="userProfile"
            component={userProfile}
            options={{title: '회원 정보 페이지'}}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{title: '랜딩'}}
          />
          <Stack.Screen name="Home" component={Home} options={{title: '홈'}} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </A.SafeAreaView>
  );
};

export default App;
