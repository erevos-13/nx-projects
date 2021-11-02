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

const App = () => {
  return (
    
      <SafeAreaView>
        <View style={styles.box}>
          <UiHeading text="Hello World!" />
          <Text style={styles.text}>This is a demo app.</Text>
        </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});


export default App;
