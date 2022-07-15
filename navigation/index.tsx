import {
  Fontisto,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigation';

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          title: '',
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
          headerLeft: () => (
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
              WhatsApp
            </Text>
          ),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: 'green'
          },
          headerStyle: {
            backgroundColor: Colors?.light.tabIconSelected
          },
          headerShadowVisible: false
        }}
      />

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

