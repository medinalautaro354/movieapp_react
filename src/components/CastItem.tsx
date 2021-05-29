import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../models/movieCredits';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={styles.container}>
            {(actor.profile_path) &&
                (<Image
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                    source={{ uri }}
                />)}

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        height: 50,
        marginHorizontal: 20,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 10,
        marginRight: 10,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
})