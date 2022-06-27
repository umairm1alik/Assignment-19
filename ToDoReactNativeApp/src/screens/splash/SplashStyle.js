import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6E6",
        
    },
    circleImg: {
        position: "absolute",
        top: 0
    },
    innerContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    splashHeading : {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: "700",
        color: "#000000",
        marginTop: 68

    },
    descrText: {
        fontFamily: "poppins",
        fontSize: 18,
        fontWeight: "400",
        color: "#000000",
        width: 242,
        height: "auto",
        textAlign: "center",
        marginTop: 15,

    }

})