import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome"
import { useSelector, useDispatch } from 'react-redux'


import { styles } from '../taskDashboard/TaskDashboardStyle'
import { deleteCompletedTask } from '../../store/taskSlicer/taskSlicer'
import { userSignOut } from '../../store/authSlicer.js/authSlicer'



export default function useCompletedTaskScreen() {

    const Navigation = useNavigation()
    const dispatch = useDispatch()

    //Tasks from store
    const completedasksFromStore = useSelector(store => store.taskRed.completedTasks)
    const itemsFromStore = useSelector(store => store.taskRed.tasks)
    const user = useSelector(store => store.auth.user)
    const userName = user?.name || '';



    const navigateHandler = () => {
        Navigation.navigate("TaskDashboard")
    }

    const delCompTaskHandler = (id) => {
        dispatch(deleteCompletedTask(id))
    }

    const signOutHandler = () => {
        dispatch(userSignOut(Navigation))
        // Navigation.navigate('Login')
      }


    //Flatlist rendring

    const Item = ({ completeTask, id }) => (
        <>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <Text style={styles.task}>{completeTask}</Text>
                <TouchableOpacity onPress={() => delCompTaskHandler(id)}><Text>
                    <Icon name="remove" size={20} color="#900" />
                </Text></TouchableOpacity>

            </View>
            <View style={styles.line} />
        </>
    );

    const renderItem = ({ item }) => (
        <Item completeTask={item.taskComplete} id={item.completedTaskId} />
    )

    return (
        [navigateHandler, completedasksFromStore, renderItem, itemsFromStore, userName, signOutHandler]
    )
}