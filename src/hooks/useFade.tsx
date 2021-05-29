import { useRef } from "react";
import { Animated } from "react-native";

export const useFade = () =>{
    const opacityRef = useRef(new Animated.Value(0)).current;

    const fadeIn = ( callback?: Function) => {
        Animated.timing(
            opacityRef,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = (duration: number = 300) => {
        Animated.timing(
            opacityRef,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    return{
        opacityRef,
        fadeIn,
        fadeOut
    }
}