import styled from 'styled-components/native';

export const SafeAreaView = styled.View`
  flex: 1;
  background-color: #150F69;
`;

export const ContentView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -200%;
  gap: 3%;
`;

export const TextTitle = styled.Text`
  background-color: white;
  width: 280px;
  padding: 15px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  shadow-color: #ffffff;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
`;

export const TextContent = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: black;
`;