import { View, Text } from 'react-native'
import React, { useState } from 'react'


import { useNavigation } from '@react-navigation/native'

import { useDispatch , useSelector} from 'react-redux'

import { doSignup } from '../../store/authSlicer.js/authSlicer'

export default function useSignup() {

  const disatch= useDispatch()

  const [fullName, setFullName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  
  
  


    const Navigation = useNavigation()
    const navigateHandlerSignup=() =>{
        Navigation.navigate("Login")
    }

    const registerHandler=() =>{

      const user={
        name:fullName,
        email,
        password
      }

      console.log("user in useSignup", user)

      disatch(doSignup(user))
      
    }
  return (
    {navigateHandlerSignup, email, setEmail, fullName, setFullName, password, setPassword, registerHandler}
  )
}