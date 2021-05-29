import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { CardMovie } from '../components/CardMovie';
import { GradiantBackground } from '../components/GradiantBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { UseMovies } from '../hooks/useMovies';

import ImageColors from "react-native-image-colors"
import { getImageColors } from '../helpers/getColors';
import { useContext } from 'react';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWith } = Dimensions.get('window');

const HomeScreen = () => {

    const { moviesInCinema, isLoading, popularMovies, moviesUpComing, topRatedMovies } = UseMovies();
    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async (index:number) =>{
        const movie = moviesInCinema[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
        const [primary ='green', secondary='orange'] = await getImageColors(uri);
        setMainColors({primary, secondary});
    }

    useEffect(() =>{
        if(moviesInCinema.length > 0){
            getPosterColors(0);
        }
    },[moviesInCinema])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        );
    }

    return (
        <GradiantBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{
                        height: 440
                    }}>
                        <Carousel
                            data={moviesInCinema!}
                            renderItem={({ item }) => <CardMovie movie={item} />}
                            sliderWidth={windowWith}
                            itemWidth={250}
                            keyExtractor={(item) => item.id.toString()}
                            onSnapToItem={ (index) => getPosterColors(index)}
                        />
                    </View>

                    <HorizontalSlider title="Populares" movies={popularMovies!} />
                    <HorizontalSlider title="Top rated" movies={topRatedMovies!} />
                    <HorizontalSlider title="Up Coming" movies={moviesUpComing!} />


                </View>
            </ScrollView>
        </GradiantBackground>

    );
}

export default HomeScreen;