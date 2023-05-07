import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MovieList } from '../index.js'

import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
    const { data, error, isFetching } = useGetMoviesQuery();

    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress size="4rem" />
            </Box>
        )
    }
    if (!data.results.length) {
        return (
            <Box display="flex" alignItems="center" mt="20px">
                <Typography variant='h4'  >
                    No movies that match that name.
                    <br />
                    Please search for something else.
                </Typography>
            </Box>
        )
    }

    if (error) return 'An error has occured.'
    console.log(data);

    return (
        <div><MovieList movies={data} /></div>
    );
}

export default Movies;