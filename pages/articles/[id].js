import Head from 'next/head';
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import fetchData from "../../utils/fetchData.js";
import getWordCount from "../../utils/readTime.js";

import articleStyles from '../../styles/Article.module.css'
import Article from '../../components/Article.js';

// use :empty to handle empty tags filled by cms

export default function article({ data, readTimeEstimate }) {

    console.log(readTimeEstimate)
    return (
        <Article data={data} readTimeEstimate={readTimeEstimate} />

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
        fallback: true,

    }
}

export const getStaticProps = async ({ params }) => {

    const { loading: loadingArticlesWithID, data: dataArticlesWithID, error: errorArticlesWithID } = await fetchData(`articles/${params.id}`)
    // const res = await fetch(`${CMS_ENDPOINT}/articles/${params.id}?populate=*`);
    // const data = await res.json();

    // const getReadTime = async () => {
    //     // console.log(dataArticlesWithID.attributes.body)
    //     // const res = await fetch(`${process.env.LOCAL_API_ENDPOINT}/readtime`, { method: "POST", body: dataArticlesWithID.attributes.body })
    //     // console.log(await res.json())


    //     try {

    const readTimeEstimate = await getWordCount(dataArticlesWithID.attributes.body)
    // const res = await fetch(`${process.env.LOCAL_API_ENDPOINT}/readtime`, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ value: dataArticlesWithID.attributes.body })
    // })

    // console.log("returned value: ", await res.json())
    // return await readTimeEstimate;
    // } catch (error) {
    //     console.error("error here: ", error)
    // }
    // console.log(readTimeEstimate)



    // const estimate = await getReadTime();

    return {
        props: {
            data: await dataArticlesWithID,
            readTimeEstimate: readTimeEstimate
        },
        revalidate: 1
    }

}