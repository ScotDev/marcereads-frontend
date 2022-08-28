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
    const isDesktop = width > 768 ? true : false;


    // console.log(finalData)
    let miniCardsData = [];
    const fullCardsData = useRef([]);
    const counter = useRef(0);
    const [dataToRender, setdataToRender] = useState([]);
    const [mincardDataToRender, setminicardDataToRender] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect(() => {

        if (!isDesktop) {
            setdataToRender(data[0].slice(0, 1))
            // fullCardsData.current = data.slice(0, 1)
            // setminiCardsData(data.slice(1, 6))
            setminicardDataToRender(data[0].slice(1, 6))
            // miniCardsData = data.flat().slice(1, 6)
        } else if (isDesktop) {
            setdataToRender(data[counter.current])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const pushToArrayAndFlatten = async (val) => {
        let tempArray;

        if (!isDesktop) {
            tempArray = [...mincardDataToRender];
        } else if (isDesktop) {
            tempArray = [...dataToRender];
        }
        tempArray.push(val);
        return tempArray.flat();
    }


    const loadMore = async () => {
        setloading(true)

        if (isDesktop) {
            if (counter.current < data.length - 1) {
                counter.current += 1
                const nextData = await pushToArrayAndFlatten(data[`${counter.current}`])
                setdataToRender(nextData)
            }
        } else if (!isDesktop) {
            if (counter.current < data.length - 1) {
                counter.current += 1
                const nextData = await pushToArrayAndFlatten(data[`${counter.current}`])
                setminicardDataToRender(nextData)
            }
        }

        // Allow for loading animation and perceived feedback
        setTimeout(() => {
            setloading(false)
        }, 1000);
        console.log("counter", counter.current)
    }

    const Cards = dataToRender?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    const miniCards = mincardDataToRender?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <div className={cardGridStyles.grid}>
                {Cards ? Cards : null}
                {miniCards ? miniCards : null}
                {/* {loading ? <Loading /> : null} */}
                {!loading && counter.current < data.length - 1 ? <button onClick={() => loadMore()}>More</button> : null}
            </div>

        </section>
    )
}