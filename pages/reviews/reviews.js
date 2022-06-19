import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function reviews({ width }) {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Reviews</h1>
            </header>
            <PostsNavigation />
            <AllPosts width={width} showPagination />
            <About />
        </>
    )
}
