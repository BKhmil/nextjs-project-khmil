'use client';

import {FC} from "react";
import {useParams, useRouter} from 'next/navigation';
import {Places} from "@/enums/places.enum";
import css from './Paginator.module.scss';
import {MAX_PAGES_AMOUNT} from "@/constants/utils";
import {AppRoutes} from "@/enums/app-routes.enum";

interface IProps {
    currentPage: number;
    totalPages: number;
    place: string;
}

const Paginator: FC<IProps> = ({currentPage, totalPages, place}) => {
    const router = useRouter();
    const {genreId, query} = useParams();

    const maxPages = Math.min(totalPages, MAX_PAGES_AMOUNT);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= maxPages) {
            switch (place) {
                case Places.MOVIES:
                    router.push(AppRoutes.MOVIES + '?page=' + page);
                    break;
                case Places.GENRES:
                    router.push(AppRoutes.GENRES + '/' + genreId + '?page=' + page);
                    break;
                case Places.SEARCH:
                    router.push(AppRoutes.SEARCH + '/' + query + '?page=' + page);
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