import Image from "next/image";
import sectionStyles from '../styles/Section.module.css';
import AboutSectionStyles from '../styles/AboutSection.module.css';

const TestAuthorjpeg = "https://i.imgur.com/fW0P7Wm.jpg";

export default function About() {
    return (
        <div className={sectionStyles.section}>
            <div className={AboutSectionStyles.about}>
                <h2 className={sectionStyles.title}>About me</h2>
                <div className={AboutSectionStyles.image_wrapper}>
                    <Image src={TestAuthorjpeg} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>
                </div>
                <p>Cursus habitant a netus et. Ante nunc nisl risus, porttitor pharetra tempor imperdiet eu mauris. Erat odio faucibus eget nulla non elementum etiam. Ornare diam, risus scelerisque sit donec eget. Eu, facilisis mauris pellentesque sit fermentum ipsum maecenas a sit.</p>
            </div>
        </div>
    )
}
