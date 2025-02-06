import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from  '../../../assets/images/arrow.png';
import Set from  '../../../assets/images/set.png';
import Help from '../../../assets/images/help.png';
import Logout from '../../../assets/images/logout.png';
import Computer from '../../../assets/images/computer.png';
import Delete from '../../../assets/images/delete.png';
import Line from '../../../assets/images/line.png';
import * as UPH from '../../../styles/components/userProfileHeaderStyles';


const UserProfileHeader = () => {
  const navigation = useNavigation();
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const openSettingsModal = () => {
    setSettingsModalVisible(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalVisible(false);
  };

  const [setButtonPosition, setSetButtonPosition] = useState({x:0, y:0});

  const [leaveGroupModalVisible, setLeaveGroupModalVisible] = useState(false);

  const openLeaveGroupModal = () => {
    console.log("openLeaveGroupModal 실행됨");
    setSettingsModalVisible(false);
    setTimeout(() => {
      console.log("leaveGroupModalVisible 활성화");
      setLeaveGroupModalVisible(true);
    }, 300);
  };  
  
  const closeLeaveGroupModal = () => {
    setLeaveGroupModalVisible(false);
  };

  const handleLeaveGroup = () => {
    alert('그룹에서 나갔습니다.');
  };

  return (
    <UPH.SafeAreaView>
      <UPH.View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <UPH.Image1 source={Arrow} />
        </TouchableOpacity>
        <TouchableOpacity 
          onLayout={(event) => {
            event.target.measure((_fx, _fy, _width, _height, px, py) => {
              setSetButtonPosition({ x: px, y: py });
            });
          }}
          onPress={openSettingsModal}
        >
          <UPH.Image2 source={Set}/>
        </TouchableOpacity>
      </UPH.View>

      <Modal
        transparent={true}
        visible={settingsModalVisible}
        animationType="fade"
        onRequestClose={closeSettingsModal}
      >
        <UPH.ModalContainer>
          <UPH.ModalContent>
            <UPH.CloseButtonContainer>
              <TouchableOpacity onPress={closeSettingsModal}>
                <UPH.XText>✖</UPH.XText>
              </TouchableOpacity>
            </UPH.CloseButtonContainer>
            <UPH.MenuItem>
            <UPH.MenuIcon source={Help}/>
            <UPH.MenuText>도움말</UPH.MenuText>
            </UPH.MenuItem>
            <UPH.MenuItem>
            <UPH.MenuIcon source={Computer}/>
            <UPH.MenuText>프로젝트 소개</UPH.MenuText>
            </UPH.MenuItem>
            <UPH.MenuItem onPress={() => {
              openLeaveGroupModal();
            }}>
              <UPH.MenuIcon source={Logout}/>
              <UPH.MenuText>그룹 나가기</UPH.MenuText>
            </UPH.MenuItem>
            <UPH.MenuItem>
            <UPH.MenuIcon source={Delete}/>
            <UPH.MenuText>그룹 삭제</UPH.MenuText>
            </UPH.MenuItem>
          </UPH.ModalContent>
        </UPH.ModalContainer>
        </Modal>
        <Modal
          transparent={true}
          visible={leaveGroupModalVisible}
          animationType="fade"
          onRequestClose={closeLeaveGroupModal}
          >
            <UPH.Overlay>
              <UPH.LeaveGroupContainer>
                <UPH.LeaveGroupTitle>그룹을 떠나시나요?</UPH.LeaveGroupTitle>
                <UPH.LeaveGroupText>
                  그룹을 나가면 더 이상{'\n'}
                  그룹 활동에 참여할 수 없으며,{'\n'}
                  {'\n'}
                  그룹 내에서 공유된 데이터에{'\n'}
                  접근할 수 없습니다.
                </UPH.LeaveGroupText>
                <UPH.ButtonContainer>
                  <UPH.CancelButton onPress={closeLeaveGroupModal}>
                    <UPH.ButtonText>취소</UPH.ButtonText>
                  </UPH.CancelButton>
                  <UPH.LeaveButton onPress={handleLeaveGroup}>
                    <UPH.ButtonText>나가기</UPH.ButtonText>
                  </UPH.LeaveButton>
                </UPH.ButtonContainer>
              </UPH.LeaveGroupContainer>
            </UPH.Overlay>
          </Modal>
    </UPH.SafeAreaView>
  );
};

export default UserProfileHeader;
