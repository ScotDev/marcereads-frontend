import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import headerStyles from '../styles/Header.module.css'
import aboutStyles from '../styles/About.module.css'

import fetchData from "../helpers/fetchData.js";

// const TestAuthorjpeg = "https://i.imgur.com/fW0P7Wm.jpg";
// const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function about({ data }) {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>About</title>
            <meta name="description" content="Marcereads blog" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={headerStyles.header}>
            <h1 className={headerStyles.page_title}>About me</h1>
        </header>

        <section className={aboutStyles.about}>
            <div className={aboutStyles.profile_image_wrapper}>
                <Image src={data.attributes.profile_image.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.profile_image.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>
                {/* <Image src={TestAuthorjpeg} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image> */}
            </div>
            <article>
                <ReactMarkdown>
                    {data.attributes.body}

                    {/* 
                <div className={aboutStyles.image_wrapper}>
                    <Image src={testImage} objectFit="cover" alt="Relevant book for article" layout="fill" />
                </div> */}
                </ReactMarkdown>
            </article>
        </section>

    </>
    )
}

export const getStaticProps = async () => {

    try {

        const { loading, data, error } = await fetchData("about", true)

        // const res = await fetch(`${CMS_ENDPOINT}/about?populate=*`)
        // const data = await res.json();

        return {
            props: {
                data: data
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }


}