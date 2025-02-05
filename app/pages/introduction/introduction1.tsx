import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import * as I1 from '../../styles/introduction/introduction1Styles';
import IntroductionHeader from '../../shared/components/header/introductionHeader';
import IntroductionFooter from '../../shared/components/footer/introductionFooter';

const Introduction1 = () => {

    return(
        <I1.SafeAreaView>
            <IntroductionHeader/>
            <I1.ContentView>
                <I1.TextTitle>
                    <I1.TextContent>여러분과 함께할{'\n'}</I1.TextContent>
                    <I1.TextContent>밍글은</I1.TextContent>
                </I1.TextTitle>
                <I1.TextTitle>
                    <I1.TextContent>서로의 소중함을 함께 나누며{'\n'}</I1.TextContent>
                    <I1.TextContent>더욱 깊은 관계를{'\n'}</I1.TextContent>
                    <I1.TextContent>만들어가기 위해{'\n'}</I1.TextContent>
                    <I1.TextContent>탄생했습니다.</I1.TextContent>
                </I1.TextTitle>
                <I1.TextTitle>
                    <I1.TextContent>즐거운 추억과{'\n'}</I1.TextContent>
                    <I1.TextContent>소중한 기억 모두{'\n'}</I1.TextContent>
                    <I1.TextContent>이제 밍글에서 함께{'\n'}</I1.TextContent>
                    <I1.TextContent>보관하세요.</I1.TextContent>
                </I1.TextTitle>
            </I1.ContentView>
            <IntroductionFooter/>
        </I1.SafeAreaView>
    );
};

export default Introduction1;