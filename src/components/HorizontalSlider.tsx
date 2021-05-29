import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../models/movie';
import { CardMovie } from './CardMovie';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (title) ? 260 : 230 }}>
            {(title) && (<Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>)}
            <FlatList
                renderItem={({ item }) => (
                    <CardMovie
                        movie={item}
                        height={200}
                        width={140}
                    />)}
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    );
}