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
    signinHeading : {
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
        textAlign: "center",
        marginTop: 8,

    },
    signupText: {
        color: "rgba(0, 0, 0, 0.8)",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "400"

    },
    signup: {
        fontWeight: "700",
        color: "#AD491E"
    },
    forgetPass: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "400",
        color: "#B83F0B"
    }

})