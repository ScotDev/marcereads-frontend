import Image from "next/image";
import Link from "next/link";
import cardStyles from '../styles/Card.module.css'


const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function Card({ url }) {
    return (
        <Link href={url}>
            <div className={cardStyles.card}>
                <Image src={testImage} layout="fill" objectFit="cover" alt="Book" ></Image>
                <div className={cardStyles.card_bottom}>
                    <div className={cardStyles.top_row}>
                        <h5>Review</h5>
                        <p>4th May 2022</p>
                    </div>
                    <div className={cardStyles.bottom_rows}>
                        <h3>The Seven Husbands of Evelyn Hugo</h3>
                        <h4>Taylor Jenkins Reid</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}
