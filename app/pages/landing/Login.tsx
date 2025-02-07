import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import * as L from '../../styles/Landing/landingStyles.ts';
import LogoImg from '../../assets/images/minilogo.svg'; // svg 파일 import
import LoginBtn from '../../assets/images/loginbtn.svg';
import LogoLetterImg from '../../assets/images/mingleletterlogo.svg'; // 로고 이미지
import UserId from '../../assets/images/mail.png'; // 아이디 아이콘
import UserPassword from '../../assets/images/password.png'; // 비밀번호 아이콘
import UserNickName from '../../assets/images/human.png'; // 닉네임 아이콘
import Globe from '../../assets/images/globe2.svg';
import Ministarpink from '../../assets/images/ministarpink.png';
import Ministaryellow from '../../assets/images/ministaryellow.png';
import Ministarneon from '../../assets/images/ministary_green.png';
import Ministarred from '../../assets/images/ministarred.png';
import Ministargreen from '../../assets/images/ministargreen.png';
import Ministarblue from '../../assets/images/ministarblue.png';

const Login = ({navigation}) => {
  const [username, setUsername] = useState(''); // 입력된 아이디
  const [password, setPassword] = useState(''); // 입력된 비밀번호

  // 로그인 클릭 시 수행할 동작
  const handleLoginClick = () => {
    console.log('로그인 버튼 클릭!');
    // 로그인 페이지로 이동 처리 등을 여기에 추가할 수 있습니다.
  };

  // 회원가입 클릭 시 수행할 동작
  const handleSignUpClick = () => {
    navigation.navigate('SignUp');
    // 회원가입 처리 로직을 여기에 추가할 수 있습니다.
  };

  return (
    <L.SafeAreaView>
      <L.View>
        <L.Logo>
          <LogoImg height={124} width={124} />
          <LogoLetterImg height={70} width={230} style={{marginLeft: 5}} />
        </L.Logo>

        <L.Login>
          <L.FormContainer>
            <L.InputContainer>
              <TextInput
                style={L.Input}
                placeholder="아이디"
                value={username}
                onChangeText={setUsername} // 아이디 상태 업데이트
              />
            </L.InputContainer>

            <L.InputContainer>
              <TextInput
                style={L.Input}
                placeholder="비밀번호"
                value={password}
                onChangeText={setPassword} // 비밀번호 상태 업데이트
                secureTextEntry // 비밀번호 필드로 처리
              />
            </L.InputContainer>

            <TouchableOpacity onPress={handleLoginClick}>
              <LoginBtn height={45} width={175} />
            </TouchableOpacity>
          </L.FormContainer>

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

export default Login;
