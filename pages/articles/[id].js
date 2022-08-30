import Head from 'next/head';
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import fetchData from "../../utils/fetchData.js";


import articleStyles from '../../styles/Article.module.css'
import Article from '../../components/Article.js';

// use :empty to handle empty tags filled by cms

export default function article({ data }) {

    return (
        <Article data={data} />

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

    const { data: dataArticlesWithID, error: errorArticlesWithID } = await fetchData(`articles/${params.id}`)

    return {
        props: {
            data: await dataArticlesWithID
        },
        revalidate: 1
    }

}