import fetchData from "../../utils/fetchData.js";


import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function guides({ width, data, dataAbout }) {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Guides</h1>
            </header>
            <PostsNavigation />
            <AllPosts width={width} data={data} showPagination />
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { loading: loadingAbout, data: dataAbout, error: errorAbout } = await fetchData("about-section")
        const { loading: loadingGuides, data: dataGuides, error: errorGuides } = await fetchData("articles", false, false, true)

        return {
            props: {
                data: await dataGuides,
                dataAbout: await dataAbout
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }

}
