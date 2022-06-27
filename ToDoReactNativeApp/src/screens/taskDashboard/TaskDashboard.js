import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
// import FontAwesome, {SolidIcons, RegularIcons} from "react-native-fontawesome"

import { styles } from './TaskDashboardStyle'
import InputComp from '../../commonComponents/inputComp/InputComp'
import useTaskDashboard from './useTaskDashboard'



export default function TaskDashboard() {

    const [task, setTask, taskAddHandler, flag, ctaUpdateHandler, renderItem, tasksFromStore, navigateToCompleteList, completedItems, signOutHandler, userName] = useTaskDashboard()
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image source={require("../../assests/taskSamiCircle.png")} />
                <Image style={{ position: "absolute" }} source={require("../../assests/taskSamiCircle01.png")} />
                <View style={styles.topViewBtn}>
                    <TouchableOpacity onPress={navigateToCompleteList}><Text style={styles.topViewBtnTxt}>Completed Items ({completedItems.length})</Text></TouchableOpacity>
                    <View style={styles.seprator} />
                    <TouchableOpacity onPress={signOutHandler}><Text style={styles.topViewBtnTxt}>Sign out</Text></TouchableOpacity>
                </View>
                <View style={styles.userView}>
                    <Text style={styles.userName}>Welcome {userName}</Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.taskHeading}>Tasks List</Text>

                <View style={styles.tasksView}>
                    <View style={styles.dailyTaskView}>
                        <InputComp
                            placeholder="Enter Task"
                            style={{ backgroundColor: "#E5E5E5", width: 200 }}
                            onChangeText={setTask}
                            value={task}

                        />
                        {/* <TouchableOpacity onPress={ctaUpdateHandler}  ><Text style={styles.add}>fjr</Text></TouchableOpacity> */}

                        {flag ?
                            <TouchableOpacity onPress={ctaUpdateHandler}  ><Text style={styles.add}>Update</Text></TouchableOpacity>
                            :
                            <TouchableOpacity onPress={taskAddHandler} ><Text style={styles.add}>ADD</Text></TouchableOpacity>
                        }
                    </View>

                    <View style={styles.listView}>
                        {/* <Text style={{color:"#000000"}}>{task}</Text> */}
                        {tasksFromStore.length == 0 ?
                            <View><Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 20 }}>Nothing TODo</Text></View>
                            :
                            <FlatList
                                data={tasksFromStore}
                                renderItem={renderItem}
                                keyExtractor={item => item.taskId}
                            />

                        }


                    </View>
                </View>
            </View>
        </View>
    )
}