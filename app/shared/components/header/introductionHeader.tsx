import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from  '../../../assets/images/arrow.png';
import MingleLogoWhite1 from '../../../assets/images/minglelogowhite1.png';
import * as IH from '../../../styles/components/introductionHeaderStyles';

const IntroductionHeader = () => {
    const navigation = useNavigation();

    return(
        <IH.SafeAreaView>
            <IH.View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IH.Image1 source={Arrow} />
                </TouchableOpacity>
                <IH.Logo source={MingleLogoWhite1}/>
            </IH.View>
        </IH.SafeAreaView>
    );
};

export default IntroductionHeader;