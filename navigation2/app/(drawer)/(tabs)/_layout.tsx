import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // when tab bar is active
        // tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,  // when tab is inactive
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarButton: HapticTab,
        headerLeft: () => <DrawerToggleButton />
        }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />  
      {/* from drawer when it comes to tabs it will the first screen willl gets loaded in  <Drawer.Screen name='(tabs)' options={{ headerShown: false, title: "Home" }} />  */}
      <Tabs.Screen
        name="linkcheck"
        options={{
          title: 'Link Check',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={38} name="paperplane.fill" color={focused ? '#ffffff' : '#000000'} />,
        }}
      />
    </Tabs>
  );
}
