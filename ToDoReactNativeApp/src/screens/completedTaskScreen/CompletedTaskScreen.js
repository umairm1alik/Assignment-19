import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from '../taskDashboard/TaskDashboardStyle'

import useCompletedTaskScreen from './useCompletedTaskScreen'

export default function CompletedTaskScreen() {
    const [navigateHandler, completedasksFromStore, renderItem, itemsFromStore, userName, signOutHandler] = useCompletedTaskScreen()
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image source={require("../../assests/taskSamiCircle.png")} />
                <Image style={{ position: "absolute" }} source={require("../../assests/taskSamiCircle01.png")} />

                <View style={styles.topViewBtn}>
                    <TouchableOpacity onPress={navigateHandler}><Text style={styles.topViewBtnTxt}>TODo's List ({itemsFromStore.length})</Text></TouchableOpacity>
                    <View style={styles.seprator} />
                    <TouchableOpacity onPress={signOutHandler}><Text style={styles.topViewBtnTxt}>Sign out</Text></TouchableOpacity>
                </View>

                <View style={styles.userView}>
                    <Text style={styles.userName}>Welcome {userName}</Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.taskHeading}>Completed Tasks List</Text>

                <View style={styles.tasksView}>
                    <View style={styles.listView}>

                        {!completedasksFromStore.length == 0 ?
                            <FlatList
                                data={completedasksFromStore}
                                renderItem={renderItem}
                                keyExtractor={item => item.completedTaskI}
                            />
                        :
                            <View><Text style={{color: "rgba(0, 0, 0, 0.6)", fontSize: 20}}>No Task Completed</Text></View>
                        }

                        

                    </View>
                </View>
            </View>
        </View>

    )
}