import Image from "next/image";
import ReactMarkdown from "react-markdown";

// import aboutStyles from '../styles/About.module.css'
import articleStyles from '../../styles/Article.module.css'
import miniCardStyles from '../../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

// use :empty to handle empty tags filled by cms

export default function about({ data }) {

    console.log(data.attributes)

    // const title = "The Seven Husbands of Evelyn Hugo";
    // const author = "Taylor Jenkins Reid";
    const type = data.attributes.type;
    const length = "4";
    // const date = "2nd June 2020"

    return (<div className={articleStyles.article}>
        <header className={articleStyles.header}>
            <h1 className={articleStyles.title}>{data.attributes.title}</h1>
            <h2 className={articleStyles.author}>{data.attributes.author}</h2>
            <div className={articleStyles.top_row}>
                <h5 type={type}>{type}</h5>
            </div>
            <div className={articleStyles.bottom_row}><h6 className={articleStyles.length}>{length + " min"}</h6>
                <h4 className={articleStyles.date}>{data.attributes.date}</h4></div>

        </header>
        <article>
            <div className={articleStyles.image_wrapper}>
                <Image src={data.attributes.main.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.main.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Relevant book for article" layout="fill" />
            </div>
            <ReactMarkdown>
                {data.attributes.body}
            </ReactMarkdown>
        </article>
    </div>
    )
}

export const getStaticPaths = async () => {

    const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

    const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)
    const data = await res.json();
    // console.log(data)

    const paths = data.data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const CMS_ENDPOINT = process.env.CMS_ENDPOINT;
    const res = await fetch(`${CMS_ENDPOINT}/articles/${params.id}?populate=*`);
    const data = await res.json();

    return {
        props: { data: data.data }
    }
}
