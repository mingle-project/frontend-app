import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Earth from  '../../../assets/images/earth.png';
import MiniStarRed from '../../../assets/images/ministarred.png';
import * as IF from '../../../styles/components/introductionFooterStyles';

const IntroductionFooter = () => {

    return(
        <IF.SafeAreaView>
            <IF.MiniStarRed source={MiniStarRed}/>
            <IF.Earth source={Earth}/>
        </IF.SafeAreaView>
    );
};

export default IntroductionFooter;