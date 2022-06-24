import Image from "next/image";
import Link from "next/link";
import cardStyles from '../styles/Card.module.css'


export default function Card({ featured, priority, url, type, title, author, date, imgURL, thumbnailURL }) {
    const dayjs = require('dayjs')
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)

    return (
        <Link href={url}>
            <div className={cardStyles.card} type={featured ? "featured" : null}>
                <div>
                    {featured ? <h5 id={cardStyles.featured_tag}>Featured</h5> : null}
                    <Image
                        priority={priority ? "true" : "false"}
                        src={imgURL}
                        placeholder="blur" blurDataURL={thumbnailURL}
                        layout="fill" objectFit="cover" alt="Book"></Image>
                </div>
                <div className={cardStyles.card_bottom}>
                    <div className={cardStyles.top_row}>
                        <h5 type={type}>{type}</h5>
                        <p>{dayjs(date).format("Do MMM YYYY")}</p>
                    </div>
                    <div className={cardStyles.bottom_rows}>
                        <h3>{title}</h3>
                        <h4>{author}</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}
