import {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type MessageProps = {
    date: string;
    text: string;
    username: string;
    isMe: boolean;
}

const Message: FC<MessageProps> = ({isMe, date, text, username}) => {
    return (
        <View style={[styles.container, isMe ? styles.containerRight : styles.containerLeft]}>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.about}>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    );
};

export default memo(Message);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2AABEE",
        borderRadius: 5,
        marginBottom: 15,
        padding: 15,
        position: "relative",
        width: "70%"
    },
    containerRight: {
      marginLeft: "auto"
    },
    containerLeft: {
      marginRight: "auto"
    },
    username: {
        color: "#fff"
    },
    text: {
        color: "#eee",
    },
    date: {
        color: "#eee"
    },
    about: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
});
