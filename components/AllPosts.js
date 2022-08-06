import Link from 'next/link';
import { useRouter } from 'next/router'

import sectionStyles from '../styles/Section.module.css';

import MiniCard from './MiniCard'
import CardGrid from './CardGrid';

import { CgChevronLeft, CgChevronRight, CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

export default function AllPosts({ width, showViewMore, showPagination, totalArticlesCount, currentPage, data }) {
    const router = useRouter()

    console.log(totalArticlesCount)
    const lastPage = Math.ceil(totalArticlesCount / 10)

    const miniCards = data.map(item => {
        return <MiniCard key={item.id} url={`/articles/${item.id}`} type={item.attributes.type} title={item.attributes.title} author={item.attributes.author} date={item.attributes.date} imgURL={item.attributes.main.data.attributes.url} thumbnailURL={item.attributes.main.data.attributes.formats.thumbnail.url} />
    })

    return (
        <section className={sectionStyles.section}>
            <><CardGrid showViewMore={showViewMore} data={data} width={width} />

                {showPagination ? <div className={sectionStyles.pagination}>
                    <button alt="Initial page of content" disabled={currentPage >= lastPage ? true : false} aria-disabled={currentPage >= lastPage ? true : false}><CgPushChevronLeft /></button>
                    <button alt="Previous page of content" disabled={currentPage >= lastPage ? true : false} aria-disabled={currentPage >= lastPage ? true : false}><CgChevronLeft /></button>
                    <p id={sectionStyles.page_number}>1</p>
                    <Link href="/"><a alt="Next page of content"><CgChevronRight /></a></Link>
                    <Link href="/"><a alt="Final page of content"><CgPushChevronRight /></a></Link>
                </div> : null}

            </>

            {width < 768 && router.pathname !== "/" ? <div>
                {miniCards}
                <div className={sectionStyles.pagination}>
                    <button alt="Initial page of content" disabled={currentPage >= lastPage ? true : false} aria-disabled={currentPage >= lastPage ? true : false}><CgPushChevronLeft /></button>
                    <Link href="/"><a alt="Previous page of content" disabled aria-disabled><CgChevronLeft /></a></Link>
                    <p id={sectionStyles.page_number}>1</p>
                    <Link href="/"><a alt="Next page of content" disabled aria-disabled><CgChevronRight /></a></Link>
                    <Link href="/"><a alt="Final page of content" disabled aria-disabled><CgPushChevronRight /></a></Link>
                </div>
            </div> : null}
        </section>
    )
}

