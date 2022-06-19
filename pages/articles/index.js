import Featured from '../../components/Featured';
import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function browse({ data, dataAbout, width }) {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Posts</h1>
            </header>

            <PostsNavigation />
            {width > 768 ? null : <Featured />}
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
        const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

        const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)
        const resAbout = await fetch(`${CMS_ENDPOINT}/about-section?populate=*`)
        const data = await res.json();
        const dataAbout = await resAbout.json();

        return { props: { data: data.data, dataAbout: dataAbout } }
    } catch (error) {
        return {
            props: {}
        }
    }

}
