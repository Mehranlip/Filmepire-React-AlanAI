import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Switch } from 'react-router-dom'

import useStyles from "./styles"

import { Actors, Movies, NavBar, Profile, MovieInformation } from './index'



const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />


                <Switch>
                    <Route exact path='/Movies/:id'>
                        <MovieInformation />
                    </Route>
                    <Route path='/actors/:id'>
                        <Actors />
                    </Route>
                    <Route path='/'>
                        <Movies />
                    </Route>
                    <Route path='/profile:id'>
                        <Profile />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App