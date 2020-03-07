import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Item({ item }) {
    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
            {
                item.TempAvgF >= 60 ?  <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} /> :
                <MaterialCommunityIcons size={48} name="weather-snowy-rainy" color={'#fff'} />
            }
            <Text style={styles.tempText}>Temperature F˚</Text>
        </View>
        <ImageBackground source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={styles.backgroundImage}>
                <View style={styles.overlay}/>
            </ImageBackground>
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>{item.TempAvgF}</Text>
            <Text style={styles.subtitle}>High: {item.TempHighF}  Low: {item.TempLowF}</Text>
            <Text style={styles.subtitle}>{item.Date}</Text>
            {item.Events ? <Text style={styles.subTitle2}>{item.Events}</Text> : null }
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733'
      },
      headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      tempText: {
        fontSize: 48,
        color: '#fff'
      },
      bodyContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 25,
        marginBottom: 40
      },
      title: {
        fontSize: 48,
        color: '#fff',
      },
      subtitle: {
        fontSize: 15,
        color: '#fff'
      },
      contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        borderBottomColor:'#E0E0E0'
      },
      Footer: {
          marginBottom: 20
      },
      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'red',
      opacity: 0.3
    },
    subTitle2: {
        fontSize: 17,
        color: '#fff'
    }
  })
  export default Item;