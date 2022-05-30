import Link from "next/link";

import buttonStyles from '../styles/Button.module.css';

export default function Button({ text, href, isSecondary }) {

    return (<>
        <Link href={href}><button className={isSecondary ? buttonStyles.secondary : buttonStyles.primary}>{text}</button></Link>
    </>
    )
}
