import React from 'react';
import { Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';
import { MovieDetail } from '../models/movie';
import { Cast } from '../models/movieCredits';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieDetail,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color='grey'
                        size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 15 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList
                    style={{marginTop: 10, height: 60}}
                    data={cast}
                    keyExtractor={({ item }: { item: Cast }) => item?.cast_id.toString()}
                    renderItem={({ item }: { item: Cast }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
}