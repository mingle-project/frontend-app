import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import * as I from '../../styles/introduction/introductionStyles';
import IntroductionHeader from '../../shared/components/header/introductionHeader';
import MingleLogoWhite1 from '../../assets/images/minglelogowhite1.png';
import Star1 from '../../assets/images/stardust0.png';
import Star2 from '../../assets/images/stardust1.png';

const Introduction = () => {

    return(
        <I.SafeAreaView>
            <IntroductionHeader/>
            <I.ContentView>
                <I.Star1 source={Star1}/>
                <I.Star2 source={Star2}/>
                <I.MingleLogoWhite1 source={MingleLogoWhite1}/>
                <I.Text>
                    <I.Text1>우주 먼지들이 모여 {'\n'}</I.Text1>
                    <I.Text2>하나의 별을 완성한다</I.Text2>
                </I.Text>
            </I.ContentView>
        </I.SafeAreaView>
    );
};

export default Introduction;