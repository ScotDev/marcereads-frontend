import Link from 'next/link';

import sectionStyles from '../styles/Section.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';

const magicalYearImg = "https://i.imgur.com/Lhzyvjh.jpg";
const gettingStartedImg = "https://i.imgur.com/zzyHbus.jpg";
const boyPartsImg = "https://i.imgur.com/LEjUl46.jpg";

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

export default function AllPosts({ width, showViewMore, showPagination, data }) {

    // console.log("allpost", data)

    const MiniCards = data.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            {/* Refactor when API available */}
            {width > 768 ? <><CardGrid showViewMore={showViewMore} data={data} />
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
                    {MiniCards}
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

