import React, { useEffect, useContext } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';


import { ColorModeContext } from './../utils/ToggleColorMode';
import { fetchToken } from './../utils';

function useAlan() {
    const { setMode } = useContext(ColorModeContext)

    useEffect(() => {
        alanBtn({
            key: '6583e71fe42a98610dd7d795b690e4952e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, mode }) => {
                if (command === 'changeMode') {
                    if (mode === 'light') setMode('light');
                    else setMode('dark');
                } else if (command === 'login') {
                    fetchToken();
                } else if (command === 'logout') {
                    localStorage.clear();
                    window.location.href = '/';
                }
            }
        });
    }, []);
    return (
        <div>Alan</div>
    )
}

export default useAlan