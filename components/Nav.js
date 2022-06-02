import navStyles from '../styles/Nav.module.css';
import Link from "next/link";
// https://youtu.be/mTz0GXj8NN0?t=1313

import { FaInstagram } from 'react-icons/fa';


export const Nav = () => {
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
                        <Link href="/"><FaInstagram /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
