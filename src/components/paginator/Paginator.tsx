'use client';

import {FC} from "react";
import { useRouter } from 'next/navigation';
import css from './Paginator.module.scss';

interface IProps {
    currentPage: number;
    totalPages: number;
}

const Paginator: FC<IProps> = ({ currentPage, totalPages }) => {
    const router = useRouter();

    const maxPages = Math.min(totalPages, 500);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= maxPages) {
            router.push(`/movies?page=${page}`);
        }
    };

    return (
        <div className={css.PaginatorContainer}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                {'<<'}
            </button>
            <div className={css.text}>
                page {currentPage} of {maxPages}
            </div>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === maxPages}
                className="pagination-button"
            >
                {'>>'}
            </button>
        </div>
    );
};

export default Paginator;