import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../models/movie';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const CardMovie = ({ movie, height = 400, width = 250 }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                ...styles.container,
                height,
                width
            }}>

            <View style={styles.imageContainer}>

                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 400,
        marginHorizontal: 5,
    },
    imageContainer: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flex: 1
    },
    image: {
        flex: 1,
        borderRadius: 20
    }
})