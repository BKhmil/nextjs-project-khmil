import {FC, ReactNode} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface IProps {
    path: string;
    children: ReactNode;
}

const NavLink: FC<IProps> = ({path, children}) => {
    const pathname = usePathname();

    return (
        <Link href={path} className={pathname === path ? 'active' : ''}>{children}</Link>
    );
}

export default NavLink;