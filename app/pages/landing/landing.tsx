import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import * as L from '../../styles/Landing/landingStyles.ts';
import LogoImg from '../../assets/images/minilogo.svg'; // svg 파일 import
import LoginBtn from '../../assets/images/loginbtn.svg';
import LogoLetterImg from '../../assets/images/mingleletterlogo.svg';
import Globe from '../../assets/images/globe2.svg';
import Ministarpink from '../../assets/images/ministarpink.png';
import Ministaryellow from '../../assets/images/ministaryellow.png';
import Ministarneon from '../../assets/images/ministary_green.png';
import Ministarred from '../../assets/images/ministarred.png';
import Ministargreen from '../../assets/images/ministargreen.png';
import Ministarblue from '../../assets/images/ministarblue.png';
import {Image} from 'react-native-svg';

const Landing = ({navigation}) => {
  const handleSignUpClick = () => {
    // 회원가입 클릭 시 수행할 동작을 작성합니
    navigation.navigate('SignUp');
  };
  const handleLoginClick = () => {
    // 회원가입 클릭 시 수행할 동작을 작성합니
    navigation.navigate('Login');
  };
  return (
    <L.SafeAreaView>
      <L.View>
        <L.Logo>
          <LogoImg height={124} width={124} />
          <LogoLetterImg height={70} width={230} style={{marginLeft: 5}} />
        </L.Logo>
        <L.Login>
          <LoginBtn height={45} width={175} onPress={handleLoginClick} />
          <L.IsItFirst>
            밍글이 처음이신가요?{' '}
            <L.TouchableOpacity onPress={handleSignUpClick}>
              회원가입
            </L.TouchableOpacity>
          </L.IsItFirst>
        </L.Login>

        <L.Star>
          <L.Image1 source={Ministarpink} />
          <L.Image2 source={Ministaryellow} />
          <L.Image3 source={Ministarneon} />
          <L.Image4 source={Ministarred} />
          <L.Image5 source={Ministargreen} />
          <L.Image6 source={Ministarblue} />
        </L.Star>

        <Globe height={327} width={490} />
      </L.View>
    </L.SafeAreaView>
  );
};
export default Landing;
