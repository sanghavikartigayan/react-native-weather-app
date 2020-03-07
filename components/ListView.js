import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { FlatList, View, ImageBackground, StyleSheet, TouchableHighlight, Text} from 'react-native';
import { initWeatherData } from '../middleware/fetchData';
import ItemList from './ItemList';
import Item from './Item';
import Spinner from 'react-native-loading-spinner-overlay';
import { Divider } from 'react-native-elements';
import Colors from '../assets/utils';
import { Icon } from 'react-native-elements';

function ListView({onInitWeatherData, data, error, loading, message, navigation}) {
    const date = "2017-07-31";
    const currentDayData = data.filter(d => d.Date == date);
    const [sorted, setSorted] = useState(false);

    if(sorted) {
        data = data.slice().sort((a,b) => b.Date - a.Date);
        setInterval(function(){ loading = true }, 3000);
    } else {
        data = data.slice().reverse();
    }

    useEffect(() => {
        onInitWeatherData();
    }, [onInitWeatherData]);

    return (
        <View>
            <ImageBackground source={require('../assets/lineraGradient.png')} style={{width: '100%', height: '100%'}}>
                <TouchableHighlight style={styles.cardContainer}>
                        {
                         currentDayData[0] ?
                          (
                            <View style={styles.topSection}>
                                <View style={styles.card}>
                                    <Text style={styles.Title}>{currentDayData[0].TempAvgF}° F</Text>
                                    <Text style={styles.subTitle}>{currentDayData[0].Events}</Text>
                                    <Text style={styles.subTitle}>Humidity</Text>
                                    <Text style={styles.subTitle2}>{currentDayData[0].HumidityAvgPercent}° F</Text>
                                </View>
                                <View>
                                    <Text>SVG</Text>
                                </View>
                            </View>
                         )
                             : 
                        (
                            <View style={styles.topSection}>
                                <View style={styles.card}>
                                    <Text style={styles.subTitle2}>No data</Text>
                                </View>
                            </View>
                        )  
                        }
                       
                </TouchableHighlight>        
                <Divider style={styles.divider} />
                <View style={styles.functionality}>
                    <Text style={styles.byDate}>By Date</Text>
                    <View style={styles.filterSortSection}>
                        <Icon name='filter' type='font-awesome' color={Colors.white} onPress={() => console.log('filter')} />
                        <Text>     </Text>
                        <Icon name='sort' type='font-awesome' color={Colors.white} onPress={() => setSorted(currentState => !currentState)} />
                    </View>
                </View>
                {(!loading && data) ?
                (<FlatList
                    data={data}
                    renderItem={({ item }) => <ItemList item={item} />}
                    keyExtractor={item => item.Date}
                    />
                ) : <Spinner
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    />}
           </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 5,
    },
    topSection: {
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    card: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: 150,
        width: 200,
        alignItems: 'center'
    },
    divider: {
        backgroundColor: 'white',
        margin: 10
    },
    spinnerTextStyle: {
      color: 'black'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    functionality: {
        marginHorizontal: 40,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    filterSortSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    Title: {
        fontSize: 24,
    }, 
    subTitle: {
        fontSize: 20,
    },
    subTitle2: {
        color: Colors.secondary,
        fontSize: 18
    },
    byDate: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }

  });

const mapStateToProps = state => {
    const { data, loading, error, message } = state.fetchDataReducer;

    return {
        data,
        error,
        loading,
        message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInitWeatherData: () => dispatch(initWeatherData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);