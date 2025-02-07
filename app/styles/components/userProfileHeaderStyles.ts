import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 260px;
  margin-top: 25px
`;

export const Image1 = styled.Image`
  width: 35px;
  height: 30px;
`;

export const Image2 = styled.Image`
  width: 40px;
  height: 45px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 60%;
  background-color: white;
  border-radius: 25px;
  padding: 20px 20px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  display: flex;
  position: absolute;
  top: 130px;
  right: 50px;
`;

export const CloseButtonContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const XText = styled.Text`
  font-size: 19px;
  margin-bottom: 2%;
`;


export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  gap: 12%;
`;

export const MenuIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: 10%;
`;

export const MenuText = styled.Text`
  font-size: 19px;
  text-align: left;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LeaveGroupContainer = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  align-items: center;
`;

export const LeaveGroupTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #606060;
  margin-bottom: 15%;
  margin-top: 2%;
`;

export const LeaveGroupText = styled.Text`
  font-size: 16px;
  color: #606060;
  text-align: center;
  margin-bottom: 15%;
  line-height: 24px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 5%;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #555;
  padding: 12px 45px;
  border-radius: 18px;
`;

export const LeaveButton = styled.TouchableOpacity`
  background-color: #dc143c;
  padding: 12px 43px;
  border-radius: 18px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const DeleteGroupTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #606060;
  margin-bottom: 13%;
  margin-top: 3%;
`;

export const DeleteGroupText = styled.Text`
  font-size: 15.6px;
  color: #606060;
  text-align: center;
  margin-bottom: 13%;
  line-height: 24px;
`;

export const Input = styled.TextInput`
  width: 90%;
  padding: 10px;
  border: 1px solid #606060;
  border-radius: 15px;
  margin-bottom: 25px;
  text-align: center;
  font-size: 16px;
  color: #333;
`;
