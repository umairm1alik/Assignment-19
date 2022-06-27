import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator();

// importing screens
import Splash from '../screens/splash/Splash';
import Signup from '../screens/signup/Signup';
import Login from '../screens/login/Login';
import TaskDashboard from '../screens/taskDashboard/TaskDashboard';
import CompletedTaskScreen from '../screens/completedTaskScreen/CompletedTaskScreen'

export default function Navigation() {
  const isUserLoggedIn = useSelector(store => store.auth.isUserLoggedIn)
  // console.log("console in navigation", isUserLoggedIn);

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash">
        {isUserLoggedIn ? (
          <>
          <Stack.Screen name='TaskDashboard' component={TaskDashboard} />
          <Stack.Screen name='CompletedTaskScreen' component={CompletedTaskScreen} />
          </>
         ) : (
          <>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Login' component={Login}/>
          </>
       ) }



      </Stack.Navigator>
    </NavigationContainer>
  )
}