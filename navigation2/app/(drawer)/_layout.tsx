import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer>
        <Drawer.Screen name='(tabs)' options={{ headerShown: false, title: "Home" }} />  
        {/* initially will be in home page */}
        <Drawer.Screen name='settings' options={{ headerShown: true, title: 'settings page' }} />
        <Drawer.Screen name='feeds/[id]' options={{ headerShown: false }} />
    </Drawer>
  )
}

export default DrawerLayout

