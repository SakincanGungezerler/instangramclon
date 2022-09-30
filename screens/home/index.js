import  { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import posts from "../../data/posts.json"
import Post from "../../shared/Post"

function Index() {
    return(
        <View>
            <Header />
            <Stories />
            {posts.map(post => <Post key={post.id} post={post}/>)}
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