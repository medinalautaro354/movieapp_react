import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradiantBackground = ({ children }: Props) => {

    const { primaryColors, secondaryColors, setPreviousColors } = useContext(GradientContext);

    const {opacityRef, fadeIn, fadeOut} = useFade();
    
    useEffect(() =>{
        fadeIn(() => {
            setPreviousColors(primaryColors);
            fadeOut(0);
        });
    },[primaryColors])

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[secondaryColors.primary, secondaryColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity: opacityRef}}
            >
                <LinearGradient
                    colors={[primaryColors.primary, primaryColors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </View>
    );
}