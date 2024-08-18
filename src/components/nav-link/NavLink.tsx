import {FC, ReactNode} from "react";
import Link from "next/link";

interface IProps {
    path: string;
    isActive: boolean;
    children: ReactNode;
}

const NavLink: FC<IProps> = ({path, children, isActive}) => {
    return (
        <Link href={path} className={isActive ? 'active' : ''}>{children}</Link>
    );
}

export default NavLink;