import { Pressable, Text, View } from 'react-native';
import React from 'react';
// import { TabParamList } from '../../types';
import { Avatar } from '@rneui/themed';
import styles from './style';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type NavigationProps = StackNavigationProp<TabParamList>;

const ContactListItems = ({ user }: any) => {
  const colorSchema = useColorScheme();
  // const navigation = useNavigation<NavigationProps>();

  const onCLick = () => {
    // navigation.navigate('Contact', { user });
  };

  return (
    <Pressable
      onLongPress={onCLick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(221, 221, 221)' : 'white'
        },
        styles.container
      ]}
      delayLongPress={20}>
      <View style={styles.midContainer}>
        <Avatar source={{ uri: user.imageUri }} size={64} rounded />
        <View style={styles.name}>
          <Text style={[styles.text, { color: Colors[colorSchema].text }]}>
            {user.name}
          </Text>
          <Text
            style={[styles.status, { color: Colors[colorSchema].text }]}
            numberOfLines={1}>
            {user.status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ContactListItems;
