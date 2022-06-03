import Featured from '../components/Featured';
import PostsNavigation from '../components/PostsNavigation';
import AllPosts from '../components/AllPosts'
import headerStyles from '../styles/Header.module.css'

export default function browse() {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Posts</h1>
            </header>
            <PostsNavigation pageName="browse" />
            <Featured />
            <AllPosts />
        </>
    )
}
