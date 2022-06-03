import Link from "next/link";

import footerStyles from '../styles/Footer.module.css'

import Button from './Button';

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


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
                    <Link href="/browse">Browse</Link>
                </li>
                <li>
                    <Link href="/">Reviews</Link>
                </li>
                <li>
                    <Link href="/">Guides</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/">Collaborate</Link>
                </li>
            </ul>
            <div className={footerStyles.btn_group}>
                <Button text="@marcereads" href="https://www.instagram.com/marcereads/?hl=en" icon={<FaInstagram />} />
                <Button text={"hello@marcereads.com"} href="mailto:hello@marcereads.com" isSecondary={true} icon={<HiOutlineMail />} />
            </div>
            <div className={footerStyles.credits}>
                {/* Add js to calc current year */}
                <p>Copyright © 2022 Marcereads</p>
                <p>Created by <Link href="https://www.callumgiles.dev"><a target="_blank" rel="noreferrer">ScotDev</a></Link></p>
            </div>


        </footer>
    )
}
