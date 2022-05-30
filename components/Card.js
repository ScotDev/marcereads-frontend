import Image from "next/image";
import cardStyles from '../styles/Card.module.css'


const testImage = "/../public/test.jpeg";

export default function Card() {
    return (
        <div className={cardStyles.card}>
            <Image src={testImage} layout="fixed" alt="Book" width="312px" height="302px"></Image>
            <div className={cardStyles.card_bottom}>
                <div className={cardStyles.top_row}>
                    <h5>Review</h5>
                    <h4>4th May 2022</h4>
                </div>
            </div>
        </div>
    )
}
