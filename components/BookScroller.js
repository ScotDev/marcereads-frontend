import Image from "next/image";
import Link from "next/link";
import bookScrollerStyles from '../styles/BookScroller.module.css';
import sectionStyles from '../styles/Section.module.css';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useEffect } from "react";

const testImage = "https://i.imgur.com/7vJ98fU.jpg";


// Will map out list of items from API data when CMS is live.

export default function BookScroller() {

    useEffect(() => {
        const scrollable = document.getElementById("scrollable");
        const leftScrollButton = document.getElementById("left-arrow");
        const rightScrollButton = document.getElementById("right-arrow");
        leftScrollButton.addEventListener('click', () => {
            scrollable.scrollBy({ top: 0, left: -165, behavior: "smooth" });
        });
        rightScrollButton.addEventListener('click', () => {
            scrollable.scrollBy({ top: 0, left: 165, behavior: "smooth" });
        });
    }, []);


    return (
        <section className={sectionStyles.section}>
            <h2 id={sectionStyles.tbr_title} className={sectionStyles.title}>To be read</h2>
            <div className={bookScrollerStyles.scroller_section} >
                <div className={bookScrollerStyles.controls}>
                    <button id="left-arrow" aria-label="Scroll to left"><HiArrowNarrowLeft /></button>
                    <button id="right-arrow" aria-label="Scroll to right"><HiArrowNarrowRight /></button></div>
                <div id="scrollable" className={bookScrollerStyles.scroller}>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                    <div className={bookScrollerStyles.scroll_item}>
                        <Link href="/" target="_blank">
                            <Image src={testImage} layout="fill" objectFit="cover" alt="Preview image of book to be read" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
