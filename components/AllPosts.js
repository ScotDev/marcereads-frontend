import Link from 'next/link';

import sectionStyles from '../styles/Section.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';

const magicalYearImg = "https://i.imgur.com/Lhzyvjh.jpg";
const gettingStartedImg = "https://i.imgur.com/zzyHbus.jpg";
const boyPartsImg = "https://i.imgur.com/LEjUl46.jpg";

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

// Will map out list of MiniCards from API data. Filter based on props (type=all/review/guide)

export default function AllPosts({ width, showViewMore, showPagination }) {
    return (

        <section className={sectionStyles.section}>
            {/* Refactor when API available */}
            {width > 768 ? <><CardGrid showViewMore={showViewMore} />
                {showPagination ? <div className={sectionStyles.pagination}>
                    <Link href="/"><a alt="Initial page of content" disabled aria-disabled><CgPushChevronLeft /></a></Link>
                    <Link href="/"><a alt="Previous page of content" disabled aria-disabled><CgChevronLeft /></a></Link>
                    <p id={sectionStyles.page_number}>1</p>
                    <Link href="/"><a alt="Next page of content"><CgChevronRight /></a></Link>
                    <Link href="/"><a alt="Final page of content"><CgPushChevronRight /></a></Link>
                </div> : null}

            </>
                :
                <div>
                    <MiniCard type="review" title="The Seven Husbands of Evelyn Hugo" author="Taylor Jenkins Reid" date="12th April 2022" />
                    <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
                    <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />
                    <MiniCard type="review" title="Boy Parts" author="Eliza Clark" date="12th April 2022" imgURL={boyPartsImg} />
                    <MiniCard type="review" title="The Year of Magical Thinking" author="Joan Didion" date="12th April 2022" imgURL={magicalYearImg} />
                    <MiniCard type="guide" title="How to get started on Bookstagram" author="marcereads" date="12th April 2022" imgURL={gettingStartedImg} />
                    <div className={sectionStyles.pagination}>
                        <Link href="/"><a alt="Initial page of content" disabled aria-disabled><CgPushChevronLeft /></a></Link>
                        <Link href="/"><a alt="Previous page of content" disabled aria-disabled><CgChevronLeft /></a></Link>
                        <p id={sectionStyles.page_number}>1</p>
                        <Link href="/"><a alt="Next page of content"><CgChevronRight /></a></Link>
                        <Link href="/"><a alt="Final page of content"><CgPushChevronRight /></a></Link>
                    </div>
                </div>}
        </section>
    )
}

