import React, { useEffect } from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useStyles from "./styles"


const Categories = [
    { label: "Pouplar", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
]

const demoCategories = [
    { label: "Comedy", value: "comedy" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
    { label: "Animation", value: "animation" },
]



import blueLogo from '../../assets/images/lightLogo.png';
import redLogo from '../../assets/images/darkLogo.png';

function Sidebar({ setMobileOpen }) {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img className={classes.image}
                    src={theme.palette.mode === "light" ? blueLogo : redLogo}
                    alt='Filmepire Logo'
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>
                    Categories
                </ListSubheader>
                {Categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to='/'>
                        <ListItem onClick={() => { }} button>
                            {/* <ListItemIcon>
                                <img src={blueLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>
                    Genres
                </ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to='/'>
                        <ListItem onClick={() => { }} button>
                            {/* <ListItemIcon>
                                <img src={blueLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar