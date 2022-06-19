import Image from "next/image";
import Link from "next/link";
import miniCardStyles from '../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function MiniCard({ url, type, title, author, date, imgURL }) {
    // console.log(url)

    // refactor inline with card
    let h5ClassName;
    switch (type) {
        case "review":
            h5ClassName = miniCardStyles.review;
            break;
        case "guide":
            h5ClassName = miniCardStyles.guide;
            break;
        default:
            h5ClassName = miniCardStyles.review;
    }

    return (
        <Link href={url}>
            <div className={miniCardStyles.card}>

                <Image src={imgURL} placeholder="blur" blurDataURL={imgURL} layout="fixed" alt="Book" width={120} height={150}></Image>
                <div className={miniCardStyles.text_content}>
                    {/* refactor h5 to match main Card component */}
                    <h5 className={h5ClassName}>{type}</h5>
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <p>{date}</p>
                </div>

            </div>
        </Link>
    )
}
