import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const FeaturedJobs = () => {
    const jobs = [
        { id: '1', title: 'CEO', company: 'Facebook', salary: "$340,00", location: "Accra, Ghana", image: require('../../assets/facebook.png') },
        { id: '2', title: 'Marketing Director', company: 'Google', salary: "$230,00", location: "Osu, Ghana", image: require('../../assets/google.png') },
        { id: '3', title: 'Apple Developer', company: 'Apple', salary: "$480,00", location: "Accra, Ghana", image: require('../../assets/apple.png') },
        { id: '4', title: 'Data Analyst', company: 'Facebook', salary: "$700,00", location: "Accra, Ghana", image: require('../../assets/facebook.png') },
        { id: '5', title: 'Sales Manager', company: 'Google', salary: "$960,00", location: "Osu, Ghana", image: require('../../assets/google.png') },
        { id: '6', title: 'Data Base manager', company: 'Apple', salary: "$930,00", location: "Accra, Ghana", image: require('../../assets/apple.png') },
        { id: '7', title: 'Affiliate Mnagaer', company: 'Apple', salary: "$280,00", location: "Tema, Ghana", image: require('../../assets/apple.png') },
        { id: '8', title: 'Corporate Director', company: 'Google', salary: "$880,00", location: "Mallam, Ghana", image: require('../../assets/google.png') },
    ];
    const renderJobItem = ({ item }) => (
        <View style={styles.categoryContainer}>
            <View style={styles.jobHeader}>
                <Image
                    style={styles.image}
                    source={item.image}
                />
                <View style={styles.jobTitleSection}>
                    <Text style={styles.categoryName}>{item.title}</Text>
                    <Text style={styles.companyName}>{item.company}</Text>
                </View>
            </View>
            <View style={styles.jobFooter}>
                <Text style={styles.salary}>{item.salary}</Text>
                <Text style={styles.location}>{item.location}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.featuredJobSection}>
                <View style={styles.featuredJobTitle}>
                    <Text style={styles.title}>Featured Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FlatList
                    horizontal
                    data={jobs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderJobItem}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,
    },
    featuredJobSection: {
        flexDirection: 'row',
    },
    featuredJobTitle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 200,
    },
    seeAll: {
        fontSize: 15,
        color: 'grey',
    },
    card: {
        paddingTop: 10,
        height: 200
    },
    categoryContainer: {
        width: 250,
        height: 192,
        marginRight: 10,
        backgroundColor: '#FBF9F7',
        borderRadius: 10,
        paddingLeft: 10,
    },
    jobHeader: {
        flexDirection: 'row',
    },
    jobTitleSection: {
        paddingTop: 30
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    companyName: {
        fontSize: 14,
        marginBottom: 5,
    },
    image: {
        width: 70,
        height: 100,
    },
    jobFooter: {
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'space-evenly'
    },
    salary: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 60
    },
    location: {
        fontSize: 16,
    },
});
export default FeaturedJobs;