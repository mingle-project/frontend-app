import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import * as I2 from '../../styles/introduction/introduction2Styles';
import IntroductionHeader from '../../shared/components/header/introductionHeader';
import IntroductionFooter from '../../shared/components/footer/introductionFooter';

const Introduction2 = () => {

    return(
        <I2.SafeAreaView>
            <IntroductionHeader/>
            <I2.ContentView>
                <I2.TextTitle>
                    <I2.TextContent>그룹 활동을 위한 맞춤 설정</I2.TextContent>
                </I2.TextTitle>
                <I2.TextTitle>
                    <I2.TextContent>친구들과의 관계를{'\n'}</I2.TextContent>
                    <I2.TextContent>더욱 깊게 만들어주는 질문과 응답</I2.TextContent>
                </I2.TextTitle>
                <I2.TextTitle>
                    <I2.TextContent>그룹 활동으로{'\n'}</I2.TextContent>
                    <I2.TextContent>별을 성장시키고 꾸미는 즐거움</I2.TextContent>
                </I2.TextTitle>
                <I2.TextTitle>
                    <I2.TextContent>다양한 별과 꾸미기 아이템을{'\n'}</I2.TextContent>
                    <I2.TextContent>수집하고 기록</I2.TextContent>
                </I2.TextTitle>
            </I2.ContentView>
            <IntroductionFooter/>
        </I2.SafeAreaView>
    );
};

export default Introduction2;