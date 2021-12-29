/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState,useEffect} from 'react';
 import {StyleSheet,Text,View,} from 'react-native';
 import {createStackNavigator} from '@react-navigation/stack'
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
 const Stack =createStackNavigator();
 
 import OnboardScreen from '../Screens/OnboardScreen'
 import LoginScreen from '../Screens/LoginScreen'
 import SignupScreen from '../Screens/SignupScreen'
 
 
 const AuthStack = () => {
  const [firstlaunch,setfirstlaunch]=useState(null)
    let routeName;

  useEffect(() =>{
       AsyncStorage.getItem('alreadyLaunched').then(value =>{
         if(value==null){
           AsyncStorage.setItem('alreadyLaunched','true');
           setfirstlaunch(true);
         }
         else{ 
           setfirstlaunch(false);
         }
       })
  },[])
  if (firstlaunch === null) {
    return null; 
  } else if (firstlaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

 
    return(
     
     <Stack.Navigator  initialRouteName={routeName}>
         <Stack.Screen name='Onboarding' component={OnboardScreen} options={{header:()=>null}}/>
         <Stack.Screen name='Login' component={LoginScreen} options={{header:()=>null}}/>
         <Stack.Screen name='Signup' component={SignupScreen} 
         options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          // headerLeft: () => (
          //   <View style={{marginLeft: 10}}>
          //     <FontAwesome.Button 
          //       name="long-arrow-left"
          //       size={25}
          //       backgroundColor="#f9fafd"
          //       color="#333"
          //       onPress={() => navigation.navigate('Login')}
          //     />
          //   </View>
          // ),
        })}
         />

 
     </Stack.Navigator>
    )
 
 };

 export default AuthStack;
 
 const styles = StyleSheet.create({
   txt:{
   
     alignSelf:'center',
     justifyContent:'center',
     alignContent:'center',
     alignItems: 'center',
   },
 
 });
 

 