'use client';

import {FC, useState} from "react";
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
    const getPageSection = (page: number) => Math.floor((page - 1) / 10);

    const [currentSection, setCurrentSection] = useState<number>(getPageSection(currentPage));

    const maxPages = Math.min(totalPages, MAX_PAGES_AMOUNT);
    const totalSections = Math.ceil(maxPages / 10);


    const handleSectionChange = (direction: number) => {
        const newSection = currentSection + direction;
        if (newSection >= 0 && newSection < totalSections) {
            setCurrentSection(newSection);
        }
    };

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

    const renderSectionButtons = () => {
        const startPage = currentSection * 10 + 1;
        const endPage = Math.min(startPage + 9, maxPages);

        const buttons = [];
        for (let page = startPage; page <= endPage; page++) {
            buttons.push(
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={page === currentPage ? css.active : ''}
                >
                    {page}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className={css.PaginatorContainer}>
            <button
                onClick={() => handleSectionChange(-1)}
                disabled={currentSection === 0}
            >
                {'<<'}
            </button>
            {renderSectionButtons()}
            <button
                onClick={() => handleSectionChange(1)}
                disabled={currentSection >= totalSections - 1}
            >
                {'>>'}
            </button>
        </div>
    );
};

export default Paginator;