'use client';

import {FC, ReactNode} from "react";
import {useRouter} from "next/navigation";

interface IProps {
    children: ReactNode;
    navType: string;
    to: string;
}

const ClientNavButton: FC<IProps> = ({navType, to, children}) => {
    const router = useRouter();

    let method;

    if (!(navType in router)) {
        throw new Error(`Invalid navType: ${navType}`);
    } else {
        method = router[navType as keyof typeof router];
    }

    return <button onClick={() => method(to)}>{children}</button>
}

export default ClientNavButton;