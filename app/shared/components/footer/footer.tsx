import React from 'react';
import * as H from '../../../styles/Home/homeStyles';
import QuestionImg from '../../../assets/images/question.png';
import BookImg from '../../../assets/images/book.png';
import HomeImg from '../../../assets/images/Home.png';

const Footer = ({navigation}) => {
  const handleQuestionBtn = () => {
    // 회원가입 클릭 시 수행할 동작을 작성합니
    console.log('버튼 눌림');
  };
  const handleHomeBtn = () => {
    // 회원가입 클릭 시 수행할 동작을 작성합니
    navigation.navigate('Home');
  };
  const handleBookBtn = () => {
    // 회원가입 클릭 시 수행할 동작을 작성합니
    console.log('버튼 눌림');
  };
  return (
    <H.Footer>
      <H.Btn source={QuestionImg} onPress={handleQuestionBtn} />
      <H.Btn source={HomeImg} onPress={handleHomeBtn} />
      <H.Btn source={BookImg} onPress={handleBookBtn} />
    </H.Footer>
  );
};

export default Footer;
