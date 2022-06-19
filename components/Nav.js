import navStyles from '../styles/Nav.module.css';
import Link from "next/link";
import { useRouter } from 'next/router';
// https://youtu.be/mTz0GXj8NN0?t=1313

import Button from './Button';

import { FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from "react";


export const Nav = () => {

    const router = useRouter()
    const [checked, setchecked] = useState(false);

    const onCheck = () => {
        setchecked(!checked)
    }

    useEffect(() => {
        const handleRouteChange = () => {
            setchecked(false)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])

    // 
    // useEffect(() => {
    //     const pageHeight = document.documentElement.getBoundingClientRect().height;
    //     document.getElementById("mobile-nav").style.height = pageHeight + "px";
    // }, []);

    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.desktop}>
                <Link href="/"><p className={navStyles.brand}>marcereads</p></Link>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/articles"><a>Browse</a></Link>
                    </li>
                    <li>
                        <Link href="/reviews"><a>Reviews</a></Link>
                    </li>
                    <li>
                        <Link href="/guides"><a>Guides</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/marcereads/?hl=en' target="_blank" rel='noreferrer' alt="Author's Instagram profile" aria-label="Author's Instagram profile"><FaInstagram /></a>
                    </li>
                </ul>
            </div>

            <div className={navStyles.hamburger}>

                <input type='checkbox' aria-label="Hidden input to allow menu to expand" checked={checked} onChange={() => { onCheck() }}></input>
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
                        <Link href="/articles"><a>Browse</a></Link>
                    </li>
                    <li>
                        <Link href="/reviews"><a>Reviews</a></Link>
                    </li>
                    <li>
                        <Link href="/guides"><a>Guides</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Button text="@marcereads" href="https://www.instagram.com/marcereads/?hl=en" type="primary" icon={<FaInstagram />} />
                    </li>
                </ul>
            </div>
            <Link href="/"><p className={navStyles.brand_mobile}>marcereads</p></Link>
            <a className={navStyles.instagram} href='https://www.instagram.com/marcereads/?hl=en' target="_blank" rel='noreferrer' alt="Author's Instagram profile" aria-label="Author's Instagram profile"><FaInstagram /></a>
        </nav>
    )
}
