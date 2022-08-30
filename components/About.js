import Image from "next/image";
import sectionStyles from '../styles/Section.module.css';
import AboutSectionStyles from '../styles/AboutSection.module.css';
import Loading from "./Loading";


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function About({ data }) {
    if (!data) {
        return (
            <section className={sectionStyles.section}>
                {/* <div className={AboutSectionStyles.about}> */}
                <h2 className={sectionStyles.title}><Skeleton style={{ width: "130px" }} /></h2>
                <div className={AboutSectionStyles.image_wrapper}>
                    {/* <Image src={data.attributes.profile_image.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.profile_image.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image> */}
                    <Skeleton style={{
                        borderRadius: '50%',
                        display: 'block',
                        width: 208,
                        height: 208,
                        margin: "0px auto"
                    }} />
                </div>

                <Skeleton count={5} style={{
                    margin: "2px"
                }} />

                {/* </div> */}
            </section>
        )
    } else {
        return (
            <section className={sectionStyles.section}>
                <div className={AboutSectionStyles.about}>
                    <h2 className={sectionStyles.title}>About me</h2>
                    <div className={AboutSectionStyles.image_wrapper}>
                        <Image src={data.attributes.profile_image.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.profile_image.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>

                    </div>
                    <p>{data.attributes.body}</p>
                </div>
            </section>
        )
    }


}
