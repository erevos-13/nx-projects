import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const ImageCard =() => {
    console.log('image loaded');

    const selectImageHandler = () => {
        launchImageLibrary({
            mediaType: "photo",
        }, (resp) => {
            console.log(resp);
        })
    }
    return(
        <View>
            <Image style={styles.logo}  source={{
                uri: 'https://image.shutterstock.com/image-vector/nc-initial-monogram-logo-260nw-343103510.jpg'
                }} />
                <Button title={'press for image'} onPress={selectImageHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height: 150,
        width:'100%'
    }
})

