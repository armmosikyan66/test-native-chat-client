import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FC} from "react";

export type FormButtonProps = {
    text: string;
    customStyles?: {
        [key: string]: string | number;
    },
    onPress: () => void;
}

const FormButton: FC<FormButtonProps> = ({onPress, customStyles = {}, text, ...rest}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, customStyles]}
            {...rest}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});