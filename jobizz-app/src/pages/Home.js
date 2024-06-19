import React from 'react';
import { View,StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import FeaturedJobs from '../components/FeaturedJobs';

const HomeScreen = () => {
    return(
        <View>
            <HomeHeader/>
            <SearchBar/>
            <FeaturedJobs/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;