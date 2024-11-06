import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Pagamento() {
    const [email, setEmail] = useState(''); // State for email
    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleConcluirCompra = () => {
        if (!email) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
        } else {
            Alert.alert("Sucesso", `Transação concluída. O ingresso será enviado para: ${email}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Vamos concluir sua compra!</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Número do cartão</Text>
                <TextInput
                    placeholder="Número do seu cartão"
                    style={styles.input}
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />

                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Nome Completo como no cartão"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.title}>CPF</Text>
                <TextInput
                    placeholder="CPF"
                    style={styles.input}
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                />

                <Text style={styles.title}>Validade</Text>
                <TextInput
                    placeholder="Validade do seu cartão"
                    style={styles.input}
                    keyboardType="numeric"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                />

                <Text style={styles.title}>Código de segurança</Text>
                <TextInput
                    placeholder="CVV"
                    style={styles.input}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    value={cvv}
                    onChangeText={setCvv}
                />

                {/* Email Input */}
                <Text style={styles.title}>Email para envio do ingresso</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={styles.button} onPress={handleConcluirCompra}>
                    <Text style={styles.buttonText}>Concluir compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#451776',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        width: '80%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#451776',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
