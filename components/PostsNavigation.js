import Link from "next/link";

import postsNavigationStyles from '../styles/PostsNavigation.module.css';


export default function PostsNavigation({ pageName }) {
    let liClassName;
    let isCurrentPage = false;
    switch (pageName) {
        case "browse":
            liClassName = postsNavigationStyles.browse;
            isCurrentPage = true;
            break;
        case "review":
            liClassName = postsNavigationStyles.reviews;
            isCurrentPage = true;
            break;
        case "guide":
            liClassName = postsNavigationStyles.guides;
            isCurrentPage = true;
            break;
        default:
            liClassName = null;
    }
    return (
        <div className={postsNavigationStyles.container}>
            <ul>
                <li className={isCurrentPage ? liClassName : null}><Link href="/browse">All</Link></li>
                <li className={isCurrentPage ? liClassName : null}><Link href="/reviews">Reviews</Link></li>
                <li className={isCurrentPage ? liClassName : null}><Link href="/guides">Guides</Link></li>
            </ul>
        </div>
    )
}
