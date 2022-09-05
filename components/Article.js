import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";

import StarRatings from './StarRatings.js';

import articleStyles from '../styles/Article.module.css'

import { ShareTo } from '../utils/share';

import { FaRegClipboard, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


export default function Article({ data }) {
    const router = useRouter()
    const [readTimeEstimate, setReadTimeEstimate] = useState("3 min")
    const [copyLinkText, setcopyLinkText] = useState("Copy link")

    useEffect(() => {
        const avgWordsPerMinute = 265;
        let readTimeEstimate;
        const words = data.attributes.body.split(" ");
        let totalWordCount = words.length;

        let minutes;

        if (!data.attributes.body) {
            minutes = 0
        } else if (totalWordCount <= avgWordsPerMinute) {
            minutes = 2;
        } else {
            minutes = totalWordCount / avgWordsPerMinute;
        }

        const formattedMinutes = minutes.toFixed(0)

        if (minutes < 2) {
            readTimeEstimate = 2;
        } else {
            readTimeEstimate = formattedMinutes.toString()
        }

        setReadTimeEstimate(readTimeEstimate + " min");



        // getWordCount(data.attributes.body).then(res => setReadTimeEstimate(res + " min"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sharePage = (shareType) => {
        const shareItem = new ShareTo(data)

        if (shareType === "email") {
            shareItem.email()
        } else if (shareType === "copy") {
            shareItem.copyLink()
            setcopyLinkText("Link copied!")
        } else if (shareType === "whatsapp") {
            shareItem.whatsapp()
        } else if (shareType === "twitter") {
            shareItem.twitter()
        }

    }

    // if (router.isFallback || !data) {
    //     return <Loading />
    // }

    const dayjs = require('dayjs')
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={data.attributes.title} />
                <meta charSet="utf-8" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.marcereads.com" />
                <meta property="og:url" content={`"https://www.marcereads.com/${router.asPath}`} />
                <meta property="og:image" content={data.attributes.main.data.attributes.formats.thumbnail.url} />
                <title>{data.attributes.title ?? "Article"}</title>
                {/* https://youtu.be/-B58GgsehKQ?t=406 */}
                <meta name="description" content={data.attributes.title ?? "Marcereads Blog"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={articleStyles.article}>
                <header className={articleStyles.header}>
                    <h1 itemProp="name headline" className={articleStyles.title}>{data.attributes.title}</h1>
                    <h2 className={articleStyles.author}>{data.attributes.author}</h2>
                    <div className={articleStyles.top_row}>
                        <h5 type={data.attributes.type}>{data.attributes.type}</h5>
                    </div>
                    <div className={articleStyles.bottom_row}>

                        <h5 className={articleStyles.length}>{readTimeEstimate}</h5>
                        <h4 className={articleStyles.date}>{dayjs(data.attributes.date).format("Do MMM YYYY")}</h4>

                    </div>
                    {data.attributes.type === "review" ? <StarRatings rating={data.attributes.rating} /> : null}
                </header>
                <article itemScope itemType="http://schema.org/Article">
                    <meta itemProp="datePublished" content={data.attributes.createdAt} />
                    <meta itemProp="publisher" content="marcereads" />
                    <div className={articleStyles.image_wrapper}>
                        <Image src={data.attributes.main.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.main.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Relevant book for article" layout="fill" />
                    </div>
                    <ReactMarkdown>
                        {data.attributes.body}
                    </ReactMarkdown>
                    <div>
                        <button onClick={() => sharePage("email")}><HiOutlineMail /> Email</button>
                        <button onClick={() => sharePage("copy")}><FaRegClipboard /> {copyLinkText}</button>
                        <button onClick={() => sharePage("whatsapp")}><FaWhatsapp /> WhatsApp</button>
                        <button onClick={() => sharePage("twitter")}><FaTwitter /> Twitter</button>
                    </div>
                </article>
            </div>
        </>)
}
