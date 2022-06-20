import Head from 'next/head';
const qs = require('qs');

import Featured from '../../components/Featured';
import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function browse({ data, dataFeatured, dataAbout, width }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Browse</title>
                <meta name="description" content="Marcereads blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Posts</h1>
            </header>

            <PostsNavigation />
            {width > 768 ? null : <Featured data={dataFeatured} />}
            <AllPosts width={width} data={data} showPagination />
            <About data={dataAbout} />
        </>
    )
}


// export const getStaticPaths = async () => {
//     const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

//     const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)
//     const data = await res.json();
//     console.log(data.data)
//     const paths = data.data.map((item) => ({
//         params: { id: item.id },
//     }))

//     return { paths, fallback: false }

// }


export const getStaticProps = async () => {
    try {

        const featuredQuery = qs.stringify({
            populate: '*',
            filters: {
                isFeatured: {
                    $eq: true
                }
            }
        }, {
            encodeValuesOnly: true,
        });

        const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

        const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)
        const resFeatured = await fetch(`${CMS_ENDPOINT}/articles?${featuredQuery}`)
        const resAbout = await fetch(`${CMS_ENDPOINT}/about-section?populate=*`)

        return {
            props: {
                data: await res.json(),
                dataFeatured: await resFeatured.json(),
                dataAbout: await resAbout.json()
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }

}
