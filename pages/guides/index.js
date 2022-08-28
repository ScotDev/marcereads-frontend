import Head from 'next/head';
import fetchData from "../../utils/fetchData.js";

import PostsNavigation from '../../components/PostsNavigation';
import PostsBrowse from '../../components/PostsBrowse';
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function guides({ width, data, dataAbout }) {
    return (
        <>        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Guides</title>
            <meta name="description" content="Marcereads Blog - Guides" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Guides</h1>
            </header>
            <PostsNavigation />
            <PostsBrowse data={data} width={width} />
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { data: dataAbout } = await fetchData("about-section")
        const { data: dataGuides } = await fetchData("articles", false, false, true)

        const getDataPosts = async () => {
            let reorderedData = [...dataGuides];
            let chunkedData = []
            const chunkSize = 6;

            const hasFeaturedData = await dataGuides.some(item => {
                return item.attributes.isFeatured === true;
            })

            if (hasFeaturedData) {
                const featuredData = await dataGuides.filter(item => {
                    return item.attributes.isFeatured;
                })
                const featuredDataIndex = await dataGuides.findIndex(item => {
                    return item.attributes.isFeatured;
                })

                reorderedData.splice(featuredDataIndex, 1)
                reorderedData.unshift(featuredData[0])
            }

            for (let i = 0; i < reorderedData.length; i += chunkSize) {
                const chunk = reorderedData.slice(i, i + chunkSize)
                chunkedData.push(chunk)
            }

            return chunkedData;
        }

        const reorderedData = await getDataPosts()

        return {
            props: {
                data: reorderedData,
                dataAbout: await dataAbout
            },
            revalidate: 1
        }
    } catch (error) {
        return {
            props: {},
            revalidate: 1
        }
    }

}
