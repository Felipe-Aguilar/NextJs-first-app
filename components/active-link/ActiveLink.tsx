'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface props {
    path:string;
    text:string
}

const ActiveLink = ({path, text}:props) => {

    const pathname = usePathname();

    return ( 
        <Link href={path} className={`${style.link} ${ (pathname === path) && style['active-link']}`}>
            {text}
        </Link>
    );
}

export default ActiveLink;