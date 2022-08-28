import Link from 'next/link';

import React, { useState, useEffect, useRef } from 'react';

import sectionStyles from '../styles/Section.module.css';
import cardGridStyles from '../styles/CardGrid.module.css'

import Card from './Card';
import MiniCard from './MiniCard';
import Loading from './Loading';

import { HiArrowNarrowRight } from "react-icons/hi";

//  - For desktop, initially show 6, with featured first (alter code in articles/index.js).
//  - For desktop, loadMore function
//  - For mobile, initially show 6, with featured first as full size card, rest as minicards
//  Similar load more function

export default function PostsHomepage({ width, data }) {
    // console.log(data)
    const isDesktop = width > 768 ? true : false;


    // console.log(finalData)
    let miniCardsData = [];
    const fullCardsData = useRef([]);
    const dataToRenderRef = useRef([]);
    const counter = useRef(0);
    const [dataToRender, setdataToRender] = useState([]);
    const maximum = Math.ceil(data.length / 6)

    const [loading, setloading] = useState(false);


    useEffect(() => {

        if (!isDesktop) {
            // fullCardsData.current = data.slice(0, 1)
            // setminiCardsData(data.slice(1, 6))
            miniCardsData = data.flat().slice(1, 6)
        } else if (isDesktop) {
            // fullCardsData.current = data.slice(0, 6)


            setdataToRender(data[counter.current])
            // dataToRenderRef.current = data[0]


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

    }, [])


    const pushToArrayAndFlatten = async (val) => {
        let tempArray = [...dataToRender];
        tempArray.push(val);
        return tempArray.flat();
    }


    const loadMore = async () => {

        // for (let i = 0; i < data.length; i += chunkSize) {
        //     const chunk = data.slice(i, i + chunkSize)
        //     containerArray.current.push(chunk)
        //     console.log(containerArray.current)
        //     // console.log(`chunk ${i}`, chunk)
        // }
        // console.log(fullCardsData)

        // increment counter ref, add that to state
        if (counter.current < data.length - 1) {
            counter.current += 1
            const nextData = await pushToArrayAndFlatten(data[`${counter.current}`])
            setdataToRender(nextData)
        }


        // console.log(nextData)
        // console.log(counter.current)



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
    const Cards = dataToRender?.map(item => {
        // const Cards = finalData?.map(item => {
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
                {loading ? <Loading /> : null}
                {!loading ? <button onClick={() => loadMore()}>More</button> : null}
            </div>

        </section>
    )
}