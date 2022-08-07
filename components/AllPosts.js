import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import sectionStyles from '../styles/Section.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

export default function AllPosts({ width, showViewMore, showPagination, metaData, data }) {
    const router = useRouter()
    const totalArticlesCount = metaData.total
    const currentPage = metaData.page
    const perChunk = 6 // items per chunk
    const [loading, setloading] = useState(false)
    const [dataToRender, setdataToRender] = useState([...data])


    const initialEndIndex = data.length >= 6 ? 6 : data.length;


    // option 1
    // on first load, useEffect chunks all the data into sub arrays of maximum 6 items.
    // on first load, we only want first 6 visible, so set dataToRender to chunkedData[0]
    // on loadMore, map/loop through each item in next sub array and push them onto dataToRender

    // option 2 and maybe simpler
    // initial data is data.slice(0, endIndex).
    // load more button simpler moves index and rerenders

    console.log(metaData)

    useEffect(() => {
        // Initially show up to 6 items
        setdataToRender(data.slice(0, initialEndIndex))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // increment index by multiples of 6 unless data.length is less than the next multiple, right?
    // so if data.length is 8, and initial index is 6, allow increment to 12? works but isn't clean, allow this but check if next multiple is longer than length, if so then subtract? 

    // async?
    const loadMore = () => {
        setloading(true)
        const maxIndex = 6 * Math.ceil(data.length / 6)
        // let nextIndex = initialEndIndex + 6
        let nextIndex = initialEndIndex + 6

        console.log("maxIndex", maxIndex)
        console.log("nextIndex", nextIndex)
        console.log(maxIndex - (data.length - 6))

        if (nextIndex > maxIndex) {
            return
        } else {
            nextIndex += 6
        }

        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            setdataToRender(data.slice(0, nextIndex))
            setloading(false)
        }, 1000);
    }

    // const miniCards = dataToRender?.slice(0, nextIndex)?.map(item => {
    const miniCards = dataToRender?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <>
                <CardGrid showViewMore={showViewMore} data={data} width={width} />
            </>

            {width < 768 && router.pathname !== "/" ? <div>
                {miniCards}
                {loading ? "Loading..." : null}

                {<button onClick={() => loadMore()}>Load more</button>}
            </div> : null}
        </section>
    )
}

