import Card from "./Card";
import sectionStyles from '../styles/Section.module.css';

export default function Featured() {
    return (
        <div className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Featured</h2>
            <Card />
        </div>
    )
}
