import React from 'react';
import {
    Image, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import foto from '../assets/usuario.jpg'
import CommonStyles from '../CommonStyles';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View>
                <Image style={styles.fotoPerfil} source={foto} />
                <Text style={styles.titulo}>Wesley Lima</Text>
            </View>
            <View style={styles.botoesContainer}>
                <TouchableOpacity style={styles.botoes}>
                    <Icon color="#FFF" name="info" size={25} type="font-awesome" />
                    <Text style={styles.textoBotoes}>Informações da Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botoes}>
                    <Icon color="#FFF" name="map-marker" size={25} type="font-awesome" />
                    <Text style={styles.textoBotoes}>Endereços</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    fotoPerfil: {
        borderRadius: 75,
        height: 150,
        marginBottom: 5,
        marginTop: 30,
        width: 150,
    },
    titulo: {
        color: CommonStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    botoesContainer: {
        justifyContent: 'space-between',
        height: 100,
    },
    botoes: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corSecundaria,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: 300,
    },
    textoBotoes: {
        color: '#FFF',
        fontSize: 18,
        marginLeft: 10,
    },
});