import Link from 'next/link';
import sectionStyles from '../styles/Section.module.css';
import MiniCard from './MiniCard'

import { HiArrowNarrowRight } from "react-icons/hi";
const magicalYearImg = "https://i.imgur.com/Lhzyvjh.jpg";
const gettingStartedImg = "https://i.imgur.com/zzyHbus.jpg";

const boyPartsImg = "https://i.imgur.com/LEjUl46.jpg";

export default function Latest({ data }) {
    // console.log("MiniCard data", data)

    const MiniCards = data.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Latest</h2>
            {MiniCards}
            <Link href="/articles"><a>View more <HiArrowNarrowRight /></a></Link>
        </section>
    )
}
