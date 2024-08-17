import {FC} from "react";
import Image from "next/image";
import {IMAGES_BASE_URL} from "@/constants/urls";
import css from './PosterPreview.module.scss';
import Link from "next/link";

interface IProps {
    path: string;
    alter: string;
    cName: string;
    withPlay: boolean;
    movieId?: number;
}

const PosterPreview: FC<IProps> = ({path, alter, cName, withPlay, movieId}) => {
    const width = withPlay ? 200 : 400;

    return (
        <div className={css.poster}>
            <Image
                src={IMAGES_BASE_URL + '/w' + width + path}
                alt={alter}
                className={cName}
                width={width}
                height={0}
            />
            {
                withPlay && <Link href={'/movies/' + movieId}>
                    <Image src='/icons/playIcon.png'
                           alt='play icon'
                           className={css.play}
                           width={200}
                           height={0}
                    />
                </Link>
            }
        </div>
    );
};

export default PosterPreview;