import Link from 'next/link';

import cardGridStyles from '../styles/CardGrid.module.css'
import sectionStyles from '../styles/Section.module.css';

import Card from './Card';

import { HiArrowNarrowRight } from "react-icons/hi";

export default function CardGrid({ showViewMore }) {
    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                <Card featured url="/article" />
                <Card url="/article" />
                <Card url="/article" />
                <Card url="/article" />
                <Card url="/article" />
                <Card url="/article" />

            </div>
            {showViewMore ? <Link href="/browse"><a className={sectionStyles.view_more}>View more <HiArrowNarrowRight /></a></Link> : null}

        </section>
    )
}
