import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import Colors from '../constants/Colors';
import ChatRoomScreem from '../screens/ChatRoomScreem';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigation';

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

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'WhatsApp',
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Fontisto
              name='zoom'
              size={24}
              color={'white'}
              style={{ marginRight: 15 }}
            />
            <MaterialCommunityIcons
              name='dots-vertical'
              size={24}
              color={'white'}
            />
          </View>
        ),

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
      }}>
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen
        name='ChatRoomScreem'
        component={ChatRoomScreem}
        options={({ route }: any) => ({
          title: route.params.name,
          headerBackTitleVisible: true,
          headerBackTitle: '',
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
                  style={{ marginHorizontal: 10 }}
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
    </Stack.Navigator>
  );
}
