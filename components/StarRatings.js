import React, { useEffect, useRef } from 'react'
import articleStyles from '../styles/Article.module.css'

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

export default function StarRatings({ rating }) {
    const ratingArray = useRef([])

    useEffect(() => {
        let wholeStars;
        let halfStar;
        let emptyStars;

        if (rating < 0 || rating > 5) {
            console.log("Invalid number for rating")
            return null;
        }

        if (rating % 1 < 1 && rating % 1 !== 0) {
            if (rating === 0.5) {
                wholeStars = 0
                halfStar = true;
            }
            wholeStars = Math.floor(rating);

            halfStar = true;
            ratingArray.current.unshift("halfStar")
        }
        else {
            wholeStars = Math.floor(rating);
            halfStar = false;
        }
        emptyStars = 5 - wholeStars;

        for (let i = 0; i < wholeStars && i < 5; i++) {
            ratingArray.current.unshift("wholeStar")
        }
        if (halfStar) {
            for (let i = 0; i < emptyStars - 1 && i < 5; i++) {
                ratingArray.current.push("emptyStar")
            }
        } else {
            for (let i = 0; i < emptyStars && i < 5; i++) {
                ratingArray.current.push("emptyStar")
            }
        }
        console.log(ratingArray.current)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const ratingsToRender = ratingArray.current.map((item, index) => {
        if (item === "wholeStar") {
            return <p key={index}><FaStar /></p>
        }
        if (item === "halfStar") {
            return <p key={index}><FaStarHalfAlt /></p>
        }
        if (item === "emptyStar") {
            return <p key={index}><FaRegStar /></p>
        }

    })

    return (
        <div className={articleStyles.starRatingsContainer}>
            <>{ratingsToRender ? ratingsToRender : null}</>
        </div>
    )
}