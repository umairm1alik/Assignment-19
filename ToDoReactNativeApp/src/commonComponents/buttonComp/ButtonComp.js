import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonCompStyle'


export default function ButtonComp(props) {
  return (
    
      <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
      </TouchableOpacity>
    
  )
}