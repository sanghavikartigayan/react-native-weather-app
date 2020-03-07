import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';

function ItemList({ item, navigation }) {
    return (
        <View>
        <TouchableHighlight style={styles.container}>
            <View style={styles.list}>
                <View style={styles.LeftItem}>
                    <Text style={styles.title}>{item.TempAvgF}° F</Text>
                </View>
                <View style={styles.RightItem}>
                    <Text style={styles.subtitle}>{item.Events}</Text>
                    <Text>{item.Date}</Text>
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
        padding: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 20
    },
    subtitle: {
        fontSize: 18
    }
})
  export default ItemList;