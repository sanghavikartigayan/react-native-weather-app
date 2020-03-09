import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import Colors from '../assets/utils';
import { useNavigation } from '@react-navigation/native';

function ItemList({ item, navigation }) {
    navigation = useNavigation();

    return (
        <View>
            <TouchableHighlight style={styles.container} underlayColor={Colors.primary} onPress={() => navigation.navigate('Date', {Date: item.Date, item: item})}>
                <View style={styles.list}>
                    <View style={styles.LeftItem}>
                        <Text style={styles.title}>{item.TempAvgF}° F</Text>
                    </View>
                    <View style={styles.RightItem}>
                        <Text style={styles.subtitle}>{item.Events}</Text>
                        <Text style={{textAlign: 'right'}}>{item.Date}</Text>
                    </View>
                </View>
            </TouchableHighlight>   
        </View>            
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    list: {
        flex: 1,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 4,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
    },
    title: {
        fontSize: 22
    },
    subtitle: {
        fontSize: 18
    },
    LeftItem: {
        flex: 2,
        padding: 20
    },
    RightItem: {
        padding: 20
    }
})

export default ItemList;