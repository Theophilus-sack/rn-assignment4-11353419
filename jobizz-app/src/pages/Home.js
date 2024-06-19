import React from 'react';
import { View,StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    return(
        <View>
            <HomeHeader/>
            <SearchBar/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;