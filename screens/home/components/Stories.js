import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import comments from "../../../data/comments.json"

function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {comments.map(story => (
                    <View key={story.id} style={styles.story}>
                        <View style={styles.cover}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: story.avatar
                                }}
                            />
                            <Text
                                style={styles.username}
                                numberOfLines={1} >
                                {story.username}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    stories: {
        height: 100,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    story: {
      width: 65,
        marginHorizontal: 8,
    },
    cover: {
        width: 68,
        height: 68,
        borderRadius: 100,
        borderWidth: 1.8,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
        resizeMode: 'cover',


    },
    username: {
        fontSize: 12,
        paddingTop: 5,

    }
})