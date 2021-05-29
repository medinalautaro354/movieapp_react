import React from 'react';
import { useState } from "react";
import { createContext } from "react";

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    primaryColors: ImageColors,
    secondaryColors: ImageColors,
    setMainColors: (colors: ImageColors) => void;
    setPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);



export const GradientProvider = ({ children }: any) => {

    const [primaryColors, setPrimaryColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });
    const [secondaryColors, setSecondaryColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = (colors: ImageColors) =>{
        setPrimaryColors(colors);
    }

    const setPreviousColors = (colors: ImageColors) =>{
        setSecondaryColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            primaryColors,
            secondaryColors,
            setMainColors,
            setPreviousColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}