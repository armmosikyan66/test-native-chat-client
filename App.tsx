import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useEffect, useLayoutEffect, useState} from "react";

import socket from "./utils/socket";
import {IMessage} from "./types/IMessage";
import AddMessage from "./components/AddMessage";
import Messages from "./components/Messages";

export default function App() {
    const [username, setUsername] = useState<string>("");
    const [messages, setMessages] = useState<Array<IMessage>>([]);

    useLayoutEffect(() => {
        const fetchUsers = (): void => {
            fetch("http://localhost:8080/api")
                .then((res) => res.json())
                .then((data) => setUsername(data))
                .catch((err) => console.error(err));
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        socket.on('newMessage', (msg: IMessage): void => setMessages(prev => ([...prev, msg])));
    }, [socket]);

    return (
        <View style={styles.container}>
            <Messages username={username} messages={messages}/>
            <AddMessage username={username}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 25,
        height: "100%",
        flexDirection: "column",
    },
});
