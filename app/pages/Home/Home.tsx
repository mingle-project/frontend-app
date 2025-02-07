import React from 'react';
import {View, Text} from 'react-native';
import * as H from '../../styles/Home/homeStyles.ts';
import Footer from '../../shared/components/footer/footer.tsx';

const Home = ({navigation}) => {
  return (
    <H.SafeAreaView>
      {/* Home 화면의 콘텐츠 */}
      <View>
        <Text>Home Screen</Text>
        {/* Footer 컴포넌트에 navigation 전달 */}
        <Footer navigation={navigation} />
      </View>
    </H.SafeAreaView>
  );
};

export default Home;
