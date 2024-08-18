'use client';

import {useTheme} from "next-themes";

const ThemeSwitcher = () => {
    const {setTheme, resolvedTheme} = useTheme();

    const getNextTheme = () => resolvedTheme === 'light' ? 'dark' : 'light';

    return (
        <div className={resolvedTheme === 'light' ? 'light' : 'dark'}
             onClick={() => {
                 setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
             }}
        >
            <span className='cursor-pointer text-2xl'>{'set ' + getNextTheme() + ' theme'}</span>
        </div>
    );
}

export default ThemeSwitcher;