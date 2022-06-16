import Link from 'next/link';

import sectionStyles from '../styles/Section.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';

const magicalYearImg = "https://i.imgur.com/Lhzyvjh.jpg";
const gettingStartedImg = "https://i.imgur.com/zzyHbus.jpg";
const boyPartsImg = "https://i.imgur.com/LEjUl46.jpg";

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

// Will map out list of MiniCards from API data. Filter based on props (type=all/review/guide)

export default function Latest({ width, showViewMore }) {
    return (

        <section className={sectionStyles.section}>
            {/* Refactor when API available */}
            {width > 768 ? <><CardGrid showViewMore={showViewMore} /> <div className={sectionStyles.pagination}>
                <Link href="/"><a disabled aria-disabled><CgPushChevronLeft /></a></Link>
                <Link href="/"><a disabled aria-disabled><CgChevronLeft /></a></Link>
                <Link href="/"><a id={sectionStyles.page_number}>1</a></Link>
                <Link href="/"><a><CgChevronRight /></a></Link>
                <Link href="/"><a><CgPushChevronRight /></a></Link>
            </div></>
                :
                <div>
                    <MiniCard type="review" title="The Seven Husbands of Evelyn Hugo" author="Taylor Jenkins Reid" date="12th April 2022" />
                    <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
                    <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />
                    <MiniCard type="review" title="Boy Parts" author="Eliza Clark" date="12th April 2022" imgURL={boyPartsImg} />
                    <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
                    <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />
                    <div className={sectionStyles.pagination}>
                        <Link href="/"><a disabled aria-disabled><CgPushChevronLeft /></a></Link>
                        <Link href="/"><a disabled aria-disabled><CgChevronLeft /></a></Link>
                        <Link href="/"><a id={sectionStyles.page_number}>1</a></Link>
                        <Link href="/"><a><CgChevronRight /></a></Link>
                        <Link href="/"><a><CgPushChevronRight /></a></Link>
                    </div>
                </div>}
        </section>
    )
}

