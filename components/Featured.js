import React, { useState, useEffect } from 'react'
import Card from "./Card";
import CardGrid from './CardGrid';
import sectionStyles from '../styles/Section.module.css';

export default function Featured() {

    // Window width detection should be moved up to high level 

    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <section className={sectionStyles.section}>
            {width > 768 ? null : <h2 className={sectionStyles.title}>Featured</h2>}


            {/* Conditionally show mobile or desktop component based on width */}
            {/* <div className={sectionStyles.grid}> */}

            {width > 768 ? <CardGrid /> : <Card featured url="/article" />}

            {/* </div> */}
        </section>
    )
}
