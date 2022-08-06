import Link from 'next/link';

import cardGridStyles from '../styles/CardGrid.module.css'
import sectionStyles from '../styles/Section.module.css';

import Card from './Card';

import { HiArrowNarrowRight } from "react-icons/hi";

export default function CardGrid({ showViewMore, data, width }) {

    let reorderedData = [...data]

    const featuredData = data.filter(item => {
        return item.attributes.isFeatured;
    })

    const featuredDataIndex = data.findIndex(item => {
        return item.attributes.isFeatured;
    })

    if (width < 768) {
        if (featuredData.length > 1) {
            reorderedData = [featuredData.shift()]
        }
    } else {
        reorderedData.splice(featuredDataIndex, 1)
        reorderedData.unshift(featuredData[0])
    }

    const Cards = reorderedData.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />

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
