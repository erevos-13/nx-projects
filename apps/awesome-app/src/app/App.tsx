import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import Star from './star.svg';
import { UiHeading } from '@acme/ui-heading';
import { UiLayout } from '@acme/ui-layout';
import Card from './card/card';
import { CardUI, ImageCard } from '@acme/card-ui';
const App = () => {
  const onPressHandler = () => {
    console.log('press click button');
  };
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <UiHeading text="Hello World!" />
        <Text style={styles.text}>This is a demo app. ok</Text>
        <UiLayout />
        <Card />
        
        <ImageCard />
        <CardUI />
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;
