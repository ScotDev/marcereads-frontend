
import sectionStyles from '../styles/Section.module.css';
import MiniCard from './MiniCard'

const magicalYearImg = "https://i.imgur.com/Lhzyvjh.jpg";
const gettingStartedImg = "https://i.imgur.com/zzyHbus.jpg";
const boyPartsImg = "https://i.imgur.com/LEjUl46.jpg";

export default function Latest() {
    return (
        <section className={sectionStyles.section}>
            <MiniCard type="review" title="The Seven Husbands of Evelyn Hugo" author="Taylor Jenkins Reid" date="12th April 2022" />
            <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
            <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />
            <MiniCard type="review" title="Boy Parts" author="Eliza Clark" date="12th April 2022" imgURL={boyPartsImg} />
            <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
            <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />

        </section>
    )
}
