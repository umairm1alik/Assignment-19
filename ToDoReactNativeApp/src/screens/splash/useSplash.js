import { View, Text } from 'react-native'
import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { getCurrentUser } from '../../store/authSlicer.js/authSlicer'

export default function useSplash() {
    const Navigation = useNavigation()
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(getCurrentUser(Navigation))
      // dispatch(fetchTask(setLoader))
    }, [])

    const navigateHandlerSplash=() =>{
        Navigation.navigate("Signup")
    }
  return (
    [navigateHandlerSplash]
  )
}