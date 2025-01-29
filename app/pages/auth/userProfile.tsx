import React, { useState } from 'react';
import { Modal, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import UserProfileHeader from '../../shared/components/header/userProfileHeader';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import MingleLogoWhite1 from '../../assets/images/minglelogowhite1.png'
import Pencil from '../../assets/images/pencil.png'
import Rectangle from '../../assets/images/rectangle4.png'
import * as UP from '../../styles/auth/userProfileStyles';

const UserProfile = () => {
  const navigation = useNavigation();
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("은하");
  const [tempGroupName, setTempGroupName] = useState(groupName);
  const [userName, setUserName] = useState("진선");
  const [tempUserName, setTempUserName] = useState(userName);
  const [editUserNameModalVisible, setEditUserNameModalVisible] = useState(false);


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
            <UP.Text2>알아가는 사이</UP.Text2>
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
                <UP.Image4 source={Pencil}/>
              </UP.Group2>
              <UP.GroupSex>
                <UP.GroupSexTitle>성별</UP.GroupSexTitle>
                <UP.GroupSexContent>여자</UP.GroupSexContent>
              </UP.GroupSex>
              <UP.GroupAge>
                <UP.GroupAgeTitle>나이</UP.GroupAgeTitle>
                <UP.GroupAgeContent>10대</UP.GroupAgeContent>
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
