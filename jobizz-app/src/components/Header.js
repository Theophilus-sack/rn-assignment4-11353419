import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
            <View>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.apply}>Let's log in. Apply to jobs! </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 130,
    paddingBottom: 60,
    paddingLeft: 25,
  },
  title: {
    fontWeight:'bold',
    fontSize: 22,
    color: '#356899',
    textAlign: 'left',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  apply: {
    fontSize: 14,
    paddingTop: 5,
    color: 'grey',
  }
});
export default Header;
