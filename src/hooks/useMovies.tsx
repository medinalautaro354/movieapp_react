import { useState } from "react";
import { useEffect } from "react";
import movieDb from "../api/movieDb";
import { Result, Movie } from "../models/movie";

interface MoviesState {
    moviesInCinema: Movie[];
    popularMovies: Movie[];
    topRatedMovies: Movie[];
    moviesUpComing: Movie[];
}

export const UseMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        moviesInCinema: [],
        popularMovies: [],
        topRatedMovies: [],
        moviesUpComing: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDb.get<Result>('/now_playing');
        const popularPromise = movieDb.get<Result>('/popular');
        const topRatedPromise = movieDb.get<Result>('/top_rated');
        const upComingPromise = movieDb.get<Result>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise]);

        setMoviesState({
            moviesInCinema: response[0].data.results,
            popularMovies: response[1].data.results,
            topRatedMovies: response[2].data.results,
            moviesUpComing: response[3].data.results,
        })
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}