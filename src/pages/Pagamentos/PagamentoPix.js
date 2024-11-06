import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function PagamentoPix() {
    const [email, setEmail] = useState(''); 
    const pixKey = "12345678900"; 

    const handleCopyPixKey = () => {
        Alert.alert("Chave PIX copiada", pixKey);
    };

    const handleSendTicket = () => {
        if (!email) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
        } else {
            Alert.alert("Sucesso", `O ingresso será enviado para: ${email}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Pagamento via PIX</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Escaneie o QR Code abaixo para pagar</Text>

                <View style={styles.qrCodeContainer}>
                    <QRCode
                        value={pixKey}
                        size={200}
                    />
                </View>

                <Text style={styles.title}>Email para envio do ingresso</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={styles.button} onPress={handleSendTicket}>
                    <Text style={styles.buttonText}>Enviar Ingresso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleCopyPixKey}>
                    <Text style={styles.buttonText}>Copiar chave PIX</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        marginBottom: 20,
        textAlign: 'center',
    },
    qrCodeContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        width: '80%', 
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#451776',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

