import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes as Switch, Route } from 'react-router-dom';

import useStyles from "./styles"

import { Actors, Movies, NavBar, Profile, MovieInformation } from '.'



const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />


                <Switch>
                    <Route exact path="/movie/:id" element={<MovieInformation />} />

                    <Route exact path='/actors/:id' element={<Actors />} />

                    <Route exact path='/' element={<Movies />} />

                    <Route exact path="/approved" element={<Movies />} />

                    <Route exact path='/profile/:id' element={<Profile />} />

                </Switch>
            </main>
        </div>
    )
}

export default App