const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

import { db } from "../../config/Firebase";

export const fetchTask= createAsyncThunk("fetch/task", async (userId) => {
    console.log("userId in fetch user", userId);
    try {
        const tasksFetched=await db.collection("tasks").where("userId", "==", userId).get()   
        console.log("tasks fetched", tasksFetched); 
        const completedTasksFetched=await db.collection("completedTasks").where("userId", "==", userId).get()    
        
        const tasksFromFirebase=[]
        const completedTasksFromFirebase=[]

        tasksFetched.forEach(doc => {
            tasksFromFirebase.push({
                taskId: doc.id,
                ...doc.data()
            })
        })

        completedTasksFetched.forEach(doc => {
            completedTasksFromFirebase.push({
                completedTaskId: doc.id,
                ...doc.data()
            })
        })
        
        return {tasksFromFirebase, completedTasksFromFirebase}
    } catch (error) {
        console.log("error in task add action", error);
    }
})

export const addTask= createAsyncThunk("add/task", async (newTask) => {
    try {
        await db.collection("tasks").add(newTask)         
        return newTask
    } catch (error) {
        console.log("error in task add action", error);
    }
})

export const taskUpdationAction= createAsyncThunk("update/task", async (data) => {
    try {
        const res=await db.collection("tasks").doc(data.taskId).update(data)  
        return data
    } catch (error) {
        console.log("error while updating task", error);
    }
})

export const deleteTask= createAsyncThunk("delete/todoTask", async (id) => {
    try {
        await db.collection("tasks").doc(id).delete()
        return id         
    } catch (error) {
        console.log("error while deleting TODo screen task", error);
    }
})

export const addCompletedTask= createAsyncThunk("add/completedTask", async (data) => {
    try {
        await db.collection("completedTasks").add(data) 
        await db.collection("tasks").doc(data.compTaskId).delete()        
        return data
    } catch (error) {
        console.log("error in complete task add action", error);
    }
})

export const deleteCompletedTask= createAsyncThunk("delete/completedTask", async (id) => {
    try {
        await db.collection("completedTasks").doc(id).delete()
        return id         
    } catch (error) {
        console.log("error while deleting completed task", error);
    }
})

const taskSlicer= createSlice({
    name: "addingTask",
    initialState: {
        tasks: [],
        completedTasks: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTask.fulfilled, (state, action) => {
            
            state.tasks= action.payload.tasksFromFirebase
            state.completedTasks= action.payload.completedTasksFromFirebase
        })
        .addCase(addTask.fulfilled, (state, action) => {
            // console.log("fetcjTask reducer", action.payload);
            state.tasks.push(action.payload)
        })
        .addCase(taskUpdationAction.fulfilled, (state, action) => {
            const taskUpdation= state.tasks.map((task, index) => {
                if(task.taskId === action.payload.taskId){
                    return action.payload
                }else{
                    return task
                }
            })
            state.tasks=taskUpdation
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
           
            const tasksAfterDeletion=state.tasks.filter((item) => item.taskId !== action.payload)
            state.tasks= tasksAfterDeletion
        })
        .addCase(addCompletedTask.fulfilled, (state, action) => {
            
            state.completedTasks.push(action.payload)
            const afterTaskFinished=state.tasks.filter((item) => item.taskId !== action.payload.compTaskId )
            state.tasks= afterTaskFinished

        })
        .addCase(deleteCompletedTask.fulfilled, (state, action) => {
          
            const compTaskAfterDeletion=state.completedTasks.filter((item) => item.completedTaskId !== action.payload)
            state.completedTasks= compTaskAfterDeletion
        })
    }
})

export default taskSlicer.reducer