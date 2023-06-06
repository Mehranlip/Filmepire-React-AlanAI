import React, { useRef } from 'react'
import { CssBaseline } from '@mui/material'
import { Routes as Switch, Route } from 'react-router-dom';

import useStyles from "./styles"

import { Actors, Movies, NavBar, Profile, MovieInformation } from '.'
import useAlan from './Alan';



const App = () => {
    const classes = useStyles()
    const alanBtnContainer = useRef()

    useAlan()
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
            <div ref={alanBtnContainer} />
        </div>
    )
}

export default App