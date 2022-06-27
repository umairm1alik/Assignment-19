import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './LoginStyle'

import InputComp from '../../commonComponents/inputComp/InputComp'
import ButtonComp from '../../commonComponents/buttonComp/ButtonComp'
import useLogin from './useLogin'



export default function Login() {
    const [navigateHandlerLogin, loginHandler, email, setEmail, password, setPassword] = useLogin()
  return (
    <View style={styles.container}>
            <Image source={require("../../assests/splashCircle.png")} />
            <Image style={styles.circleImg} source={require("../../assests/splashCircle01.png")} />

            <View style={styles.innerContainer}>
                <Text style={styles.signinHeading}>Welcome back!</Text>
                <Text style={styles.descrText}>Let's help you meet your tasks</Text>

                <Image style={{marginTop: 20}} source={require("../../assests/loginScreen.png")}/>

                {/* Inputs for Signup */}
                <InputComp onChangeText={setEmail} value={email} placeholder="Enter your email" style={{marginTop: 20}}/>
                <InputComp onChangeText={setPassword} password={password} secureTextEntry={true} placeholder="Enter password" style={{marginTop: 20}}/>

                <TouchableOpacity style={{marginTop: 17}}>
                    <Text style={styles.forgetPass}>Forget Password</Text>
                </TouchableOpacity>

                <ButtonComp title="Login" onPress={loginHandler} style={{marginTop: 19}} />

                <TouchableOpacity style={{marginTop: 25}} onPress={navigateHandlerLogin}>
                    <Text style={styles.signupText}>Don't have an account? <Text style={styles.signup}>Sign up</Text></Text>
                </TouchableOpacity>
                
            </View>
        </View>
  )
}