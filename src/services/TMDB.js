import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({

        getGenres: builder.query({
            query: () => `/genre/movie/list?api_key=${tmdbApiKey}`
        }),

        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page }) => {
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                }
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                }
                return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;

            },
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetGenresQuery
} = tmdbApi;