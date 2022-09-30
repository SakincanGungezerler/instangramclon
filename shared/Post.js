import { StyleSheet, View, Text, Image } from "react-native"
import { More } from "../icons"
import Fitimage from "./Fitimage";


function Post({ post }) {
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: post.avatar
                        }} />
                    <Text style={styles.title}>{post.username}</Text>
                </View>
                <More size={16} fill="#262626"/>
            </View>
            <Fitimage src={post.image} />
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 15,

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})