'use client';

import Image from "next/image";
import React from "react";

const BackButton = () => {
    return <Image
        src='/icons/backIcon.png'
        alt='back button'
        className='absolute top-[15vh] left-[20px] cursor-pointer'
        width={50}
        height={0}
        onClick={() => window.history.back()}
    />;
};

export default BackButton;
