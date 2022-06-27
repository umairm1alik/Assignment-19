import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
        
    },
    topView: {
        flex:1,
        backgroundColor: "#CF7751"
    },
    userView:{
        flex:1,
        alignItems:'center',
        justifyContent: "center",
       

    },
    topViewBtn:{
        // flex:1,
        flexDirection: "row",
        position: "absolute",
        right: 10,
        top:10,
        
    },
    topViewBtnTxt:{
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    seprator:{
        borderEndWidth: 2,
        borderEndColor: "#FFFFFF",
        marginHorizontal:5
    },
    userName: {
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    bottomView: {
        flex: 2,
        marginTop: 20,
        marginHorizontal: 24
    },
    taskHeading:{
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: "700",
        color: "rgba(0, 0, 0, 0.8)"
    },
    tasksView: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 11,
        paddingVertical:10
        
        
    },
    dailyTaskView:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    
    },
    add:{
        color: "#000000",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 7
    
    },
    listView: {
        marginVertical: 12,
        // backgroundColor: "black",
        paddingHorizontal: 10,
        height: 350,
    },
    item:{
        flexDirection:"row"
    },
    task:{
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "Poppins",
        fontSize: 15,
        marginLeft: 5
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical:5
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }


})