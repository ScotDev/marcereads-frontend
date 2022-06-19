// import Link from "next/link";
import ActiveLink from './ActiveLink';

import postsNavigationStyles from '../styles/PostsNavigation.module.css';


export default function PostsNavigation() {

    return (
        <div className={postsNavigationStyles.container}>
            <ul>
                <li><ActiveLink activeClassName={postsNavigationStyles.browse} href="/articles"><a >All</a></ActiveLink></li>
                <li><ActiveLink activeClassName={postsNavigationStyles.reviews} href="/reviews"><a>Reviews</a></ActiveLink></li>
                <li><ActiveLink activeClassName={postsNavigationStyles.guides} href="/guides"><a>Guides</a></ActiveLink></li>
            </ul>
        </div>
    )
}
