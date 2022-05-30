import sectionStyles from '../styles/Section.module.css';
import MiniCard from './MiniCard';

export default function Latest() {
    return (
        <div className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Latest</h2>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </div>
    )
}
