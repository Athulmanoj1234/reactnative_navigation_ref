import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import openHeimarImage from '../../../assets/images/Oppenheimer_(film) poster.jpg';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={openHeimarImage} style={styles.backgorundImage} resizeMode='cover'>
        <Text style={styles.text}>Nolan's Openheimar</Text>
        <Link href={'/explore'} asChild>
          <Pressable>
            <Text style={styles.link}>Go To Explore</Text>
          </Pressable>
        </Link>
        <Link href={'/linkcheck'} asChild>
          <Pressable>
            <Text style={styles.link}>Go To link check</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // width: '100%',
    // height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  backgorundImage: {
    // resizeMode: 'cover',
    width: '100%',
    height: '100%',
    flex: 1,
    // textAlign: 'center',
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  link: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
});

export default App      