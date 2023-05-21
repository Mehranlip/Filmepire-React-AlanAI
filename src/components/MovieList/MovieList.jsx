import React from 'react'
import { Grid } from '@mui/material'
import { Movie } from '../index.js'


import useStyles from './styles'

function MovieList({ movies, numberOfMovies }) {
    const classes = useStyles()
    return (
        <Grid container className={classes.moviesContainer}>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            )).slice(0, numberOfMovies)}
        </Grid>
    )
}

export default MovieList