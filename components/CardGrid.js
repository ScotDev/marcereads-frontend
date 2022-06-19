import Link from 'next/link';

import cardGridStyles from '../styles/CardGrid.module.css'
import sectionStyles from '../styles/Section.module.css';

import Card from './Card';

import { HiArrowNarrowRight } from "react-icons/hi";

export default function CardGrid({ showViewMore, data }) {
    console.log("cardgrid", data)
    const Cards = data.map(item => {
        return <Card key={item.id} featured={item.attributes.featured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />

    })
    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                {Cards}
            </div>
            {showViewMore ? <Link href="/articles"><a className={sectionStyles.view_more}>View more <HiArrowNarrowRight /></a></Link> : null}

        </section>
    )
}
