import Head from 'next/head';
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import fetchData from "../../utils/fetchData.js";

import articleStyles from '../../styles/Article.module.css'

// use :empty to handle empty tags filled by cms

export default function about({ data, readTimeEstimate }) {
    // console.log(readTimeEstimate)
    // const readTimeEstimate = "5"
    const dayjs = require('dayjs')
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)

    const type = data.attributes.type;
    const length = "4";

    return (<>
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
                    <h5 type={type}>{type}</h5>
                </div>
                <div className={articleStyles.bottom_row}><h5 className={articleStyles.length}>{readTimeEstimate.estimate + " mins"}</h5>
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
    </>
    )
}

export const getStaticPaths = async () => {

    const { loading: loadingArticles, data: dataArticles, error: errorArticles } = await fetchData("articles")

    const paths = dataArticles.map(item => {
        // console.log(item.attributes.slug)
        return {
            params: { id: item.id.toString() },

        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const { loading: loadingArticlesWithID, data: dataArticlesWithID, error: errorArticlesWithID } = await fetchData(`articles/${params.id}`)
    // const res = await fetch(`${CMS_ENDPOINT}/articles/${params.id}?populate=*`);
    // const data = await res.json();

    const getReadTime = async () => {
        // console.log(dataArticlesWithID.attributes.body)
        // const res = await fetch(`${process.env.LOCAL_API_ENDPOINT}/readtime`, { method: "POST", body: dataArticlesWithID.attributes.body })
        // console.log(await res.json())


        try {
            const res = await fetch(`${process.env.LOCAL_API_ENDPOINT}/readtime`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ value: dataArticlesWithID.attributes.body })
            })
            // console.log("Res here", res)
            return await res.json()
            // console.log("returned value: ", await res.json())
        } catch (error) {
            console.error("error here: ", error)
        }
    }



    const estimate = await getReadTime();

    return {
        props: {
            data: await dataArticlesWithID,
            readTimeEstimate: estimate || { estimate: "25" },
            revalidate: 1
        }
    }
}
