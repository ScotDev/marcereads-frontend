import Link from "next/link";

import errorStyles from '../styles/Error.module.css';

import { IoReturnUpBackOutline } from 'react-icons/io'

export default function Custom404() {
    return <div className={errorStyles.container}>
        <h1>Look&apos;s like we have issues</h1>
        <p>Please try again later</p>
        <h2>500</h2>
        <Link href="/"><a alt="Homepage">Go back home</a></Link>
        {/* <IoReturnUpBackOutline /> */}
    </div>
}