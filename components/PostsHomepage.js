import Link from 'next/link';

import sectionStyles from '../styles/Section.module.css';
import cardGridStyles from '../styles/CardGrid.module.css'

import Card from './Card';

import { HiArrowNarrowRight } from "react-icons/hi";

export default function PostsHomepage({ width, data }) {
    const isDesktop = width > 768 ? true : false;
    let dataToRender;

    if (!isDesktop) {
        dataToRender = data.slice(0, 1)
    } else if (isDesktop) {
        dataToRender = data.slice(0, 6)
    }

    const Cards = dataToRender?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                {Cards}
            </div>
            <Link href="/articles" ><a className={sectionStyles.view_more}>View more <HiArrowNarrowRight /></a></Link>
        </section>
    )
}
