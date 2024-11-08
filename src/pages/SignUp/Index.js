import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function SignUp() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <Animatable.View animation= "fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>É um prazer recebelo na nossa comunidade!!</Text>
        </Animatable.View>
        
        <Animatable.View animation= "fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder='Digite seu email'
              style={styles.input}
            />

       <Text style={styles.title}>Senha</Text>
            <TextInput
              placeholder='Digite sua Senha'
              style={styles.input}
            />
            <Text style={styles.title}>Confirmar Senha</Text>
            <TextInput
              placeholder='Confirme sua senha'
              style={styles.input}
            />
            <Text style={styles.title}>Telefone</Text>
            <TextInput
              placeholder='Número de Telefone'
              style={styles.input}
            />
            <Text style={styles.title}>Nascimento</Text>
            <TextInput
              placeholder='Digite sua Data de nascimento'
              style={styles.input}
            />
            <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

        </Animatable.View>
    </View>   
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#451776'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontsize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontsize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height:40, 
        marginBottom:12,
        fontSize:16,
    },
    button:{
        backgroundColor:"#451776",
        width: '100%',
        borderRadius:4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})