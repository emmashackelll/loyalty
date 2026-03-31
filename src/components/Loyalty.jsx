import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Portal, Dialog, Button, Text, PaperProvider } from 'react-native-paper';
import ChatView from "./ChatView";

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text>Emma's Cafe</Text>
               <Portal>
  <Dialog
    visible={visible}
    onDismiss={() => setVisible(false)}
    style={styles.dialog}
  >
    <Dialog.Title>Order Bot</Dialog.Title>

    <Dialog.Content style={styles.dialogContent}>
      <ChatView />
    </Dialog.Content>

    <Dialog.Actions>
      <Button onPress={() => setVisible(false)}>Dismiss</Button>
    </Dialog.Actions>
  </Dialog>
</Portal>
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => setVisible(true)}
                />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  dialog: {
    alignSelf: 'center',
    width: '92%',
    maxHeight: '80%',
  },
  dialogContent: {
    height: 450,
    paddingBottom: 0,
  },
});