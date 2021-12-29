import React , { useState,useEffect,useContext }from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const Routes = () => {
    const {user, setUser}=useContext(AuthContext)
    const [initializing,setinitializing]=useState(true)

    const onAuthStateChanged=(user)=>{
        setUser(user);
        if(initializing) setinitializing(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    }, [])
    
    if(initializing) return null;//can use loader here
    return (
        <NavigationContainer>
           {user?<AppStack/>: <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes
