import Link from 'next/link';

import React, { useState, useEffect, useRef } from 'react';

import sectionStyles from '../styles/Section.module.css';
import cardGridStyles from '../styles/CardGrid.module.css'

import Card from './Card';
import MiniCard from './MiniCard';

import { HiArrowNarrowRight } from "react-icons/hi";

//  - For desktop, initially show 6, with featured first (alter code in articles/index.js).
//  - For desktop, loadMore function
//  - For mobile, initially show 6, with featured first as full size card, rest as minicards
//  Similar load more function

export default function PostsHomepage({ width, data }) {
    console.log(data)
    const isDesktop = width > 768 ? true : false;
    let finalData = data.flat()
    console.log(finalData)
    let miniCardsData = [];
    const fullCardsData = useRef([]);
    const containerArray = useRef([]);
    const maximum = Math.ceil(data.length / 6)

    const [loading, setloading] = useState(false);

    // useEffect(() => {

    if (!isDesktop) {
        // fullCardsData.current = data.slice(0, 1)
        // setminiCardsData(data.slice(1, 6))
        miniCardsData = data.flat().slice(1, 6)
    } else if (isDesktop) {
        // fullCardsData.current = data.slice(0, 6)


        // on first load
        // for (let i = 0; i < data.length; i += chunkSize) {
        //     const chunk = data.slice(i, i + chunkSize)
        //     containerArray.current.push(chunk)
        //     // console.log(containerArray.current)
        //     // console.log(`chunk ${i}`, chunk)
        // }
        // fullCardsData.current = containerArray.current[0]

        // for (let x = 0; x < data.length; x++) {
        //     if (x < 6) {
        //         fullCardsData.current.push(data[x])
        //     }
        // }
        // data.forEach(item, index => {
        //     if (index <= 6) {
        //         miniCardsData.push(item)
        //     }
        // })
        console.log(isDesktop)
    }

    // }, [])



    const loadMore = async () => {

        // let tempArray = data.slice(6, 12)
        // for (let x = 0; x < tempArray.length; x++) {
        //     if (x < 6) {
        //         fullCardsData.current.push(tempArray[x])
        //     }

        // }

        // on click just push next chunk

        // for (let i = 0; i < data.length; i += chunkSize) {
        //     const chunk = data.slice(i, i + chunkSize)
        //     containerArray.current.push(chunk)
        //     console.log(containerArray.current)
        //     // console.log(`chunk ${i}`, chunk)
        // }
        // console.log(fullCardsData)


        // fullCardsData.current
        fullCardsData.current = containerArray.current[1]

        setloading(true)
        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            // setminiCardsData(data.slice(0, currentIndex))
            // miniCardsData = data.slice(0, currentIndex)
            // fullCardsData.push(data.slice(6, currentIndex).flat())
            // setdataToRender(data.slice(0, currentIndexRef.current))
            setloading(false)
            // console.log(currentIndexRef.current)
        }, 1000);
        // console.log(currentIndex)
    }

    // const miniCards = dataToRender?.slice(0, currentIndexRef.current)?.map(item => {
    // const Cards = fullCardsData.current?.map(item => {
    const Cards = finalData?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    const miniCards = miniCardsData?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                {Cards ? Cards : null}
                {miniCards ? miniCards : null}
                <button onClick={() => loadMore()}>More</button>
            </div>

        </section>
    )
}