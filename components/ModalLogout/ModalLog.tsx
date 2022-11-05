import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import React from 'react';
import { Auth } from 'aws-amplify';

type Props = {
  modalVisible: boolean;
  route: any;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalLog = (props: Props) => {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={signOut} style={styles.buttonClose}>
        <Text style={styles.textStyle}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalLog;
