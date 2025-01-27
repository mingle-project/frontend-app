import React, { useState } from 'react';
import { Modal, SafeAreaView, View, Text,TouchableOpacity } from 'react-native';
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
              <UP.Text>은하</UP.Text>
              <UP.Image2 source={Pencil}/>
            </UP.GroupName>
            <UP.Text2>알아가는 사이</UP.Text2>
            <UP.User>
              <UP.Name>
                <UP.Nickname>닉네임</UP.Nickname>
                <UP.NameTrue>진선</UP.NameTrue>
                <UP.Image3 source={Pencil}/>
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
          visible = {inviteModalVisible}
          animationType="slide"
          onRequestClose={closeInviteModal}
        >
          <UP.ModalContainer>
            <UP.ModalContent>
              <UP.CodeBox>da800756</UP.CodeBox>
              <UP.ModalText>그룹 코드를 복사해서 친구들을 초대하세요!</UP.ModalText>
              <UP.CopyButton onPress={handleCopyCode}>
                <UP.CopyButtonText>코드 복사하기</UP.CopyButtonText>
              </UP.CopyButton>
              <UP.CloseButton onPress={closeInviteModal}>
                <UP.CloseButtonText>닫기</UP.CloseButtonText>
              </UP.CloseButton>
            </UP.ModalContent>
          </UP.ModalContainer>
        </Modal>
    </UP.SafeAreaView>
  );
};

export default UserProfile;
