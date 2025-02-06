import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image1 = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: -80%;
`;

export const GroupName = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3%;
  margin-top: 2%;
`;

export const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-top: 5%;
`;

export const Image2 = styled.Image`
  width: 20px;
  height: 22px;
  margin-top: 125%;
  position: relative;
`;

export const Text2 = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-top: 5%;
`;

export const User = styled.View`
  margin-top: 8%;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: 50%;
`;

export const Name = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 3%;
`;

export const Nickname = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const NameTrue = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const Image3 = styled.Image`
  width: 16px;
  height: 18px;
  //margin-top: 2%;
  position: absolute;
  left: -15px; /* 왼쪽으로 이동 */
  top: -27%;
`;

export const ID = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;

export const IDTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const IDTrue = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const Group = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: 30%;
`;

export const Group2 = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-top: 10%;
`;

export const GroupInformation = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const Image4 = styled.Image`
  width: 18px;
  height: 21px;
  margin-left: -2%;
  margin-top: 1%;
`;

export const GroupSex = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-top: 6%;
  margin-bottom: 3%;
`;

export const GroupSexTitle = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupSexContent = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupAge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 3%;
`;

export const GroupAgeTitle = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupAgeContent = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupMember = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 3%;
`;

export const GroupMemberTitle = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupMemberName = styled.Text`
  font-size: 22px;
  color: black;
`;

export const GroupMemberID = styled.Text`
  font-size: 22px;
  color: black;
`;

export const InviteButton = styled.TouchableOpacity`
  background-color: #606060;
  padding: 15px 60px;
  border-radius: 30px;
  align-self: center;
  margin-top: 6%;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 3%;
`;

export const ButtonText2 = styled.Text`
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 85%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-width: 1.5;
  border-radius: 18px;
  width: 75%;
  text-align: center;
  background-color: white;
  margin-bottom: 6%;
`;

export const GroupButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 5%;
`;

export const CloseButton2 = styled.TouchableOpacity`
  padding: 12px 50px;
  border-width: 2px;
  border-color: #555;
  color: #555;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: #555;
`;

export const CopyButton2 = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 50px;
  border-radius: 18px;
  border-color: #555;
  color: #555;
  border-width: 2px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CodeBox = styled.Text`
  font-size: 18px;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 12px 60px;
  border-radius: 25px;
  margin-bottom: 20px;
`;

export const CopyButton = styled.TouchableOpacity`
  background-color:rgb(90, 90, 90);
  padding: 12px 60px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const CopyButtonText = styled.Text`
  color: rgb(90, 90, 90);
  font-size: 17px;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const CopyButtonText2 = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

export const CloseButtonText2 = styled.Text`
  color:rgb(90, 90, 90);
  font-size: 16px;
  font-weight: bold;
`;