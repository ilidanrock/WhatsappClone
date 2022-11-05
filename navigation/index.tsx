import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View } from 'react-native';
import ModalLog from '../components/ModalLogout/ModalLog';

import Colors from '../constants/Colors';
import ChatRoomScreem from '../screens/ChatRoomScreem';
import Contacts from '../screens/Contacts';
import { RootStackParamList, TabParamList } from '../types';
import MainTabNavigator from './MainTabNavigation';
// import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Layout from '../constants/Layout';

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
type NavigationProps = StackNavigationProp<TabParamList>;

function RootNavigator() {
  const navigation = useNavigation<NavigationProps>();
  const onPressFunction = () => {
    navigation.navigate('ModalLog');
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: Colors?.light.tabIconSelected
        },
        headerShadowVisible: false
        // headerShown: false,
        // headerBlurEffect: 'systemChromeMaterial'
      }}>
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          header: props => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                backgroundColor: Colors?.light.tabIconSelected,
                height: 60
              }}>
              <Text
                style={{
                  marginHorizontal: Layout.window.width * 0.25,
                  fontSize: 20,
                  fontWeight: '600',
                  color: Colors.light.background
                }}>
                Whatsapp
              </Text>
              <Fontisto
                name='zoom'
                size={24}
                color={'white'}
                style={{ marginRight: 15 }}
              />
              <Pressable
                onPress={onPressFunction}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 30,
                  width: 30
                }}>
                <MaterialCommunityIcons
                  name='dots-vertical'
                  size={24}
                  color={'white'}
                />
              </Pressable>
            </View>
          )
        }}
      />
      <Stack.Screen
        name='ChatRoomScreem'
        component={ChatRoomScreem}
        options={({ route }: any) => ({
          title: route.params.name,
          headerBackTitleVisible: true,
          headerBackTitle: '',
          headerShown: true,
          headerTintColor: 'white',
          headerTitleAlign: 'left',
          headerRight(props) {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FontAwesome
                  name='video-camera'
                  size={22}
                  color={Colors.light.background}
                  style={{ marginHorizontal: 5 }}
                />
                <MaterialIcons
                  name='call'
                  size={22}
                  color={Colors.light.background}
                />
                <MaterialCommunityIcons
                  name='dots-vertical'
                  size={22}
                  color={Colors.light.background}
                />
              </View>
            );
          }
        })}
      />
      <Stack.Screen
        name='Contacts'
        component={Contacts}
        options={({ route }: any) => ({
          headerBackTitleVisible: true,
          headerBackTitle: '',
          headerTintColor: 'white',
          headerTitleAlign: 'left'
        })}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='ModalLog' component={ModalLog} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
