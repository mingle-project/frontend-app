import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from  '../../../assets/images/arrow.png';
import Set from  '../../../assets/images/set.png';
import * as UPH from '../../../styles/components/userProfileHeaderStyles';


const UserProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <UPH.SafeAreaView>
      <UPH.View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <UPH.Image1 source={Arrow} />
        </TouchableOpacity>
        <UPH.Image2 source={Set}/>
      </UPH.View>
    </UPH.SafeAreaView>
  );
};

export default UserProfileHeader;
