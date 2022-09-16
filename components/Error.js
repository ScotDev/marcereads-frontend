import Link from "next/link";

import errorStyles from '../styles/Error.module.css';


export default function Custom404({ isRootPath }) {
    // isRootPath is workaround since next/router is funky here and won't trigger conditional statement

    return <div className={errorStyles.container}>
        <h1>Oh no, there&apos;s nothing here!</h1>
        <h2>404</h2>
        {!isRootPath && <Link href="/"><a alt="Homepage">Go back home</a></Link>}
    </div>
}