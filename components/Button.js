import Link from "next/link";

import buttonStyles from '../styles/Button.module.css';

export default function Button({ text, href, isSecondary, icon }) {

    return (<>
        <Link href={href}><a target="_blank" rel="noreferrer"><button className={isSecondary ? buttonStyles.secondary : buttonStyles.primary}>{icon ? icon : null}{text}</button></a></Link>
    </>
    )
}
