import Link from "next/link";

import errorStyles from '../styles/Error.module.css';

import { IoReturnUpBackOutline } from 'react-icons/io'

export default function Custom404() {
    return <div className={errorStyles.container}>
        <h1>Oh no, there&apos;s nothing here!</h1>
        <h2>404</h2>
        <Link href="/"><a alt="Homepage">Go back home</a></Link>
        {/* <IoReturnUpBackOutline /> */}
    </div>
}