import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import Colors from '../assets/utils';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

function Item({ route, navigation }) {
  const { Date } = route.params;
  const { item } = route.params;

  let weatherSybmol = 'weather-sunny';
  if (item.TempAvgF > 80 && item.TempAvgF <= 90 && item.Events === '-') {
    weatherSybmol = 'weather-sunny';
  } else if (item.TempAvgF > 70 && item.TempAvgF <= 80 && item.Events === '-') {
    weatherSybmol = 'weather-partlycloudy';
  } else if (item.TempAvgF > 60 && item.TempAvgF <= 70 && item.Events === '-') {
    weatherSybmol = 'weather-rainy';
  } else if (item.TempAvgF > 50 && item.TempAvgF <= 60 && item.Events === '-') {
    weatherSybmol = 'weather-pouring';
  } else if (item.TempAvgF > 40 && item.TempAvgF <= 50 && item.Events === '-') {
    weatherSybmol = 'weather-snowy-rainy';
  } else if (item.TempAvgF > 30 && item.TempAvgF <= 40 && item.Events === '-') {
    weatherSybmol = 'weather-snowy';
  } else if (item.Events == 'Rain , Thunderstorm') {
    weatherSybmol = 'weather-lightning-rainy';
  } else if (item.Events == 'Rain') {
    weatherSybmol = 'weather-rainy';
  } else if (item.Events == 'Thunderstorm') {
    weatherSybmol = 'weather-lightning';
  } else if (item.Events == 'Rain , Snow') {
    weatherSybmol = 'weather-snowy-rainy';
  } else if (item.Events == 'Fog') {
    weatherSybmol = 'weather-fog';
  } else if (item.Events == 'Fog , Rain') {
    weatherSybmol = 'weather-rainy';
  } else if (item.Events == 'Fog , Rain , Thunderstorm') {
    weatherSybmol = 'weather-lightning-rainy';
  }

  return (
    <ImageBackground source={require('../assets/lineraGradient.png')} style={{ width: '100%', height: '100%' }}>
      <TouchableHighlight style={styles.cardContainer} underlayColor={Colors.primary}>
        {item ?
          (
            <View style={styles.topSection}>
              <View style={styles.card}>
                <Text style={styles.Title}>{item.TempAvgF}° F</Text>
                <Text style={styles.subTitle}>{item.Events}</Text>
                <Text style={styles.subTitle}>Humidity</Text>
                <Text style={styles.subTitle2}>{item.HumidityAvgPercent}° F</Text>
                <Text style={styles.subTitle3}>{Date}</Text>
              </View>
              <View>
                <MaterialCommunityIcons size={100} name={weatherSybmol} color={'#fff'} />
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

      <ScrollView
        horizontal
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        pagingEnabled={true}
        bounces
        contentInset={{
          top: 0,
          left: 20,
          bottom: 0,
          right: 20,
        }}>
        {/* Card 1 */}
        <View style={styles.horizontalSwipCard}>
          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Dew</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Point Avg</Text>
              <Text style={styles.justFontSize}>{item.DewPointAvgF}° F</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Point High</Text>
              <Text style={styles.justFontSize}>{item.DewPointHighF}° F</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Point Low</Text>
              <Text style={styles.justFontSize}>{item.DewPointLowF}° F</Text>
            </View>
          </View>

          <Divider style={{ backgroundColor: Colors.black, height: 1 }} />

          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Humidity</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Point %</Text>
              <Text style={styles.justFontSize}>{item.HumidityAvgPercent}%</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>High %</Text>
              <Text style={styles.justFontSize}>{item.HumidityHighPercent}%</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Low %</Text>
              <Text style={styles.justFontSize}>{item.HumidityLowPercent}%</Text>
            </View>
          </View>
        </View>
        {/* End of Card 1 */}

        {/* Card 2 */}
        <View style={styles.horizontalSwipCard}>
          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Sea Level</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Pressure Avg Inches</Text>
              <Text style={styles.justFontSize}>{item.SeaLevelPressureAvgInches}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Pressure High Inches</Text>
              <Text style={styles.justFontSize}>{item.SeaLevelPressureHighInches}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Pressure Low Inches</Text>
              <Text style={styles.justFontSize}>{item.SeaLevelPressureLowInches}</Text>
            </View>
          </View>

          <Divider style={{ backgroundColor: Colors.black, height: 1 }} />

          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Visibility</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Avg Miles</Text>
              <Text style={styles.justFontSize}>{item.VisibilityAvgMiles}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>High Miles</Text>
              <Text style={styles.justFontSize}>{item.VisibilityHighMiles}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Low Miles</Text>
              <Text style={styles.justFontSize}>{item.VisibilityLowMiles}</Text>
            </View>
          </View>
        </View>
        {/* End of Card 2 */}

        {/* Card 3 */}
        <View style={styles.horizontalSwipCard}>
          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Wind</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Avg MPH</Text>
              <Text style={styles.justFontSize}>{item.WindAvgMPH}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Gust MPH</Text>
              <Text style={styles.justFontSize}>{item.WindGustMPH}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>High MPH</Text>
              <Text style={styles.justFontSize}>{item.WindHighMPH}</Text>
            </View>
          </View>

          <Divider style={{ backgroundColor: Colors.black, height: 1 }} />

          <View style={styles.horizontalCardItem}>
            <Text style={styles.carTitle}>Percipitation & Temperature</Text>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Percipitation Sum Inches</Text>
              <Text style={styles.justFontSize}>{item.PercipitationSumInches === 0 ? '0' : item.PercipitationSumInches}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Temperature High</Text>
              <Text style={styles.justFontSize}>{item.TempHighF}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.justFontSize}>Temperature Low</Text>
              <Text style={styles.justFontSize}>{item.TempLowF}</Text>
            </View>
          </View>
        </View>
        {/* End of Card 3 */}

      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={styles.pagination} />
        <View style={styles.pagination} />
        <View style={styles.pagination} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5
  },
  topSection: {
    flexDirection: 'row',
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
    textAlign: 'center',
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
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
  Title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 15
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  subTitle2: {
    color: Colors.secondary,
    fontSize: 18,
    textAlign: 'center',
    padding: 15
  },
  subTitle3: {
    textAlign: 'center'
  },
  horizontalSwipCard: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 10,
    borderRadius: 15,
    height: 300,
    width: 320,
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  carTitle: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 15,
    fontWeight: 'bold'
  },
  horizontalCardItem: {
    flexDirection: 'column',
    width: width - 80,
    height: '40%',
    margin: 10,
    paddingHorizontal: 25
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  justFontSize: {
    fontSize: 17,
    paddingBottom: 8
  },
  pagination: {
    borderRadius: 50,
    width: 5,
    height: 5,
    padding: 5,
    backgroundColor: Colors.primary,
    marginTop: 5,
    marginBottom: 15
  }
})

export default Item;