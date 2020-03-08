import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { FlatList, View, ImageBackground, StyleSheet, TouchableHighlight, Text, Picker, Button} from 'react-native';
import { initWeatherData } from '../middleware/fetchData';
import ItemList from './ItemList';
import { Divider } from 'react-native-elements';
import Colors from '../assets/utils';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListView({onInitWeatherData, data, error, loading, message, navigation}) {
    const date = "2017-07-31";
    const currentDayData = data.filter(d => d.Date == date);
    const [sorted, setSorted] = useState(false);
    const [filterSelected, setFilterSelected] = useState(false);
    const [filterDay, setFilterDay] = useState(null);
    const [filterMonth, setFilterMonth] = useState(null);
    const [filterYear, setFilterYear] = useState(null);
    const [filterDate, setFilterDate] = useState(null);
    let searchDate;
    const [filteredData, setFilteredData] = useState(null);
    const [resetFilter, setResetFilter] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    if(sorted) {
        data = data.slice().sort((a,b) => b.Date - a.Date);
        setInterval(function(){ loading = true }, 3000);4
    } else {
        data = data.slice().reverse();
    }

    useEffect(() => {
        onInitWeatherData();
    }, [onInitWeatherData]);

    function applyFilter() {
        if(filterDay && filterMonth && filterYear &&  filterSelected) {
            let newTempData = [...data];
            searchDate = filterYear + '-' + filterMonth + '-' + filterDay;
            setFilterDate(searchDate);
            newTempData = data.filter(i => i.Date === searchDate);
            setFilterDay(null);
            setFilterMonth(null);
            setFilterYear(null);
            searchDate = null;
            setFilterDate(null);
            setFilteredData(newTempData); 
        } else {
            resetFilterCall();
        }
    }

    function resetFilterCall() {
        setFilterSelected(false);
        setFilterDay(null);
        setFilterMonth(null);
        setFilterYear(null);
        searchDate = null;
        setFilterDate(null);
        setFilteredData(data);
        setResetFilter(true);
    }

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
                        <Icon name='filter' type='font-awesome' color={Colors.white} onPress={() => setFilterSelected(filterSelected => !filterSelected)} />
                        <Text>     </Text>
                        <Icon name='sort' type='font-awesome' color={Colors.white} onPress={() => setSorted(currentState => !currentState)} />
                    </View>
                </View>
                {
                    filterSelected ?
                    <View>
                <View style={styles.filterContainer}>
                    <Picker
                        selectedValue={filterDay}
                        style={styles.filterDate}
                        onValueChange={(itemValue, itemIndex) => setFilterDay(itemValue)}>
                        <Picker.Item label="DD" value="null" />
                        <Picker.Item label="01" value="01" />
                        <Picker.Item label="02" value="02" />
                        <Picker.Item label="03" value="03" />
                        <Picker.Item label="04" value="04" />
                        <Picker.Item label="05" value="05" />
                        <Picker.Item label="06" value="06" />
                        <Picker.Item label="07" value="07" />
                        <Picker.Item label="08" value="08" />
                        <Picker.Item label="09" value="09" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="11" value="11" />
                        <Picker.Item label="12" value="12" />
                        <Picker.Item label="13" value="13" />
                        <Picker.Item label="14" value="14" />
                        <Picker.Item label="15" value="15" />
                        <Picker.Item label="16" value="16" />
                        <Picker.Item label="17" value="17" />
                        <Picker.Item label="18" value="18" />
                        <Picker.Item label="19" value="19" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="21" value="21" />
                        <Picker.Item label="22" value="22" />
                        <Picker.Item label="23" value="23" />
                        <Picker.Item label="24" value="24" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="26" value="26" />
                        <Picker.Item label="27" value="27" />
                        <Picker.Item label="28" value="28" />
                        <Picker.Item label="29" value="29" />
                        <Picker.Item label="30" value="30" />
                        <Picker.Item label="31" value="31" />
                    </Picker>
                    <Picker
                        selectedValue={filterMonth}
                        style={styles.filterDate}
                        onValueChange={(itemValue, itemIndex) => setFilterMonth(itemValue)}>
                        <Picker.Item label="MM" value="null" />
                        <Picker.Item label="January" value="01" />
                        <Picker.Item label="Febraury" value="02" />
                        <Picker.Item label="March" value="03" />
                        <Picker.Item label="April" value="04" />
                        <Picker.Item label="May" value="05" />
                        <Picker.Item label="June" value="06" />
                        <Picker.Item label="July" value="07" />
                        <Picker.Item label="August" value="08" />
                        <Picker.Item label="September" value="09" />
                        <Picker.Item label="October" value="10" />
                        <Picker.Item label="November" value="11" />
                        <Picker.Item label="December" value="12" />
                    </Picker>
                    <Picker
                        selectedValue={filterYear}
                        style={styles.filterDate}
                        onValueChange={(itemValue, itemIndex) => setFilterYear(itemValue)}>
                        <Picker.Item label="YYYY" value="null" />
                        <Picker.Item label="2017" value="2017" />
                        <Picker.Item label="2016" value="2016" />
                        <Picker.Item label="2015" value="2015" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2013" value="2013" />
                    </Picker>
                </View>
                <View style={styles.filterContainerButton}>
                    <Button title="Go" color={Colors.primary} onPress={() => applyFilter()} />
                    <View style={{marginHorizontal: 8}}></View>
                    <Button title="Reset" color='red' onPress={() => resetFilterCall()} />
                </View>
            </View>
                : null}
                {(!loading && data && !filteredData) ?
                (<FlatList
                    data={data}
                    renderItem={({ item }) => <ItemList item={item} />}
                    keyExtractor={item => item.Date}
                    />
                ) :<FlatList
                    data={filteredData}
                    renderItem={({ item }) => <ItemList item={item} />}
                    keyExtractor={item => item.Date}
                />}
           </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 5,
    },
    datePickerContainer: {
        flex: 1,
        flexGrow: 1,
        marginTop: 20,
        backgroundColor: 'transparent'
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
        shadowOpacity: 0.26
    },
    divider: {
        backgroundColor: 'white',
        margin: 10,
        height: 1
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
        marginVertical: 8,
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
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginBottom: 30,
        alignItems: 'center'
    },
    filterContainerButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 50,
        marginBottom: 20,
    },
    filterDate: {
        color: Colors.black,
        height: 50,
        width: 100
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