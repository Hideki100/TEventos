import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Evento01() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../../assets/Rock.png')} 
                    style={{ width: '80%' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Show Rock in Rio, todos os dias!</Text>
                <Text style={styles.text}>
                    Show de rock Rock in rio que vai acontecer nos dia 13 de setembro até o dia 22 de setembro com inicio as 14:00 da tarde e termino as 22:00
                    da noite no horario de Brasília. O evento vai contar com várias participações como Mariah Carey, Shawn Mendes, Luisa Sonza e muito mais! Classificação 
                    etária de 16 anos.
                </Text>
                <Text style={ styles.text}>O show acontecera na Cidade do Rock, no Parque Olímpico, na Barra da Tijuca, no Rio de Janeiro.</Text>
                <Text style={styles.text}>O valor do ingresso é 1300 R$. Válido para todos os dias do evento.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.paymentButton]}
                    onPress={() => navigation.navigate('Pagamentos')}
                >
                    <Text style={styles.buttonText}>Pagar com Cartão de Crédito</Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.paymentButton]}
                    onPress={() => navigation.navigate('PagamentoPix')}
                >
                    <Text style={styles.buttonText}>Pagar com PIX</Text>  
                </TouchableOpacity>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#451776'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#451776',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 5,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center',
    },
    text: {
        color: '#333',  
        fontSize: 18,
        lineHeight: 22,
        marginBottom: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#451776',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paymentButton: {
        marginBottom: 16, 
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});
