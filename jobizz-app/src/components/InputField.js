import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
const InputField = ({placeholder}) => {
return (
    <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="grey"
    />
    
)};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '85%',
    borderRadius: 10,
  }
  
});
export default InputField;