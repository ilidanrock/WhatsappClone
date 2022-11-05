import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import { MainTabParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <>
      {/* <View style={{ height: 60, flex: 0.1 }}></View> */}
      <MainTab.Navigator
        initialRouteName='Chats'
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].background,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme].tint
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 4
          },
          tabBarLabelStyle: {
            fontWeight: 'bold'
          },
          tabBarShowIcon: true
        }}>
        <MainTab.Screen
          name='Camera'
          component={CameraScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name='camera' color={color} size={18} />
            ),
            tabBarLabel: () => null
          }}
        />
        <MainTab.Screen name='Chats' component={ChatsScreen} />
        <MainTab.Screen name='Status' component={StatusScreen} />
        <MainTab.Screen name='Calls' component={CallsScreen} />
      </MainTab.Navigator>
    </>
  );
}
