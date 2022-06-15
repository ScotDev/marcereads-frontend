import Image from "next/image";

// import aboutStyles from '../styles/About.module.css'
import articleStyles from '../styles/Article.module.css'
import miniCardStyles from '../styles/MiniCard.module.css'

const testImage = "https://i.imgur.com/7vJ98fU.jpg";

// use :empty to handle empty tags filled by cms


export default function about({ title, author, type, length, date }) {

    title = "The Seven Husbands of Evelyn Hugo";
    author = "Taylor Jenkins Reid";
    type = "review";
    length = "4";
    date = "2nd June 2020"
    let h5ClassName;
    switch (type) {
        case "review":
            h5ClassName = miniCardStyles.review;
            break;
        case "guide":
            h5ClassName = miniCardStyles.guide;
            break;
        default:
            h5ClassName = miniCardStyles.review;
    }
    return (<div className={articleStyles.article}>
        <header className={articleStyles.header}>
            <h1 className={articleStyles.title}>{title}</h1>
            <h2 className={articleStyles.author}>{author}</h2>
            <div className={articleStyles.top_row}>
                <h5 className={h5ClassName}>{type}</h5>
            </div>
            <div className={articleStyles.bottom_row}><h6 className={articleStyles.length}>{length + " min"}</h6>
                <h4 className={articleStyles.date}>{date}</h4></div>

        </header>
        <article>
            <div className={articleStyles.image_wrapper}>
                <Image src={testImage} objectFit="cover" alt="Relevant book for article" layout="fill" />
            </div>
            <p>Commodo fusce duis bibendum erat arcu pellentesque aliquam feugiat. Dolor commodo, sed quam viverra mi. Vulputate integer imperdiet turpis volutpat ultrices bibendum nisl. Consectetur morbi est, sed in sed placerat turpis leo. Lectus eget est nulla pretium et aliquam.

                Pharetra ut volutpat posuere quam id nec. Ornare nec donec dolor aliquet suspendisse auctor eget quis aenean. Et et sodales nunc nibh viverra diam. Lectus volutpat cras vitae sed tristique. Faucibus fringilla auctor faucibus pulvinar enim quisque turpis gravida gravida. Tincidunt nunc, ac integer mi amet feugiat eget.
            </p>

            <h3>Subtitle</h3>
            <p>
                Augue lorem sit varius sit massa. Duis lacinia pretium in ut. Nulla nunc felis, in a vitae posuere sit. Vivamus mi semper tortor, ut. Dui amet, lectus placerat nunc sem luctus facilisis. Purus parturient quam in nec. Tristique lorem eleifend id ultricies tellus bibendum sed. A duis metus massa sit facilisi sit feugiat quam feugiat. Pharetra volutpat cursus placerat rhoncus nascetur ornare orci sit eget. Aliquet lorem amet volutpat vitae. Posuere id nisi, magnis praesent diam, amet, velit, viverra. Eget aliquam nisl nisl, suspendisse neque, elit, arcu. Facilisis venenatis venenatis, diam fermentum tristique vivamus gravida tempor id. Bibendum molestie nullam morbi eget. Urna sed tincidunt et sit sagittis.
            </p>



            <p>
                Sed aliquam lacus, quisque dictum. Suscipit enim, enim suspendisse aliquam ipsum tempor habitant. Quam lectus sed tristique felis. Dignissim sagittis, viverra neque arcu non sagittis, quis nisi. Dictum cursus nascetur porttitor bibendum est sed tellus ultricies.
            </p>
        </article>
    </div>
    )
}
