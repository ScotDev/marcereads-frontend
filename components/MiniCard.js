import Image from "next/image";
import miniCardStyles from '../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function MiniCard() {
    return (
        <div className={miniCardStyles.card}>
            <Image src={testImage} layout="fixed" alt="Book" width={120} height={150}></Image>
            <div className={miniCardStyles.text_content}>
                <h5>Review</h5>
                <h3>The Seven Husbands of Evelyn Hugo</h3>
                <h4>Taylor Jenkins Reid</h4>
                <p>4th May 2022</p>
            </div>
        </div>
    )
}
