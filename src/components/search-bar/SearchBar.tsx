'use client';

import {useRouter} from "next/navigation";
import {IForm} from "@/interfaces/form.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import css from './SearchBar.module.scss';
import Image from "next/image";
import {useEffect, useState} from "react";

const SearchBar = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset
    } = useForm<IForm>();

    const search: SubmitHandler<IForm> = ({search}) => {
        router.push('/search/' + search + '?page=1');
        reset();
    }

    useEffect(() => setIsMounted(true), []);

    return (
        <form onSubmit={handleSubmit(search)} className={css.wrapper}>
            <input
                type="text"
                {...register('search')}
                placeholder='search...'
                required={true}
                autoComplete="off"
            />
            <button type='submit'>
                {
                    isMounted ? <Image
                        src='/icons/searchIcon.png'
                        alt='search icon'
                        width={40}
                        height={0}
                    /> :
                        <Image
                            src='/icons/searchIcon.png'
                            alt='search icon'
                            width={40}
                            height={0}
                        />
                }
            </button>
        </form>
    );
};

export default SearchBar;