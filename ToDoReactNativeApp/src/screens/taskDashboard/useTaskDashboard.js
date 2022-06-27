import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import Icon from "react-native-vector-icons/FontAwesome"
import PencilIcon from "react-native-vector-icons/EvilIcons"

import { useSelector, useDispatch } from 'react-redux'
import { addCompletedTask, addTask, deleteTask, taskUpdationAction } from '../../store/taskSlicer/taskSlicer'

import { styles } from './TaskDashboardStyle'
import { userSignOut } from '../../store/authSlicer.js/authSlicer'

export default function useTaskDashboard() {
  const [task, setTask] = useState('')
  const [flag, setFlag] = useState(false)
  const [updateTaskId, setUpdateTaskId] = useState(null)
  const dispatch = useDispatch()
  const Navigation = useNavigation()


  //Fetching from store
  const tasksFromStore = useSelector(store => store.taskRed.tasks)
  const completedItems = useSelector(store => store.taskRed.completedTasks)
  const user = useSelector(store => store.auth.user)
  const userName=user?.name || '';
  const userId=user?.userId;
  console.log("currentUserId", user)


  const taskAddHandler = () => {
    if (!task) {
      alert("Add task")
      return
    }
    const newTask = {
      task,
      userId
    
    }
    
    dispatch(addTask(newTask))
    setTask("")
  }

  const updateHandler = (task, taskId) => {
    setTask(task)
    setUpdateTaskId(taskId)
    console.log(updateTaskId)
    setFlag(true)
  }

  const ctaUpdateHandler = () => {
    if(!task){
      alert("Task Required")
      return
    }
    const taskUpdated={
      
      taskId: updateTaskId,
      task
    }
    console.log("id in dispatcher", updateTaskId)
    console.log("task in dispatcher", taskUpdated)
    dispatch(taskUpdationAction(taskUpdated))
    setFlag(false)
    setTask("")
  }

  const completedTaskHandler = (unCompleteTask, id) => {

    const completedTask = {
      taskComplete: unCompleteTask,
      compTaskId: id,
      userId
    }

    dispatch(addCompletedTask(completedTask))

  } 

  const removeTaskHandler = (id) => {
    dispatch(deleteTask(id))
  }

  const navigateToCompleteList = () => {
    Navigation.navigate("CompletedTaskScreen")
  }


  const signOutHandler = () => {
    dispatch(userSignOut(Navigation))
    // Navigation.navigate('Login')
  }


  //Flatlist rendring

  const Item = ({ task, taskId }) => (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => completedTaskHandler(task, taskId)}><Text>
            <Icon name="check-square-o" size={20} color="#900" />
          </Text></TouchableOpacity>
          <Text style={styles.task}>{task}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: 10}} onPress={() => updateHandler(task, taskId)}>
            <Text><PencilIcon name="pencil" size={25} color="#900" /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTaskHandler(taskId)}>
            <Text><Icon name="remove" size={20} color="#900" /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );

  const renderItem = ({ item }) => (
    <Item task={item.task} taskId={item.taskId} />
  )



  return (
    [task, setTask, taskAddHandler, flag, ctaUpdateHandler , renderItem, tasksFromStore, navigateToCompleteList, completedItems, signOutHandler, userName]
  )
}