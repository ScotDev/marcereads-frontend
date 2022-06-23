import Image from "next/image";
import Link from "next/link";
import miniCardStyles from '../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function MiniCard({ url, type, title, author, date, imgURL, thumbnailURL }) {
    const dayjs = require('dayjs')
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)

    return (
        <Link href={url}>
            <div className={miniCardStyles.card}>

                <Image src={imgURL} placeholder="blur" blurDataURL={thumbnailURL} layout="fixed" alt="Book" width={120} height={150}></Image>
                <div className={miniCardStyles.text_content}>
                    <h5 type={type}>{type}</h5>
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <p>{dayjs(date).format("Do MMM YYYY")}</p>
                </div>

            </div>
        </Link>
    )
}
