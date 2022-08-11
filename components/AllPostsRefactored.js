import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'

import sectionStyles from '../styles/Section.module.css';
import buttonStyles from '../styles/Button.module.css';

import MiniCard from './MiniCard'
import Card from './Card';

// Loading needs attention for desktop cards
import Loading from './Loading';

import { FaArrowDown } from 'react-icons/fa';
import { HiArrowNarrowRight } from "react-icons/hi";

export default function AllPosts({ width, showViewMore, data }) {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [dataToRender, setdataToRender] = useState([...data])
    const currentIndexRef = useRef()

    // Maybe make width trigger rerender, not important rn

    useEffect(() => {
        // Initially show up to 6 items
        const initialEndIndex = data.length >= 6 ? 6 : data.length;
        currentIndexRef.current = initialEndIndex
        // Set data to render to up to size items for initial load/view
        setdataToRender(data.slice(0, currentIndexRef.current))



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // all the cards are just UI components. Ultimately this component handles all filtering and reordering logic, rerenders etc. This includes filter to show favourites first for Cards, limiting data to render to certain length, handling loadMore.
    // Filtering based on pathname and width.
    // - 



    const Cards = dataToRender?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />

    })

    const miniCards = dataToRender?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

}