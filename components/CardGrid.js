import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import cardGridStyles from '../styles/CardGrid.module.css'
import sectionStyles from '../styles/Section.module.css';
import buttonStyles from '../styles/Button.module.css';

import Card from './Card';

import { HiArrowNarrowRight } from "react-icons/hi";

export default function CardGrid({ showViewMore, data, width, loadMore }) {
    // console.log("data passed down", data)
    const router = useRouter()

    const [dataToRender, setdataToRender] = useState([...data])

    useEffect(() => {
        let reorderedData = [...dataToRender]

        const featuredData = data.filter(item => {
            return item.attributes.isFeatured;
        })

        const featuredDataIndex = data.findIndex(item => {
            return item.attributes.isFeatured;
        })

        if (width < 768) {
            // This shows only 1 item in total on mobile
            if (featuredData.length > 1) {
                reorderedData = [featuredData.shift()]
                setdataToRender(reorderedData)
            }
        } else if (width < 768 && router.pathname === "/reviews" || router.pathname === "/guides") {
            reorderedData.splice(featuredDataIndex, 1)
            reorderedData.unshift(featuredData[0])
            setdataToRender(reorderedData.slice(0, 6))
        } else {
            reorderedData.splice(featuredDataIndex, 1)
            reorderedData.unshift(featuredData[0])
            setdataToRender(reorderedData.slice(0, 6))
        }

        console.log("dataToRender", dataToRender)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // let reorderedData = [...data]

    // const featuredData = data.filter(item => {
    //     return item.attributes.isFeatured;
    // })

    // const featuredDataIndex = data.findIndex(item => {
    //     return item.attributes.isFeatured;
    // })

    // if (width < 768) {
    //     if (featuredData.length > 1) {
    //         reorderedData = [featuredData.shift()]
    //     }
    // } else {
    //     reorderedData.splice(featuredDataIndex, 1)
    //     reorderedData.unshift(featuredData[0])
    // }


    const Cards = dataToRender?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />

    })

    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                {Cards}
                {/* <button className={buttonStyles.button} type="secondary" onClick={() => loadMore()}>Load more</button> */}
            </div>
            {showViewMore ? <Link href="/articles"><a className={sectionStyles.view_more}>View more <HiArrowNarrowRight /></a></Link> : null}

        </section>
    )
}
