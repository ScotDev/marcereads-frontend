import Link from "next/link";

import buttonStyles from '../styles/Button.module.css';

export default function Button({ text, noNewTab, href, type, icon }) {

    return (<>
        <Link href={href}><a target={noNewTab ? null : "_blank"} rel="noreferrer">
            <button type={`${type}`} className={buttonStyles.button}>{icon ? icon : null}{text}</button>
        </a></Link>
    </>
    )
}
