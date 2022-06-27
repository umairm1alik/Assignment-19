import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'





import Navigation from "./src/navigation/Navigation.js"
import { fetchTask } from './src/store/taskSlicer/taskSlicer.js'




export default function App() {
  const user= useSelector(store => store?.auth?.user)
  const userId=user?.userId
  console.log("userID in App .js", userId);
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(fetchTask(userId))
  }, [userId])
  

  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
    
  )
}
