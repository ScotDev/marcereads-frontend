import fetchData from "../../utils/fetchData.js";
import Article from '../../components/Article.js';
import Error from '../../components/Error'

export default function article({ data }) {

    if (!data || data === {}) {
        return <Error />
    }

    return (
        <Article data={data} />
    )
}

export const getStaticPaths = async () => {
    const { data: dataArticles, error: error } = await fetchData("articles")

    const paths = dataArticles?.map(item => {
        // console.log(item.attributes.slug)
        return {
            params: { id: item.id.toString() },

        }
    })

    return {
        paths: error ? [] : paths,
        fallback: "blocking",

    }
}

export const getStaticProps = async ({ params }) => {

    const { data: dataArticlesWithID } = await fetchData(`articles/${params.id}`)


    return {
        props: {
            data: await dataArticlesWithID
        },
        revalidate: 1
    }

}