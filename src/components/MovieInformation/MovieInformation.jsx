import React from 'react'
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles';


function MovieInformation() {
    const classes = useStyles();


    const { id } = useParams()
    const { data, isFetching, error } = useGetMovieQuery(id)


    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress size="8rem" />
            </Box>
        );
    }
    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Link to="/">
                    Something has gone wrong - Go back
                </Link>
            </Box>
        );
    }
    return (
        <Grid container className={classes.containerSpaceAround}>
            test
        </Grid>
    )
}

export default MovieInformation