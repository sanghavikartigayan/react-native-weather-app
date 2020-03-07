import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { FlatList, View, ImageBackground, StyleSheet, TouchableHighlight, Text} from 'react-native';
import { initWeatherData } from '../middleware/fetchData';
import ItemList from './ItemList';
import Spinner from 'react-native-loading-spinner-overlay';
import { Divider } from 'react-native-elements';
import Colors from '../assets/utils';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";

function ListView({onInitWeatherData, data, error, loading, message, navigation}) {
    const date = "2017-07-31";
    const currentDayData = data.filter(d => d.Date == date);
    const [sorted, setSorted] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [displayedDate, setDisplayedDate] = useState(moment);
    const [filterSelected, setFilterSelected] = useState(false);

    if(sorted) {
        data = data.slice().sort((a,b) => b.Date - a.Date);
        setInterval(function(){ loading = true }, 3000);
    } else {
        data = data.slice().reverse();
    }

    useEffect(() => {
        onInitWeatherData();
    }, [onInitWeatherData]);

console.log(displayedDate);

    return (
        <View>
            <ImageBackground source={require('../assets/lineraGradient.png')} style={{width: '100%', height: '100%'}}>
                <TouchableHighlight style={styles.cardContainer} underlayColor={Colors.primary} onPress={() => navigation.navigate('Date', {Date: currentDayData[0].Date, item: currentDayData[0]})}>
                        {
                         currentDayData[0] ?
                          (
                            <View style={styles.topSection}>
                                <View style={styles.card}>
                                    <Text style={styles.Title}>{currentDayData[0].TempAvgF}° F</Text>
                                    <Text style={styles.subTitle}>{currentDayData[0].Events}</Text>
                                    <Text style={styles.subTitle}>Humidity</Text>
                                    <Text style={styles.subTitle2}>{currentDayData[0].HumidityAvgPercent}° F</Text>
                                    <Text style={styles.subTitle3}>{currentDayData[0].Date}</Text>
                                </View>
                                <View>
                                     <MaterialCommunityIcons size={100} name='weather-sunny' color={'#fff'} /> 
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
                        { filterSelected ? 
                            <DateRangePicker
                            onChange={(date) => setDisplayedDate(date)}
                            endDate={endDate}
                            startDate={startDate}
                            displayedDate={displayedDate}
                            range>
                            </DateRangePicker> 
                        : null}
                        <Icon name='filter' type='font-awesome' color={Colors.white} onPress={() => setFilterSelected(currentFilter => !currentFilter)} />
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    card: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: 200,
        width: 200,
        alignItems: 'center',
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
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
        textAlign: 'center'
    }, 
    subTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    subTitle2: {
        color: Colors.secondary,
        fontSize: 18,
        textAlign: 'center'
    },
    subTitle3: {
        textAlign: 'center'
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