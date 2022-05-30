import Link from "next/link";

import footerStyles from '../styles/Footer.module.css'

import Button from './Button';

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <ul className={footerStyles.nav_links}>
                <li>
                    <h3>Marcereads</h3>
                </li>
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
                    <Link href="/">Collaborate</Link>
                </li>
            </ul>
            <div className={footerStyles.btn_group}>
                <Button text={"@marcereads"} href="https://www.instagram.com/marcereads/?hl=en" />
                <Button text={"hello@marcereads.com"} href="/" isSecondary={true} />
            </div>
            <div className={footerStyles.credits}>
                {/* Add js to calc current year */}
                <p>Copyright © 2022 Marcereads</p>
                <p>Created by <Link href="https://www.callumgiles.dev">ScotDev</Link></p>
            </div>


        </footer>
    )
}
