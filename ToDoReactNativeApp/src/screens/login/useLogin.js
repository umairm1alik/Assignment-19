import { View, Text } from 'react-native'
import React, {useState} from 'react'

import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { doLogin } from '../../store/authSlicer.js/authSlicer'

export default function useLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const disatch= useDispatch()
  
  const Navigation = useNavigation()
  const navigateHandlerLogin = () => {
    Navigation.navigate("Signup")
    
  }

  const loginHandler=() =>{

    const user={
      email,
      password
    }

    console.log("user in useSignup", user)

    disatch(doLogin(user, Navigation))
    
  }
  return (
    [navigateHandlerLogin, loginHandler, email, setEmail, password, setPassword]
  )
}