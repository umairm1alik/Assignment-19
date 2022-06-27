import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './SignupStyle'
import ButtonComp from '../../commonComponents/buttonComp/ButtonComp'
import InputComp from '../../commonComponents/inputComp/InputComp'
import useSignup from './useSignup'

export default function Signup() {
    const {navigateHandlerSignup, email, setEmail, fullName, setFullName, password, setPassword, registerHandler} = useSignup()
    return (

        <View style={styles.container}>
            <Image source={require("../../assests/splashCircle.png")} />
            <Image style={styles.circleImg} source={require("../../assests/splashCircle01.png")} />
            <View style={styles.innerContainer}>
                <Text style={styles.signupHeading}>Welcome onboard!</Text>
                <Text style={styles.descrText}>Let's help you meet your tasks</Text>

                {/* Inputs for Signup */}
                <InputComp value={fullName} onChangeText={setFullName} placeholder="Enter your full name" style={{marginTop: 74.72}}/>
                <InputComp value={email} onChangeText={setEmail} placeholder="Enter your email" style={{marginTop: 20}}/>
                <InputComp value={password} onChangeText={setPassword}  secureTextEntry={true} placeholder="Enter password" style={{marginTop: 20}}/>
                {/* <InputComp secureTextEntry={true} placeholder="Enter password" style={{marginTop: 20}}/> */}

                <ButtonComp title="Register" onPress={registerHandler} />

                <TouchableOpacity style={{marginTop: 25}} onPress={navigateHandlerSignup}>
                    <Text style={styles.signinText}>Already have an account? <Text style={styles.signin}>Sign in</Text></Text>
                </TouchableOpacity>
                
            </View>
        </View>

    )
}