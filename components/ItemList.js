import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import Colors from '../assets/utils';

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
        shadowColor: Colors.secondary
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