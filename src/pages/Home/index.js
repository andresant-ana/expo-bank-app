import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';


const list = [
    {
        id: 1,
        label: 'Conta de internet',
        value: '150,00',
        date: '10/12/2023',
        type: 0
    },
    {
        id: 2,
        label: 'Uber',
        value: '22,00',
        date: '18/01/2024',
        type: 0
    },
    {
        id: 3,
        label: 'Salário',
        value: '2.100,00',
        date: '05/02/2024',
        type: 1
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="André Sant'Ana" />

        <Balance saldo="9.250,90" gastos="-527,00" />

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  list: {
    marginStart: 20,
    marginEnd: 20,
  }
});
