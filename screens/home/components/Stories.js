import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import stories from "../../../data/stories";

function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {stories.map(story => (
                    <View style={styles.story}>
                        <View style={styles.cover}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: story.user.avatar
                                }}
                            />
                            <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>
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