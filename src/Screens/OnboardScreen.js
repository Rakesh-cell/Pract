import React from 'react'
import { View, Text, Button, StyleSheet,Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardScreen = ({ navigation }) => {
    return (
        <Onboarding
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}

            pages={[
                {
                    backgroundColor: '#ADD8E6',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way to Connect to the World',
                },
                {
                    backgroundColor: '#FFA500',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share your Thoughts',
                    subtitle: 'Share your Thoughts With Similar kind of people',
                },
                {
                    backgroundColor: '#800080',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become a Star',
                    subtitle: 'Let the Spotlight capture you',
                },
            
                 ]}
        />
    )
}

export default OnboardScreen
