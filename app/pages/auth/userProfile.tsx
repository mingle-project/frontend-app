import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import UserProfileHeader from '../../shared/components/header/userProfileHeader';

const UserProfile = () => {
  return (
    <SafeAreaView>
        <UserProfileHeader/>
        <View>
            <Text>회원정보페이지</Text>
        </View>
    </SafeAreaView>
  );
};

export default UserProfile;
