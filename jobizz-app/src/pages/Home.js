import React from 'react';
import { StyleSheet, View } from 'react-native';
import FeaturedJobs from '../components/FeaturedJobs';
import HomeHeader from '../components/HomeHeader';
import PopularJobs from '../components/PopularJobs';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <HomeHeader/>
            <SearchBar/>
            <FeaturedJobs/>
            <PopularJobs/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'white',
    },

});

export default HomeScreen;