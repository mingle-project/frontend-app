import React, { useState } from 'react';
import { Modal, SafeAreaView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import UserProfileHeader from '../../shared/components/header/userProfileHeader';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
//import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import MingleLogoWhite1 from '../../assets/images/minglelogowhite1.png'
import Pencil from '../../assets/images/pencil.png'
import Rectangle from '../../assets/images/rectangle4.png'
import * as UP from '../../styles/auth/userProfileStyles';

const UserProfile = () => {
  const navigation = useNavigation();
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editGroupInfoModalVisible, setEditGroupInfoModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("은하");
  const [tempGroupName, setTempGroupName] = useState(groupName);
  const [userName, setUserName] = useState("진선");
  const [tempUserName, setTempUserName] = useState(userName);
  const [groupGender, setGroupGender] = useState("여자");
  const [groupAge, setGroupAge] = useState("10대");
  const [groupCloseness, setGroupCloseness] = useState("알아가는 사이");
  const [editUserNameModalVisible, setEditUserNameModalVisible] = useState(false);
  const [genderPickerVisible, setGenderPickerVisible] = useState(false);
  const [agePickerVisible, setAgePickerVisible] = useState(false);
  const [closenessPickerVisible, setClosenessPickerVisible] = useState(false);


  const handleEditGroupName = () => {
    setTempGroupName(groupName);
    setEditModalVisible(true);
  };

  const handleSaveGroupName = () => {
    setGroupName(tempGroupName); 
    alert("그룹명이 변경되었습니다!");
    setEditModalVisible(false);
  };

  const handleEditUserName = () => {
    setTempUserName(userName);
    setEditUserNameModalVisible(true);
  };

  const handleSaveUserName = () => {
    setUserName(tempUserName);
    alert("이름이 변경되었습니다!");
    setEditUserNameModalVisible(false);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const handleInvite = () => {
    setInviteModalVisible(true);
  };

  const closeInviteModal = () => {
    setInviteModalVisible(false);
  }

  const handleEditGroupInfo = () => {
    setEditGroupInfoModalVisible(true);
  };

  const handleSaveGroupInfo = () => {
    alert("그룹 정보가 변경되었습니다!");
    setEditGroupInfoModalVisible(false);
  };

  const handleCopyCode = () => {
    const groupCode = "da800756";
    Clipboard.setString(groupCode); 

    Clipboard.getString().then((copiedText) => {
      if (copiedText === groupCode) {
        alert('코드가 복사되었습니다!');
      } else {
        alert('복사 실패! 다시 시도해주세요.');
      }
    });
    closeInviteModal();
  };

  const handleLogout = () => {
    alert('로그아웃이 완료되었습니다!');
  };

  return (
    <UP.SafeAreaView>
        <UserProfileHeader/>
        <UP.View>
            <UP.Image1 source={MingleLogoWhite1}/>
            <UP.GroupName>
              <UP.Text>{groupName}</UP.Text>
              <TouchableOpacity onPress={handleEditGroupName}>
                <UP.Image2 source={Pencil} />
              </TouchableOpacity>
            </UP.GroupName>
            <UP.Text2>{groupCloseness}</UP.Text2>
            <UP.User>
              <UP.Name>
                <UP.Nickname>닉네임</UP.Nickname>
                <UP.NameTrue>{userName}</UP.NameTrue>
                <TouchableOpacity onPress={handleEditUserName}>
                  <UP.Image3 source={Pencil} />
                </TouchableOpacity>
              </UP.Name>
              <UP.ID>
                <UP.IDTitle>아이디</UP.IDTitle>
                <UP.IDTrue>jinseon</UP.IDTrue>
              </UP.ID>
            </UP.User>
            <UP.Group>
              <UP.Group2>
                <UP.GroupInformation>은하 정보</UP.GroupInformation>
                <TouchableOpacity onPress={handleEditGroupInfo}>
                  <UP.Image4 source={Pencil}/>
                </TouchableOpacity>
              </UP.Group2>
              <UP.GroupSex>
                <UP.GroupSexTitle>성별</UP.GroupSexTitle>
                <UP.GroupSexContent>{groupGender}</UP.GroupSexContent>
              </UP.GroupSex>
              <UP.GroupAge>
                <UP.GroupAgeTitle>나이</UP.GroupAgeTitle>
                <UP.GroupAgeContent>{groupAge}</UP.GroupAgeContent>
              </UP.GroupAge>
              <UP.GroupMember>
                <UP.GroupMemberTitle>멤버</UP.GroupMemberTitle>
                <UP.GroupMemberName>진선</UP.GroupMemberName>
                <UP.GroupMemberID>jinseon</UP.GroupMemberID>
              </UP.GroupMember>
            </UP.Group>
            <UP.InviteButton onPress={handleInvite}>
              <UP.ButtonText>초대하기</UP.ButtonText>
            </UP.InviteButton>
            <UP.LogoutButton onPress={handleLogout}>
              <UP.ButtonText2>로그아웃</UP.ButtonText2>
            </UP.LogoutButton>
        </UP.View>

        <Modal
          transparent={true}
          visible={editModalVisible}
          animationType="slide"
          onRequestClose={closeEditModal}
        >
          <UP.ModalContainer>
            <UP.ModalContent>
              <UP.TextInput
                value={tempGroupName}
                onChangeText={setTempGroupName}
                placeholder="그룹명을 입력하세요"
              />
              <UP.GroupButton>
                <UP.CopyButton2 onPress={handleSaveGroupName}>
                  <UP.CopyButtonText>수정</UP.CopyButtonText>
                </UP.CopyButton2>
                <UP.CloseButton2 onPress={closeEditModal}>
                  <UP.CloseButtonText>취소</UP.CloseButtonText>
                </UP.CloseButton2>
              </UP.GroupButton>
            </UP.ModalContent>
          </UP.ModalContainer>
        </Modal>
        <Modal
          transparent={true}
          visible={editUserNameModalVisible}
          animationType="slide"
          onRequestClose={() => setEditUserNameModalVisible(false)}
        >
          <UP.ModalContainer>
            <UP.ModalContent>
              <UP.TextInput
                value={tempUserName}
                onChangeText={setTempUserName}
                placeholder="이름을 입력하세요"
              />
              <UP.GroupButton>
                <UP.CopyButton2 onPress={handleSaveUserName}>
                  <UP.CopyButtonText>수정</UP.CopyButtonText>
                </UP.CopyButton2>
                <UP.CloseButton2 onPress={() => setEditUserNameModalVisible(false)}>
                  <UP.CloseButtonText>취소</UP.CloseButtonText>
                </UP.CloseButton2>
              </UP.GroupButton>
            </UP.ModalContent>
          </UP.ModalContainer>
        </Modal>
        <Modal
          transparent={true}
          visible={editGroupInfoModalVisible}
          animationType="slide"
          onRequestClose={() => setEditGroupInfoModalVisible(false)}
        >
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <UP.ModalContainer>
              <UP.ModalContent>
                <UP.ModalTitle>그룹 정보 수정</UP.ModalTitle>
                <UP.GroupRow>
                  <UP.GroupLabel>성별:</UP.GroupLabel>
                  <TouchableOpacity onPress={() => setGenderPickerVisible(true)}>
                    <UP.PickerContainer>
                      <UP.PickerText>{groupGender || "선택하세요"}</UP.PickerText>
                    </UP.PickerContainer>
                  </TouchableOpacity>
                  {genderPickerVisible && (
                    <UP.OptionsWrapper>
                      <UP.OptionsContainer>
                        {["여자", "남자", "혼성"].map((option) => (
                          <TouchableOpacity key={option} onPress={() => {
                            setGroupGender(option);
                            setGenderPickerVisible(false);
                          }}>
                            <UP.OptionText>{option}</UP.OptionText>
                          </TouchableOpacity>
                        ))}
                      </UP.OptionsContainer>
                    </UP.OptionsWrapper>
                  )}
                </UP.GroupRow>
                <UP.GroupRow>
                  <UP.GroupLabel>연령대:</UP.GroupLabel>
                  <TouchableOpacity onPress={() => setAgePickerVisible(true)}>
                    <UP.PickerContainer>
                      <UP.PickerText>{groupAge || "선택하세요"}</UP.PickerText>
                    </UP.PickerContainer>
                  </TouchableOpacity>
                  {agePickerVisible && (
                    <UP.OptionsWrapper>
                      <UP.OptionsContainer>
                        {["10대", "20대", "30대", "40대 이상"].map((option) => (
                          <TouchableOpacity key={option} onPress={() => {
                            setGroupAge(option);
                            setAgePickerVisible(false);
                          }}>
                            <UP.OptionText>{option}</UP.OptionText>
                          </TouchableOpacity>
                        ))}
                      </UP.OptionsContainer>
                    </UP.OptionsWrapper>
                  )}
                </UP.GroupRow>
                <UP.GroupRow>
                  <UP.GroupLabel>친밀도:</UP.GroupLabel>
                  <TouchableOpacity onPress={() => setClosenessPickerVisible(true)}>
                    <UP.PickerContainer>
                      <UP.PickerText>{groupCloseness || "선택하세요"}</UP.PickerText>
                    </UP.PickerContainer>
                  </TouchableOpacity>
                  {closenessPickerVisible && (
                    <UP.OptionsWrapper>
                      <UP.OptionsContainer>
                        {["알아가는 사이", "편한 사이", "비밀 없는 사이"].map((option) => (
                          <TouchableOpacity key={option} onPress={() => {
                            setGroupCloseness(option);
                            setClosenessPickerVisible(false);
                          }}>
                            <UP.OptionText>{option}</UP.OptionText>
                          </TouchableOpacity>
                        ))}
                      </UP.OptionsContainer>
                    </UP.OptionsWrapper>
                  )}
                </UP.GroupRow>
                <UP.ModalButtonContainer>
                  <UP.CancelButton onPress={() => setEditGroupInfoModalVisible(false)}>
                    <UP.ButtonText>취소</UP.ButtonText>
                  </UP.CancelButton>
                  <UP.SaveButton onPress={handleSaveGroupInfo}>
                    <UP.ButtonText>수정</UP.ButtonText>
                  </UP.SaveButton>
                </UP.ModalButtonContainer>
              </UP.ModalContent>
            </UP.ModalContainer>
          </KeyboardAvoidingView>
        </Modal>
        <Modal
          transparent={true}
          visible = {inviteModalVisible}
          animationType="slide"
          onRequestClose={closeInviteModal}
        >
          <UP.ModalContainer>
            <UP.ModalContent>
              <UP.CodeBox>da800756</UP.CodeBox>
              <UP.ModalText>그룹 코드를 복사해서 친구들을 초대하세요!</UP.ModalText>
              <UP.CopyButton onPress={handleCopyCode}>
                <UP.CopyButtonText2>코드 복사하기</UP.CopyButtonText2>
              </UP.CopyButton>
              <UP.CloseButton onPress={closeInviteModal}>
                <UP.CloseButtonText2>닫기</UP.CloseButtonText2>
              </UP.CloseButton>
            </UP.ModalContent>
          </UP.ModalContainer>
        </Modal>
    </UP.SafeAreaView>
  );
};

export default UserProfile;
