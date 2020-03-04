import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, List, ListItem } from 'native-base';

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
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>{item.TempAvgF}</Text>
            <Text style={styles.subtitle}>High: {item.TempHighF}  Low: {item.TempLowF}</Text>
            <Text styel={styles.subtitle}>{item.Date}</Text>
        </View>
        <Container>
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Text>Dew</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Dew Point Avg F˚</Text>
                            <Text>{item.DewPointAvgF}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Dew Point High F˚</Text>
                            <Text>{item.DewPointHighF}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Dew Point Low F˚</Text>
                            <Text>{item.DewPointLowF}</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Humidity</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Humidity Point %</Text>
                            <Text>{item.HumidityAvgPercent}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Humidity High %</Text>
                            <Text>{item.HumidityHighPercent}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Humidity Low %</Text>
                            <Text>{item.HumidityLowPercent}</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Precipitation</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Percipitation Sum Inches</Text>
                            <Text>{item.PercipitationSumInches}</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Sea Level</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Sea Level Pressure Avg Inches</Text>
                            <Text>{item.SeaLevelPressureAvgInches}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Sea Level Pressure High Inches</Text>
                            <Text>{item.SeaLevelPressureHighInches}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Sea Level Pressure Low Inches</Text>
                            <Text>{item.SeaLevelPressureLowInches}</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Visibility</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Visibility Avg Miles</Text>
                            <Text>{item.VisibilityAvgMiles}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Visibility High Miles</Text>
                            <Text>{item.VisibilityHighMiles}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Visibility Low Miles</Text>
                            <Text>{item.VisibilityLowMiles}</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Wind</Text>
                    </ListItem>                    
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Wind Avg MPH</Text>
                            <Text>{item.WindAvgMPH}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Wind Gust MPH</Text>
                            <Text>{item.WindGustMPH}</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={styles.contentContainer}>
                            <Text>Wind High MPH</Text>
                            <Text>{item.WindHighMPH}</Text>
                        </View>
                    </ListItem>
                </List>
            </Content>
            <View style={styles.Footer}></View>
            </Container>
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
        fontSize: 12,
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
      }
  })
  export default Item;