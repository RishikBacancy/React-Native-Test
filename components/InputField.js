import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = props =>
{
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    input:{
        height:30,
        marginVertical:2,
        borderBottomColor: "gray",
        borderBottomWidth:1,
    },
});

export default InputField;