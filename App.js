/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
 

  return (
    
        
        <View>
          <Text style={styles.txt}> Hello World</Text>
        </View>
      
  );
};

const styles = StyleSheet.create({
  txt:{
  
    alignSelf:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems: 'center',
  },

});

export default App;
