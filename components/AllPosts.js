import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'

import sectionStyles from '../styles/Section.module.css';
import buttonStyles from '../styles/Button.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';
import Loading from './Loading';

import { FaArrowDown } from 'react-icons/fa';

export default function AllPosts({ width, showViewMore, data }) {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [dataToRender, setdataToRender] = useState([...data])
    const currentIndexRef = useRef()

    useEffect(() => {
        // Initially show up to 6 items
        const initialEndIndex = data.length >= 6 ? 6 : data.length;
        currentIndexRef.current = initialEndIndex
        setdataToRender(data.slice(0, currentIndexRef.current))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadMore = () => {
        setloading(true)
        const maxIndex = 6 * Math.ceil(data.length / 6)
        const numberOfBatches = Math.ceil(data.length / 6)

        // data.length is total number of renderable items
        // divide by six and round up is how many button presses/groups of items/batches of items - 3 in this case
        // do some maths to know what index to pass.

        // console.log("maxIndex", maxIndex)
        // console.log("number of batches", numberOfBatches)
        // console.log("how many to load next", data.length - currentIndexRef.current)
        // console.log("how many to load next", data.length)


        if (currentIndexRef.current <= maxIndex) {
            currentIndexRef.current += 6
        }

        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            setdataToRender(data.slice(0, currentIndexRef.current))
            setloading(false)
        }, 1000);
    }

    // const miniCards = dataToRender?.slice(0, currentIndexRef.current)?.map(item => {
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
                <p style={{ textAlign: "center", margin: "0px auto" }}>{dataToRender.length} of {data.length}</p>

                {!loading && dataToRender.length < data.length ? <button className={buttonStyles.button} style={{
                    display: "block",
                    margin: "16px auto 8px auto"
                }} type="secondary" onClick={() => loadMore()}><FaArrowDown />Load more</button> : null}


            </div> : null}
        </section>
    )
}

