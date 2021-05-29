import React from 'react';
import { useRef } from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { fadeIn, fadeOut, opacityRef } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacityRef
            }} />

        </View>
    );
}