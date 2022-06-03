import Image from "next/image";

import headerStyles from '../styles/Header.module.css'
import aboutStyles from '../styles/About.module.css'

const TestAuthorjpeg = "https://i.imgur.com/fW0P7Wm.jpg";
const testImage = "https://i.imgur.com/7vJ98fU.jpg";

export default function about() {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.page_title}>About me</h1>
            <section className={aboutStyles.about}>
                <div className={aboutStyles.profile_image_wrapper}>
                    <Image src={TestAuthorjpeg} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>
                </div>
                <article>
                    <p>Commodo fusce duis bibendum erat arcu pellentesque aliquam feugiat. Dolor commodo, sed quam viverra mi. Vulputate integer imperdiet turpis volutpat ultrices bibendum nisl. Consectetur morbi est, sed in sed placerat turpis leo. Lectus eget est nulla pretium et aliquam.

                        Pharetra ut volutpat posuere quam id nec. Ornare nec donec dolor aliquet suspendisse auctor eget quis aenean. Et et sodales nunc nibh viverra diam. Lectus volutpat cras vitae sed tristique. Faucibus fringilla auctor faucibus pulvinar enim quisque turpis gravida gravida. Tincidunt nunc, ac integer mi amet feugiat eget.
                    </p>

                    <h3>Subtitle</h3>
                    <p>
                        Augue lorem sit varius sit massa. Duis lacinia pretium in ut. Nulla nunc felis, in a vitae posuere sit. Vivamus mi semper tortor, ut. Dui amet, lectus placerat nunc sem luctus facilisis. Purus parturient quam in nec. Tristique lorem eleifend id ultricies tellus bibendum sed. A duis metus massa sit facilisi sit feugiat quam feugiat. Pharetra volutpat cursus placerat rhoncus nascetur ornare orci sit eget. Aliquet lorem amet volutpat vitae. Posuere id nisi, magnis praesent diam, amet, velit, viverra. Eget aliquam nisl nisl, suspendisse neque, elit, arcu. Facilisis venenatis venenatis, diam fermentum tristique vivamus gravida tempor id. Bibendum molestie nullam morbi eget. Urna sed tincidunt et sit sagittis.
                    </p>

                    <div className={aboutStyles.image_wrapper}>
                        <Image src={testImage} objectFit="cover" alt="Relevant book for article" layout="fill" />
                    </div>

                    <p>
                        Sed aliquam lacus, quisque dictum. Suscipit enim, enim suspendisse aliquam ipsum tempor habitant. Quam lectus sed tristique felis. Dignissim sagittis, viverra neque arcu non sagittis, quis nisi. Dictum cursus nascetur porttitor bibendum est sed tellus ultricies.
                    </p>
                </article>
            </section>
        </header>
    )
}
