'use client';

import {useTheme} from "next-themes";
import css from './ThemeSwitcher.module.scss';
import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    const getNextTheme = () => resolvedTheme === 'light' ? 'dark' : 'light';

    if (!mounted) return null;

    return (
        <div className={resolvedTheme === 'light' ? 'light' : 'dark'}
             onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            <span className='cursor-pointer border-2 p-1'>{`set ${getNextTheme()}`}</span>
        </div>
    );
}

export default ThemeSwitcher;