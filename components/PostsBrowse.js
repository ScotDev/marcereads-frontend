import Link from 'next/link';

import React, { useState, useRef } from 'react';

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
    // console.log(data)
    const isDesktop = width > 768 ? true : false;
    // let fullCardsData = []
    let miniCardsData = [];
    const fullCardsData = useRef([]);

    const maximum = Math.ceil(data.length / 6)

    // let loading = false;
    let baseIndex = 0
    let currentIndex = 6;

    const [loading, setloading] = useState(false);
    const startIndexRef = useRef(0);
    // const [currentIndex, setcurrentIndex] = useState(6)
    // const [miniCardsData, setminiCardsData] = useState(data.slice(1, 6))

    if (!isDesktop) {
        fullCardsData.current = data.slice(0, 1)
        // setminiCardsData(data.slice(1, 6))
        miniCardsData = data.slice(1, 6)
    } else if (isDesktop) {
        // fullCardsData = data.slice(0, currentIndex)

        for (let x = 0; x < data.length; x++) {
            if (x < 6) {
                fullCardsData.current.push(data[x])
            }
        }
        // data.forEach(item, index => {
        //     if (index <= 6) {
        //         miniCardsData.push(item)
        //     }
        // })
        startIndexRef.current = 6
        console.log(miniCardsData)
    }





    const loadMore = async () => {
        // I need to know how many items to append

        // every time executed, start at last maxIndex + 1
        // stop at 6

        for (let x = 6; x < data.length; x++) {
            // if (x < 12) {
            fullCardsData.current.push(data[x])
            // }

        }
        console.log(fullCardsData)


        setloading(true)
        // loading = true;


        // if (currentIndex <= maxIndex) {
        //     baseIndex += 6
        //     currentIndex += 6
        //     currentIndexRef.current += 6
        //     // setcurrentIndex(currentIndex += 6)
        // }

        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            // setminiCardsData(data.slice(0, currentIndex))
            // miniCardsData = data.slice(0, currentIndex)
            // fullCardsData.push(data.slice(6, currentIndex).flat())
            // setdataToRender(data.slice(0, currentIndexRef.current))
            // loading = false;
            setloading(false)
            // console.log(currentIndexRef.current)
        }, 1000);
        // console.log(currentIndex)
    }

    // const miniCards = dataToRender?.slice(0, currentIndexRef.current)?.map(item => {
    const Cards = fullCardsData.current?.map(item => {
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