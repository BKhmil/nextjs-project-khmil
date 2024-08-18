'use client';

import UserInfo from "@/components/user-info/UserInfo";
import {useRouter} from "next/navigation";
import Image from "next/image";
import NavLink from "@/components/nav-link/NavLink";
import css from './Header.module.scss';
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";

const Header= () => {
    const {push} = useRouter();

    return (
        <header className={css.Header}>
            <div className={css.logoSection} onClick={() => push('/')}>
                <Image
                    src='/icons/logo.png'
                    alt='logo'
                    width={70}
                    height={70}
                />
                <div>BK Movies</div>
            </div>
            <nav>
                <ul className={css.list}>
                    <li>
                        <NavLink path='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink path='/genres/28'>Genres</NavLink>
                    </li>
                    <li>
                        <NavLink path='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            {/*<SearchBar/>*/}
            <ThemeSwitcher/>
            <UserInfo/>
        </header>
    );
}

export default Header;