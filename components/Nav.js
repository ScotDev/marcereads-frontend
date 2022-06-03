import navStyles from '../styles/Nav.module.css';
import Link from "next/link";
// https://youtu.be/mTz0GXj8NN0?t=1313

import Button from './Button';

import { FaInstagram } from 'react-icons/fa';
import { useEffect } from "react";


export const Nav = () => {

    useEffect(() => {
        const pageHeight = document.documentElement.getBoundingClientRect().height;
        document.getElementById("mobile-nav").style.height = pageHeight + "px";
    }, []);

    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.desktop}>
                <p className={navStyles.brand}>Marcereads</p>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Browse</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Reviews</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Guides</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>About</a></Link>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/marcereads/?hl=en' target="_blank" rel='noreferrer'><FaInstagram /></a>
                    </li>
                </ul>
            </div>

            <div className={navStyles.hamburger}>

                <input type='checkbox'></input>
                <div className={navStyles.hamburger_lines}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul id="mobile-nav">
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Browse</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Reviews</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Guides</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>About</a></Link>
                    </li>
                    <li>
                        <Button text="@marcereads" href="https://www.instagram.com/marcereads/?hl=en" icon={<FaInstagram />} />
                    </li>
                </ul>
            </div>
            <p className={navStyles.brand_mobile}>Marcereads</p>
            <a className={navStyles.instagram} href='https://www.instagram.com/marcereads/?hl=en' target="_blank" rel='noreferrer'><FaInstagram /></a>
        </nav>
    )
}
