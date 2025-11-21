import { Stack } from 'expo-router'
import React from 'react'

const FeedLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name='index' options={{ title: "home-feed" }} />
      <Stack.Screen name='feeds' options={{ title: "feeds", headerShown: false }} />
    </Stack>
  )
}

export default FeedLayout