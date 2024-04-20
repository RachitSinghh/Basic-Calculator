// import { Children } from "react";
import { StyleSheet,View } from "react-native";

const Row =({children}) =>{ 
    return <View style={StyleSheet.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
})

export default Row