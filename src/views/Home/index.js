import {StatusBar} from 'expo-status-bar';
import Header from '../../components/Header';
import Balance from "../../components/Balance";
import {StyleSheet, Text, View,FlatList } from 'react-native';
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";


const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        data: '17/05/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix cliente x',
        value: '2.500,90',
        data: '17/05/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Salario',
        value: '7.300,90',
        data: '17/05/2022',
        type: 1
    }
]
export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Gustavo Spindola"/>
            <Balance saldo="9.250.90" gastos="-527,00"/>
            <StatusBar style="auto"/>
            <Actions/>
            <Text style={styles.title}> Últimas movimentações</Text>
            <FlatList style={styles.list}
                      data={list}
                      keyExtractor={(item => String(item.id))}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item})=> <Movements data={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin:14
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});
