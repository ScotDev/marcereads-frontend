import PostsNavigation from '../components/PostsNavigation';
import AllPosts from '../components/AllPosts'
import About from '../components/About'
import headerStyles from '../styles/Header.module.css'

export default function guides() {
    return (
        <>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Guides</h1>
            </header>
            <PostsNavigation />
            <AllPosts />
            <About />
        </>
    )
}
