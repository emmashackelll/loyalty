import React, { useRef } from 'react'; // 1. Add useRef
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default function InputBar({ text, onChangeText, onSizeChange, onSendPressed }) {
    const inputRef = useRef(null); // 2. Create the ref

    return (
        <View style={styles.inputBar}>
            <TextInput
  style={styles.textBox}
  ref={inputRef}
  multiline={true}
  onChangeText={(text) => onChangeText(text)}
  onContentSizeChange={onSizeChange}
  value={text}
/>
            <TouchableHighlight 
                style={styles.sendButton} 
                onPress={() => onSendPressed()}
            >
                <Text style={{ color: 'white' }}>Send</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },

  textBox: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginRight: 8,
    minHeight: 44,
  },

  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#ab30db',
  },
});