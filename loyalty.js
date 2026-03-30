import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoyaltyScreen() {
  // Replace this with the actual count from your backend or SMS chatbot data
  const [stamps, setStamps] = useState(7); 
  const totalNeeded = 10;

  const renderStamps = () => {
    let items = [];
    for (let i = 1; i <= totalNeeded; i++) {
      const isStamped = i <= stamps;
      const isLast = i === totalNeeded;

      items.push(
        <View key={i} style={[styles.stamp, isStamped && styles.stampedCircle]}>
          {isStamped ? (
            <Ionicons name="cafe" size={30} color="#fff" />
          ) : (
            <Text style={styles.stampNumber}>{isLast ? '🎁' : i}</Text>
          )}
        </View>
      );
    }
    return items;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Coffee Rewards</Text>
        <Text style={styles.subtitle}>
          {stamps >= totalNeeded 
            ? "Your 10th coffee is FREE!" 
            : `${totalNeeded - stamps} more coffees until a free one!`}
        </Text>
        
        <View style={styles.grid}>
          {renderStamps()}
        </View>

        {stamps >= totalNeeded && (
          <TouchableOpacity style={styles.redeemButton}>
            <Text style={styles.redeemText}>Claim Free Coffee</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#fff', padding: 25, borderRadius: 20, width: '90%', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4b2c20', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginVertical: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 },
  stamp: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#e0e0e0', margin: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#d1d1d1' },
  stampedCircle: { backgroundColor: '#6f4e37', borderColor: '#4b2c20' },
  stampNumber: { fontSize: 18, color: '#999', fontWeight: 'bold' },
  redeemButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  redeemText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});
