import {CSSProperties, FC} from "react";
import Image from "next/image";
import css from './PosterPreview.module.scss';

interface IProps {
    path: string;
    alter: string;
    styles: CSSProperties;
    withPlay: boolean;
    // movieId?: number;
}

const PosterPreview: FC<IProps> = ({path, alter, styles, withPlay}) => {
    return (
        <div className={css.poster}>
            <Image
                src={path}
                alt={alter}
                style={styles}
                width={withPlay ? 200 : 400}
                height={200}
            />
            {
                withPlay && <Image src='/icons/playIcon.png'
                                 alt='play icon'
                                 className={css.play}
                                 width={200}
                                 height={100}
                                 // onClick={(() => {
                                 //     navigate('/info/' + movieId);
                                 //     window.scrollTo({top: 0});
                                 //     localStorage.setItem('prevPage', location.pathname + location.search);
                                 // })}
                />
            }
        </div>
    );
};

export default PosterPreview;