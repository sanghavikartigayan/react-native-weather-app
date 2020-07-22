import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../assets/utils';

function HomePage({ navigation }) {
    return (
        <View>
            <ImageBackground
                source={require('../assets/lineraGradient.png')}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Austin</Text>
                    <Text style={styles.subtitle}>Weather</Text>
                    <Text style={styles.subtitle}>Application</Text>
                    <Button
                        title="Explore"
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate('DateLists')} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        letterSpacing: 2.5,
        shadowColor: '#E5E5E5'
    },
    subtitle: {
        fontSize: 30,
        color: 'black',
        shadowColor: '#E5E5E5'
    },
    button: {
        padding: 10,
        shadowColor: '#E5E5E5',
        marginTop: 10,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
    }
})

export default HomePage;