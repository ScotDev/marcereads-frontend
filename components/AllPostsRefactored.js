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

// This component combines the CardGrid and Minicards, so desktop and mobile UI components.
// It also combines the filtering logic for both e.g. Featured, show only max of 6 items at once
// 

// Maybe make width trigger rerender, not important rn
export default function AllPosts({ width, showViewMore, data }) {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [dataToRender, setdataToRender] = useState([...data])
    const currentIndexRef = useRef()
    const isDesktop = width > 768 ? true : false
    const pathname = router.pathname


    // Sets initial data to render
    useEffect(() => {
        // Initially show up to 6 items
        const initialEndIndex = data.length >= 6 ? 6 : data.length;
        currentIndexRef.current = initialEndIndex
        // Set data to render to up to size items for initial view
        setdataToRender(data.slice(0, currentIndexRef.current))


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // all the cards are just UI components. Ultimately this component handles all filtering and reordering logic, rerenders etc. This includes filter to show favourites first for Cards, limiting data to render to certain length, handling loadMore.
    // Filtering based on pathname and width.
    // - 


    // Loadmore function
    //  ---------------


    // if pathname === "/" and width > 768 {
    // show 6 card only + featured first 
    // }

    useEffect(() => {
        // First copies initial data in entirety as base to manipulate
        let reorderedData = [...dataToRender];
        // Secondly find featured item
        const featuredData = data.filter(item => {
            return item.attributes.isFeatured;
        })
        // Thirdly  find featured item's index
        const featuredDataIndex = data.findIndex(item => {
            return item.attributes.isFeatured;
        })

        if (pathname === "/") {
            if (isDesktop) {
                if (featuredData.length >= 1) {
                    // Remove first featured item from array
                    reorderedData.splice(featuredDataIndex, 1)
                    // Insert first feautured item at start of array
                    reorderedData.unshift(featuredData[0])
                    // Set renderable data to new array with featured item first, limited to six items
                    setdataToRender(reorderedData.slice(0, 6))
                }


            }
        }


    }, [])


    // Hardest part is dynamically rendering different sized cards. They take identical props, apart from the featured flag
    // 

    const Cards = dataToRender?.map(item => {
        return <Card key={item.id} featured={item.attributes.isFeatured} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />

    })

    const miniCards = dataToRender?.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

}