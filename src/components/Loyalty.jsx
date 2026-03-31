import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FAB, Portal, Dialog, Button, Provider as PaperProvider } from 'react-native-paper';
import ChatView from './ChatView';

export default function Loyalty() {
  const [visible, setVisible] = useState(false);
  const [loyaltyCount, setLoyaltyCount] = useState(3); // change this starting number if you want

  const addCoffee = () => {
    if (loyaltyCount < 10) {
      setLoyaltyCount(loyaltyCount + 1);
    }
  };

  const resetLoyalty = () => {
    setLoyaltyCount(0);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Emma's Cafe</Text>
        <Text style={styles.subtitle}>Coffee Loyalty Card</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Buy 9 coffees, get the 10th free</Text>
          <Text style={styles.progressText}>
            {loyaltyCount}/10 coffees collected
          </Text>

          <View style={styles.circlesContainer}>
            {[...Array(10)].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.circle,
                  index < loyaltyCount ? styles.filledCircle : styles.emptyCircle,
                ]}
              >
                <Text style={styles.circleText}>{index + 1}</Text>
              </View>
            ))}
          </View>

          {loyaltyCount === 10 && (
            <Text style={styles.freeText}>You earned a free coffee!</Text>
          )}

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton} onPress={addCoffee}>
              <Text style={styles.buttonText}>Add Coffee</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={resetLoyalty}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Portal>
          <Dialog
            visible={visible}
            onDismiss={() => setVisible(false)}
            style={styles.dialog}
          >
            <Dialog.Title>Order Bot</Dialog.Title>
            <Dialog.Content style={styles.dialogContent}>
              <ChatView onOrderComplete={addCoffee} />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Dismiss</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <FAB
          icon="message"
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
    backgroundColor: '#fff',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#666',
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
  },
  circlesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  filledCircle: {
    backgroundColor: '#66db30',
  },
  emptyCircle: {
    backgroundColor: '#dddddd',
  },
  circleText: {
    fontWeight: '700',
    color: '#000',
  },
  freeText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#2e7d32',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#66db30',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#999',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#66db30',
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