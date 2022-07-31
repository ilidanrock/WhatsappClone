import { TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabParamList } from '../../types';
type Props = {};

type NavigationProps = StackNavigationProp<TabParamList>;
const NewMessageButton = (props: Props) => {
  const navigation = useNavigation<NavigationProps>();
  const onPress = () => {
    navigation.navigate('Contacts');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name='android-messages' size={24} color='white' />
    </TouchableOpacity>
  );
};

export default NewMessageButton;
