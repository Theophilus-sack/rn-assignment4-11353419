import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const PopularJobs = () => {

  const jobsData = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: "$180,00/y", location: "Accra, Ghana", image: require('../../assets/burger-king.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: "$160,00/y", location: "Osu, Ghana", image: require('../../assets/beats.png') },
   // { id: '3', title: 'Sales Manager', company: 'Google', salary: "$150,00/y", location: "Osu, Ghana", image: require('../../assets/google.png') },
    { id: '4', title: 'Google Dev OPs', company: 'Google', salary: "$190,00/y", location: "Osu, Ghana", image: require('../../assets/google.png') },
    { id: '5', title: 'Apple Developer', company: 'Apple', salary: "$170,00/y", location: "Accra, Ghana", image: require('../../assets/apple.png') },
    { id: '6', title: 'Sales Manager', company: 'Burger King', salary: "$140,00/y", location: "Accra, Ghana", image: require('../../assets/burger-king.png') },
    { id: '7', title: 'Apple Sn Developer', company: 'Apple', salary: "$170,00/y", location: "Accra, Ghana", image: require('../../assets/apple.png') },
    { id: '8', title: 'Apple Jn Developer', company: 'Apple', salary: "$170,00/y", location: "Accra, Ghana", image: require('../../assets/apple.png') },
  ];
  
  return (
    <View style={styles.container}>
        <View style={styles.popularJobSection}>
            <View style={styles.popularJobTitle}>
                <Text style={styles.title}>Popular Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {jobsData.map((job, index) => (
          <View key={index} style={styles.jobView}>
            
          
            <View style={styles.jobSection}>
            
              <View style={styles.jobImageAndTitle}>
                <Image
                  style={styles.jobImage} 
                  source={job.image}/>
               
                <View style={styles.jobTitleSection}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.company}>{job.company}</Text>      
                </View>
              </View>
             
              <View style={styles.jobSalaryLocationSection}>
                  <Text style={styles.jobTitle}>{job.salary}</Text>
                  <Text style={styles.company}>{job.location}</Text>      
              </View>
            </View>
            
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  popularJobSection: {
    flexDirection: 'row',
  },
  popularJobTitle: {
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
  scrollView: {
    paddingTop: 10,
    width: '95%',
    paddingLeft: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  jobSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  jobImageAndTitle: {
    flexDirection: 'row',
  },
  jobTitleSection: {
    paddingTop: 10,
    paddingRight: 50,
  },
  jobImage: {
    width: 50,
    height: 50,
    paddingRight: 40,
  },
  jobSalaryLocationSection: {
    paddingTop: 10
  },
  jobView: {
    padding: 10,
    height: 80,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderColor: 'white',
    justifyContent: 'center'
  },
  jobTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  company: {
    textAlign: 'left',
    fontSize: 16,
    color: 'grey',
    paddingLeft: 10,
    paddingTop: 10,
  },
  
});
export default PopularJobs;