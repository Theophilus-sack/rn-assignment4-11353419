import React from 'react';
import { Image,View, Text, StyleSheet } from 'react-native';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Text style={styles.title}>Eric Atsu</Text>
                <Text style={styles.subtitle}>eric@gmail.com</Text>
            </View>
            <Image style={styles.profilePicture}
                source={require('../../assets/profile.png')}
            />  
        </View>
      
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  userInfo: {
    paddingRight: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    color: 'grey',
  },
  profileView: {
    justifyContent: 'space-between'
  },
  profilePicture: {
    height: 50,
    width: 50,
  },
});
export default HomeHeader;