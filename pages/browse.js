import Featured from '../components/Featured';
import PostsNavigation from '../components/PostsNavigation';
import AllPosts from '../components/AllPosts'
import About from '../components/About'
import headerStyles from '../styles/Header.module.css'

export default function browse({ post, width }) {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Posts</h1>
            </header>

            <PostsNavigation />
            {width > 768 ? null : <Featured />}
            <AllPosts width={width} showPagination />
            <About />
        </>
    )
}

export const getStaticPaths = async () => {
    const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

    const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)

    const data = await res.json();

    const paths = data.map((item) => ({
        params: { id: item.id },
    }))

    return { paths, fallback: false }

}


// export async function getStaticProps({ params }) {

//     const res = await fetch(`https://.../articles/${params.id}`)
//     const item = await res.json()

//     return { props: { item } }
// }
