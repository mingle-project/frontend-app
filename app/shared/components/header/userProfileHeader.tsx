import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import Arrow from  '../../../assets/images/arrow.png';
import Set from '../../../assets/images/set.png';
import * as UPH from '../../../styles/components/userProfileHeaderStyles';


const UserProfileHeader = () => {
  return (
    <UPH.SafeAreaView>
      <UPH.View>
        <UPH.Text>회원정보페이지</UPH.Text>
        <UPH.Image source={Arrow} />
        <UPH.Image source={Set}/>
      </UPH.View>
    </UPH.SafeAreaView>
  );
};

export default UserProfileHeader;
