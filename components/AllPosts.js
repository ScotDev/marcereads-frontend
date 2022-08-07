import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'

import sectionStyles from '../styles/Section.module.css';
import buttonStyles from '../styles/Button.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';
import Loading from './Loading';

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

export default function AllPosts({ width, showViewMore, data }) {
    const router = useRouter()
    const perChunk = 6 // items per chunk
    const [loading, setloading] = useState(false)
    const [dataToRender, setdataToRender] = useState([...data])
    const [currentIndex, setcurrentIndex] = useState()
    const currentIndexRef = useRef()

    // option 1
    // on first load, useEffect chunks all the data into sub arrays of maximum 6 items.
    // on first load, we only want first 6 visible, so set dataToRender to chunkedData[0]
    // on loadMore, map/loop through each item in next sub array and push them onto dataToRender

    // option 2 and maybe simpler
    // initial data is data.slice(0, endIndex).
    // load more button simpler moves index and rerenders

    useEffect(() => {
        // Initially show up to 6 items
        const initialEndIndex = data.length >= 6 ? 6 : data.length;
        setcurrentIndex(initialEndIndex)
        currentIndexRef.current = initialEndIndex
        setdataToRender(data.slice(0, initialEndIndex))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // increment index by multiples of 6 unless data.length is less than the next multiple, right?
    // so if data.length is 8, and initial index is 6, allow increment to 12? works but isn't clean, allow this but check if next multiple is longer than length, if so then subtract? 

    // async?
    const loadMore = () => {
        setloading(true)
        const maxIndex = 6 * Math.ceil(data.length / 6)
        const numberOfBatches = Math.ceil(data.length / 6)

        // data.length is total number of renderable items
        // divide by six and round up is how many button presses/groups of items/batches of items - 3 in this case
        // do some maths to know what index to pass.

        console.log("maxIndex", maxIndex)
        // console.log("currentIndex", currentIndexRef.current)
        console.log("number of batches", numberOfBatches)
        console.log("how many to load next", data.length - currentIndexRef.current)
        console.log("how many to load next", data.length)


        if (currentIndexRef.current <= maxIndex) {
            setcurrentIndex(currentIndex + 6)
            currentIndexRef.current += 6
        }

        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            setdataToRender(data.slice(0, currentIndexRef.current))
            setloading(false)
        }, 1000);
        console.log("currentIndex", currentIndexRef.current)
    }

    // const miniCards = dataToRender?.slice(0, nextIndex)?.map(item => {
    const miniCards = dataToRender?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <>
                <CardGrid showViewMore={showViewMore} data={data} loadMore={() => loadMore()} width={width} />
            </>

            {width < 768 && router.pathname !== "/" ? <div>
                {miniCards}
                {loading ? <Loading /> : null}

                {!loading && dataToRender.length !== data.length ? <button className={buttonStyles.button} type="secondary" onClick={() => loadMore()}>Load more</button> : null}

                <p style={{ paddingTop: "12px", margin: "0px auto", width: "145px" }}>Showing {dataToRender.length} of {data.length}</p>
            </div> : null}
        </section>
    )
}

