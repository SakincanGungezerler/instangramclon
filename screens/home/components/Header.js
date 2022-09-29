import { StyleSheet, View, TouchableOpacity} from "react-native";

import  {
    Logo,
    Heart,
    Plus,
    Messenger
} from "../../../icons";

function  Header() {
    return (
        <View style={styles.header}>
            <Logo size={104} fill="#000" />
            <View style={styles.actions}>
                <Plus size={24} fill="#000" />
                <Heart size={24} fill="#000" />
                <Messenger size={24} fill="#000" />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row'

    }
})