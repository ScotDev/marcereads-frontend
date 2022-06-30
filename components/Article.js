import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";

import getWordCount from '../utils/readTime.js';

import articleStyles from '../styles/Article.module.css'
import Loading from './Loading';



export default function Article({ data }) {
    const router = useRouter()
    let readTimeEstimate

    if (router.isFallback || !data) {
        return <Loading />
    }

    getWordCount(data.attributes.body).then(res => readTimeEstimate = res);

    const dayjs = require('dayjs')
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{data.attributes.title ?? "Article"}</title>
                <meta name="description" content={data.attributes.title ?? "Marcereads Blog"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={articleStyles.article}>
                <header className={articleStyles.header}>
                    <h1 className={articleStyles.title}>{data.attributes.title}</h1>
                    <h2 className={articleStyles.author}>{data.attributes.author}</h2>
                    <div className={articleStyles.top_row}>
                        <h5 type={data.attributes.type}>{data.attributes.type}</h5>
                    </div>
                    <div className={articleStyles.bottom_row}><h5 className={articleStyles.length}>{readTimeEstimate ? readTimeEstimate + " min" : "3 min"}</h5>
                        <h4 className={articleStyles.date}>{dayjs(data.attributes.date).format("Do MMM YYYY")}</h4></div>

                </header>
                <article>
                    <div className={articleStyles.image_wrapper}>
                        <Image src={data.attributes.main.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.main.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Relevant book for article" layout="fill" />
                    </div>
                    <ReactMarkdown>
                        {data.attributes.body}
                    </ReactMarkdown>
                </article>
            </div>
        </>)
}
