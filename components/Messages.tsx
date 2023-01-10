import React, {FC} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from "react-native";

import Message from "./Message";
import {IMessage} from "../types/IMessage";

export type MessagesProps = {
    messages: Array<IMessage>,
    username: string
}

const Messages: FC<MessagesProps> = ({messages, username}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={messages}
                    renderItem={({item}) => (
                        <Message {...item} isMe={item.username === username}  />
                    )}
                    keyExtractor={item => item.username}
                    extraData={username}
                />
            </ScrollView>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flex: 1,
    },
});
