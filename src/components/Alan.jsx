import React, { useEffect, useContext } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { ColorModeContext } from './../utils/ToggleColorMode';
import { fetchToken } from './../utils';
import { selectGenreOrCategory, searchMovie } from './../features/currentGenreOrCategory';

function useAlan() {
    const { setMode } = useContext(ColorModeContext)
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        alanBtn({
            key: '6583e71fe42a98610dd7d795b690e4952e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
                if (command === "chooseGenre") {
                    const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase())

                    if (foundGenre) {
                        history('/')
                        dispatch(selectGenreOrCategory(foundGenre.id));
                    } else {
                        const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;

                        history('/');
                        dispatch(selectGenreOrCategory(category));
                    }
                } else if (command === 'changeMode') {
                    if (mode === 'light') setMode('light');
                    else setMode('dark');
                } else if (command === 'login') {
                    fetchToken();
                } else if (command === 'logout') {
                    localStorage.clear();
                    history('/');
                } else if (command === "search") {
                    dispatch(searchMovie(query))
                }
            }
        });
    }, []);
    return (
        <div>Alan</div>
    )
}

export default useAlan