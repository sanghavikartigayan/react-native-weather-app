import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View} from 'react-native';
import { initWeatherData } from '../middleware/fetchData';
import { Spinner } from 'native-base';
import Item from './Item';

const TableView = props => {
    const {onInitWeatherData, data, error, loading, message} = props;

    useEffect(() => {
        onInitWeatherData();
    }, [onInitWeatherData]);

    return (

        
       <View>
            {(!loading && data) ?
            (<FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.Date}
                />
            ) : <Spinner />}
        </View>
    );
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps, mapDispatchToProps)(TableView);