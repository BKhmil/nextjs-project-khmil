import css from './Home.module.scss';
import ClientNavButton from "@/components/client-nav-button/ClientNavButton";
import {AppRoutes} from "@/enums/app-routes.enum";

export default function Home() {
    return (
        <div className={css.HomePage + ' bg-[url("/homePageBG.png")]'}>
            <div className={css.overlay}></div>
            <div className={css.content}>
                <h1>Free Movies to Watch,<br/>Anytime Anywhere.</h1>
                <p>The search is over! Let <span className='font-bold'>BK Movies</span> help you find the<br/>perfect
                    movie to watch tonight for free.</p>
                <ClientNavButton navType='push' to={AppRoutes.MOVIES}>Watch for free</ClientNavButton>
            </div>
        </div>
    );
}