/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{} from 'react';
import {StyleSheet,View,} from 'react-native';
import Providers from './navigation/index'


const App = () => {
 return <Providers/>

  
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
