import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { More, Heart, Share, Comment, Bookmark } from "../icons"



function Post({ post, like }) {
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
            <View style={styles.post}>
                <Image
                    style={styles.photo}
                    source={{
                        uri: post.image
                    }}  />
            </View>
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7} >
                            <Heart size={24} fill='#222' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7} >
                            <Comment size={24} fill='#222' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7} >
                            <Share size={24} fill='#222' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} >
                        <Bookmark size={24} fill='#222' />
                    </TouchableOpacity>
                </View>
                <Text>Likes</Text>
            </View>
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
    },
    photo: {
        width: '100%',
        height: 400
    },
    post: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,

    },
    leftActions: {
        flexDirection: 'row'
    },
    action: {
        marginRight: 12
    }
})