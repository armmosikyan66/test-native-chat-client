import {View, KeyboardAvoidingView, StyleSheet} from "react-native";
import {FC, useState} from "react";

import FormButton from "./Button";
import FormInput from "./Input";
import socket from "../utils/socket";
import {hour, mins} from "../utils/createMessageDate";

const AddMessage: FC<{username: string}> = ({username}) => {
    const [text, setText] = useState<string>("");

    const createMessage = (): void => {
        if (!text.length) {
            return setText(() => "Text must not be empty");
        }

        const messageOptions = {
            date: `${hour}:${mins}`,
            text,
            username,
        }
        socket.emit('newMessage', messageOptions);
        setText("");
    }

    const onChange = (par: string | number): void => setText(String(par));
    const onPress = (): void => createMessage();

    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <FormInput value={text} onChange={onChange} customStyles={{width: "70%"}} placeholderText={"Create and send message"}/>
                <FormButton onPress={onPress} customStyles={{width: "30%"}} text={"Send"}/>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%"
    }
})

export default AddMessage;
