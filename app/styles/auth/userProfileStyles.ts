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
  width: 100px;
  height: 100px;
  margin-top: -75%;
`;

export const GroupName = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3%;
  margin-top: 2%;
`;

export const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-top: 5%;
`;

export const Image2 = styled.Image`
  width: 18px;
  height: 20px;
  margin-top: 124%;
  position: relative;
`;

export const Text2 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-top: 5%;
`;

export const User = styled.View`
  margin-top: 6.5%;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: 50%;
`;

export const Name = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 2.5%;
`;

export const Nickname = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: black;
`;

export const NameTrue = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: black;
`;

export const Image3 = styled.Image`
  width: 16px;
  position: absolute;
  left: -15px; 
  top: -44%;
`;

export const ID = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;

export const IDTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: black;
`;

export const IDTrue = styled.Text`
  font-size: 19px;
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
  margin-top: 7%;
`;

export const GroupInformation = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const Image4 = styled.Image`
  width: 17px;
  height: 19px;
  margin-left: -3%;
  margin-top: 1%;
`;

export const GroupSex = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-top: 4%;
  margin-bottom: 3%;
`;

export const GroupSexTitle = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupSexContent = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupAge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 3%;
`;

export const GroupAgeTitle = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupAgeContent = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupMember = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5%;
  margin-bottom: 2%;
`;

export const GroupMemberTitle = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupMemberName = styled.Text`
  font-size: 19px;
  color: black;
`;

export const GroupMemberID = styled.Text`
  font-size: 19px;
  color: black;
`;

export const InviteButton = styled.TouchableOpacity`
  background-color: #606060;
  padding: 13px 58px;
  border-radius: 30px;
  align-self: center;
  margin-top: 4%;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 2%;
`;

export const ButtonText2 = styled.Text`
  color: #666666;
  font-size: 17px;
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
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  border-width: 1.5;
  border-radius: 18px;
  width: 75%;
  text-align: center;
  background-color: white;
  margin-bottom: 4%;
`;

export const GroupButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 5%;
`;

export const CloseButton2 = styled.TouchableOpacity`
  padding: 10px 48px;
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
  padding: 10px 48px;
  border-radius: 18px;
  border-color: #555;
  background-color: rgb(90, 90, 90);
  color: #555;
  border-width: 2px;
`;

export const ModalText = styled.Text`
  font-size: 14px;
  margin-bottom: 18px;
  text-align: center;
`;

export const CodeBox = styled.Text`
  font-size: 16px;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 10px 58px;
  border-radius: 25px;
  margin-bottom: 18px;
`;

export const CopyButton = styled.TouchableOpacity`
  background-color:rgb(90, 90, 90);
  padding: 10px 58px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const CopyButtonText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const CloseButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const CopyButtonText2 = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const CloseButtonText2 = styled.Text`
  color:rgb(90, 90, 90);
  font-size: 14px;
  font-weight: bold;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const GroupRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const GroupLabel = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-right: 10px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #555;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  margin-right: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #555;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const PickerContainer = styled.View`
  height: 35px;  
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1.5px solid gray;
  background-color: white;
`;

export const PickerText = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 25px;
`;

export const CustomPickerStyle = {
  inputIOS: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
};

export const PickerStyle = {
  inputIOS: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
};

export const OptionsWrapper = styled.View`
  position: absolute;
  top: 120%;
  left: 0;
  right: 0;
  z-index: 200;
`;

export const OptionText = styled.Text`
  font-size: 18px;
  padding: 12px;
  text-align: center;
  color: black;
`;

export const OptionsContainer = styled.View`
  background-color: white;
  border: 2px solid gray;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  z-index: 100;
`;