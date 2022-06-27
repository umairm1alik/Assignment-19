import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'

import { styles } from './SplashStyle'

import ButtonComp from '../../commonComponents/buttonComp/ButtonComp'
import useSplash from './useSplash'

export default function Splash() {
  const [navigateHandlerSplash] = useSplash()
  return (
    <View style={styles.container}>
      <Image source={require("../../assests/splashCircle.png")} />
      <Image style={styles.circleImg} source={require("../../assests/splashCircle01.png")} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
        <Text style={{color: "#000000", fontSize: 15}}>Loading....</Text>
      </View>

      {/* <View style={styles.innerContainer}>
        <Image style={{width: 171.57, height: 170}} source={require("../../assests/getStartedPic.png")}/>
        <Text style={styles.splashHeading}>Get things done with TODo</Text>
        <Text style={styles.descrText}>Subtracting from your list of priorities is as important as adding to it.</Text>

        <ButtonComp title="Get Started" onPress={navigateHandlerSplash}/> 
       </View> */}
    </View>
  )
}