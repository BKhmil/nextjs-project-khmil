'use client';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    const getNextTheme = () => resolvedTheme === 'light' ? 'dark' : 'light';

    if (!mounted) return <span className='cursor-pointer text-2xl'>..........................</span>;

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