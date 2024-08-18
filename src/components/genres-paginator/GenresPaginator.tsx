'use client';

import {IGenre} from "@/interfaces/genre.interface";
import {FC} from "react";
import GenreElement from "@/components/genre-element/GenreElement";
import {useRouter} from "next/navigation";

interface IProps {
    genres: IGenre[];
    activeId: number;
}

const GenresPaginator: FC<IProps> = ({genres, activeId}) => {
    const router = useRouter();

    const setId = (newId: number) => {
        router.push('/genres/' + newId + '?page=1');
    }

    const genresElements = genres.map(genre =>
        <GenreElement
            key={genre.id}
            genre={genre}
            clickHandler={setId}
            activeId={activeId}
        />);

    return (
        <div className='mb-7'>{genresElements}</div>
    );
}

export default GenresPaginator;