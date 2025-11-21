import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const FeedPage = () => {
 
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>user page with id: {id}</Text>
    </View>
  )
}

export default FeedPage