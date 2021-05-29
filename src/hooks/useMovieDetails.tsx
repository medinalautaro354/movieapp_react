import { useEffect } from "react";
import { useState } from "react";
import movieDb from "../api/movieDb";
import { MovieDetail } from "../models/movie";
import { Cast, MovieCredits } from "../models/movieCredits";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieDetail;
    cast: Cast[];
}

export const useMovieDetails = (movideId: number) => {
    const [movieDetailState, setMovieDetailState] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        movieFull: undefined
    });

    const getMovieDetails = async () => {

        const movieDetailResponse = movieDb.get<MovieDetail>(`/${movideId}`);
        const movieCreditsResponse = movieDb.get<MovieCredits>(`/${movideId}/credits`);

        const [movieDetails, movieCredits] = await Promise.all([movieDetailResponse, movieCreditsResponse]);

        setMovieDetailState({
            movieFull: movieDetails.data,
            isLoading: false,
            cast: movieCredits.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...movieDetailState
    }
}