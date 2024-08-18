'use client';

import {IGenre} from "@/interfaces/genre.interface";
import {FC} from "react";
import css from './GenreElement.module.scss';
import {useParams} from "next/navigation";

interface IProps {
    genre: IGenre;
    clickHandler: (newId: number) => void;
}

const GenreElement: FC<IProps> = ({genre, clickHandler}) => {
    const {genreId} = useParams();

    return (
        <span className={css.GenreBadge + ' ' + (Number(genreId) === genre.id ? css.active : '')}
              onClick={() => clickHandler(genre.id)}
        >{genre.name}</span>
    );
};

export default GenreElement;