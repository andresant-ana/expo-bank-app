import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Balance( { saldo, gastos } ) {
  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo atual</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: -45,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color: '#DADADA',
    marginRight: 5,
  },
  balance: {
    fontSize: 22,
    color: '#2ec617',
  },
  expenses: {
    fontSize: 22,
    color: '#ff0000',
  },
});