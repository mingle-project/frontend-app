import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import UserProfileHeader from '../../shared/components/header/userProfileHeader';
import MingleLogoWhite1 from '../../assets/images/minglelogowhite1.png'
import Pencil from '../../assets/images/pencil.png'
import Rectangle from '../../assets/images/rectangle4.png'
import * as UP from '../../styles/auth/userProfileStyles';

const UserProfile = () => {
  const handleInvite = () => {
    alert('그룹으로 초대하시겠습니까?');
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
    </UP.SafeAreaView>
  );
};

export default UserProfile;
