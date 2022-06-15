import Image from "next/image";
import Link from "next/link";
import miniCardStyles from '../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function MiniCard({ type, title, author, date, imgURL }) {

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
        <Link href="/article">
            <div className={miniCardStyles.card}>

                <Image src={imgURL ? imgURL : testImage} layout="fixed" alt="Book" width={120} height={150}></Image>
                <div className={miniCardStyles.text_content}>
                    <h5 className={h5ClassName}>{type}</h5>
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <p>{date}</p>
                </div>

            </div>
        </Link>
    )
}
