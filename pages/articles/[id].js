import fetchData from "../../utils/fetchData.js";
import Article from '../../components/Article.js';

export default function article({ data }) {

    return (
        <Article data={data} />
    )
}

export const getStaticPaths = async () => {

    const { data: dataArticles } = await fetchData("articles")


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

    const { data: dataArticlesWithID } = await fetchData(`articles/${params.id}`)

    if (!dataArticlesWithID || dataArticlesWithID === {}) {
        console.log("No data", dataArticlesWithID)
    }

    return {
        props: {
            data: await dataArticlesWithID
        },
        revalidate: 1
    }

}