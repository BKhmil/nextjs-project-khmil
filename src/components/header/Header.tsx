'use client';

import UserInfo from "@/components/user-info/UserInfo";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import NavLink from "@/components/nav-link/NavLink";
import css from './Header.module.scss';
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";
import SearchBar from "@/components/search-bar/SearchBar";
import {AppRoutes} from "@/enums/app-routes.enum";
import {DEFAULT_GENRE_ID} from "@/constants/utils";

const Header= () => {
    const {push} = useRouter();
    const pathname = usePathname();

    const isActive = (path: string): boolean => {
        return pathname.includes(path);
    }

    return (
        <header className={css.Header}>
            <div className={css.logoSection} onClick={() => push(AppRoutes.HOME)}>
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
                        <NavLink
                            path={AppRoutes.HOME}
                            isActive={pathname === AppRoutes.HOME}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            path={AppRoutes.GENRES + '/' + DEFAULT_GENRE_ID}
                            isActive={isActive(AppRoutes.GENRES)}
                        >Genres</NavLink>
                    </li>
                    <li>
                        <NavLink
                            path={AppRoutes.MOVIES}
                            isActive={isActive(AppRoutes.MOVIES) && !parseInt(pathname[pathname.length - 1])}
                        >Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <SearchBar/>
            <ThemeSwitcher/>
            <UserInfo/>
        </header>
    );
}

export default Header;