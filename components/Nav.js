import navStyles from '../styles/Nav.module.css';

// https://youtu.be/mTz0GXj8NN0?t=1313

import Link from "next/link";

export const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.desktop}>
                <p className={navStyles.brand}>Marcereads</p>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Browse</Link>
                    </li>
                    <li>
                        <Link href="/">Reviews</Link>
                    </li>
                    <li>
                        <Link href="/">Guides</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Insta logo</Link>
                    </li>
                </ul>
            </div>
            {/* <div className={navStyles.hamburger}>
                <input type='checkbox'></input>
                <div></div>
                <div></div>
                <div></div>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Browse</Link>
                    </li>
                    <li>
                        <Link href="/">Reviews</Link>
                    </li>
                    <li>
                        <Link href="/">Guides</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Insta logo</Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}
