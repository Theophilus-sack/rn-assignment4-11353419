import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const SocialMedia = ({source}) => {
    return(
        <TouchableOpacity style={styles.button}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  image: {
    width: 60,
    height: 100,
  },
});
export default SocialMedia;