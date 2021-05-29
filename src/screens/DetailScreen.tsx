import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigators/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import movieDb from '../api/movieDb';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {
}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;

    const { cast, isLoading, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {(isLoading) ?
                (<ActivityIndicator size={30} color='grey' style={{ marginTop: 20 }} />)
                : (<MovieDetails
                    movieFull={movieFull!}
                    cast={cast}
                />)
            }

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color='white'
                    name='arrow-back-outline'
                    size={60}
                />
            </TouchableOpacity>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        overflow: 'hidden'
    },
    imageBorder: {
        overflow: 'hidden',
        flex: 1,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.6
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    }
});

export default DetailScreen;