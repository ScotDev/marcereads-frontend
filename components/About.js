import Image from "next/image";
import sectionStyles from '../styles/Section.module.css';
import AboutSectionStyles from '../styles/AboutSection.module.css';

const TestAuthorjpeg = "https://i.imgur.com/fW0P7Wm.jpg";

export default function About({ data }) {
    return (
        <section className={sectionStyles.section}>
            <div className={AboutSectionStyles.about}>
                <h2 className={sectionStyles.title}>About me</h2>
                <div className={AboutSectionStyles.image_wrapper}>
                    <Image src={data.attributes.profile_image.data.attributes.url} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>
                </div>
                <p>{data.attributes.body}</p>
            </div>
        </section>
    )
}
