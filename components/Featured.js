import Card from "./Card";
import sectionStyles from '../styles/Section.module.css';

export default function Featured({ data }) {

    const parsedData = data.data[0]
    console.log("featured", parsedData)
    return (
        <section className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>Featured</h2>

            <Card featured priority url={`/articles/${parsedData.id}`} type={parsedData.attributes.type} title={parsedData.attributes.title} author={parsedData.attributes.author} date={parsedData.attributes.date} imgURL={parsedData.attributes.main.data.attributes.url} thumbnailURL={parsedData.attributes.main.data.attributes.formats.thumbnail.url} />

        </section>
    )
}
