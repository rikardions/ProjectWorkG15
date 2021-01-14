import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles';

import background from '../assets/runbackground.jpg';

export default function HomeScreen({ navigation }) {
  
  return (

  <ImageBackground source={background} style={styles.backgroundImage}>
  <View style={styles.container}>
  <View style={{height: 5, fontSize: 16}}>
  </View>
  <View style={{width: 1200,alignSelf: 'center'}}>
    <Button 
      title="START"
      color="#841584" 
      fontSize= '15'
     onPress={()=>{
          navigation.navigate("Map");         
        }}/>
        </View>
  </View>
  </ImageBackground>
  
  );
}