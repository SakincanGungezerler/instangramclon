import  { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";

function Index() {
    return(
        <View>
            <Header />
            <Stories />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})