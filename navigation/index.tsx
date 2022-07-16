import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, View } from 'react-native';

import Colors from '../constants/Colors';
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
      }}>
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
}
