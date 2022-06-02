import Link from 'next/link';
import sectionStyles from '../styles/Section.module.css';
import MiniCard from './MiniCard'

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Latest() {
    return (
        <section className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Latest</h2>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <Link href="/"><a>View more <HiArrowNarrowRight /></a></Link>
        </section>
    )
}
