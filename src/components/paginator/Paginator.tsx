'use client';

import {FC} from "react";
import {useParams, useRouter} from 'next/navigation';
import {Places} from "@/components/enums/places.enum";
import css from './Paginator.module.scss';

interface IProps {
    currentPage: number;
    totalPages: number;
    place: string;
}

const Paginator: FC<IProps> = ({currentPage, totalPages, place}) => {
    const router = useRouter();
    const {genreId} = useParams();

    const maxPages = Math.min(totalPages, 500);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= maxPages) {
            switch (place) {
                case Places.MOVIES:
                    router.push('/movies?page=' + page);
                    break;
                case Places.GENRES:
                    router.push('/genres/' + genreId + '?page=' + page);
                    break;
                default: console.log('Pagination error: INCORRECT DATA WAS PROVIDED');
            }
        }
    };

    return (
        <div className={css.PaginatorContainer}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {'<<'}
            </button>
            <div className={css.text}>
                page {currentPage} of {maxPages}
            </div>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === maxPages}
            >
                {'>>'}
            </button>
        </div>
    );
};

export default Paginator;