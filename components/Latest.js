import Link from 'next/link';
import sectionStyles from '../styles/Section.module.css';
import MiniCard from './MiniCard'

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Latest({ data }) {
    // console.log("MiniCard data", data)

    const dayjs = require('dayjs')
    var utc = require('dayjs/plugin/utc')
    dayjs.extend(utc)
    // var now = dayjs()
    // const formattedDateToday = dayjs().utc().format()
    const sortedData = data.sort((item1, item2) => {
        return dayjs(item2.attributes.createdAt).valueOf() - dayjs(item1.attributes.createdAt).valueOf();
    })

    // console.log("sorted :", sortedData)
    // console.log("today :", dayjs(now).valueOf())

    const MiniCards = sortedData?.slice(0, 6).map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Latest</h2>
            {MiniCards}
            <Link href="/articles"><a>View more <HiArrowNarrowRight /></a></Link>
        </section>
    )
}
