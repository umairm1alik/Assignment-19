import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './InputCompStyle'

export default function InputComp(props) {
  return (
    <View>
    <TextInput
    style={[styles.inputView, props.style]}
    placeholder={props.placeholder} 
    placeholderTextColor="#00000099"
    secureTextEntry={props.secureTextEntry}
    onChangeText={props.onChangeText}
    value={props.value}
    />
    </View>
  )
}