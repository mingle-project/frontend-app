import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 12px 30px;
  background-color: gray;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
