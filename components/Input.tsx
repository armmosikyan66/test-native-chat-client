import {View, TextInput, StyleSheet} from 'react-native';
import {FC} from "react";

export type FormInputProps = {
    placeholderText: string;
    customStyles?: {
        [key: string]: string | number;
    },
    onChange: (value: string | number) => void;
    value: string | number;
}

const FormInput: FC<FormInputProps> = ({value, onChange, customStyles = {}, placeholderText, ...rest}) => {
    const changeInpVal = (value: string | number): void => {
        onChange(value);
    }

    return (
        <View style={[styles.inputContainer, customStyles]}>
            <TextInput
                value={String(value)}
                onChangeText={changeInpVal}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        width: '100%',
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginBottom: 10,
        width: "100%",
        height: 40,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});