import React, { useState, useEffect, useRef } from 'react';

import sectionStyles from '../styles/Section.module.css';
import cardGridStyles from '../styles/CardGrid.module.css'
import buttonStyles from '../styles/Button.module.css'

import Card from './Card';
import MiniCard from './MiniCard';
import Loading from './Loading';

export default function PostsBrowse({ data }) {

    const counter = useRef(0);

    const [isDesktop, setisDesktop] = useState(null);
    const [dataToRender, setdataToRender] = useState([]);
    const [mincardDataToRender, setminicardDataToRender] = useState([]);
    const [loading, setloading] = useState(false);
    const [loadingCount, setloadingCount] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width > 768) {
            setisDesktop(true)
        } else if (width < 768) {
            setisDesktop(false)
        }
    };

    useEffect(() => {

        if (!isDesktop) {
            setdataToRender(data[0].slice(0, 1))

            setminicardDataToRender(data[0].slice(1, 6))
        } else if (isDesktop) {
            setdataToRender(data[counter.current])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (isDesktop) {
            setdataToRender(data[0])
            setminicardDataToRender(null)
        } else if (!isDesktop) {
            setdataToRender(data[0].slice(0, 1))
            setminicardDataToRender(data[0].slice(1, 6))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDesktop])


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

    const updateUI = async () => {
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
    }

    const loadMore = async () => {
        setloading(true)
        setloadingCount(data[`${counter.current + 1}`].length)
        // Allow time for loading animation
        setTimeout(() => {
            setloading(false)
            setloadingCount(0)
            updateUI()
        }, 1000);
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
                {loading ? <Loading lineCount={isDesktop ? 3 : 4} numberOfCards={loadingCount} /> : null}

            </div>
            {!loading && counter.current < data.length - 1 ? <button className={buttonStyles.button} type="load" onClick={() => loadMore()}>Load more</button> : null}
        </section>
    )
}