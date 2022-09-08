// Next module imports
import Image from "next/image";

// CSS imports
import headerStyles from '../styles/Header.module.css';
// Local component imports
import Button from './Button';

// Other package imports
import { FaInstagram } from 'react-icons/fa';

export default function Header({ data }) {

    if (!data || data === {}) {
        return null
    }

    return (
        <header className={headerStyles.header}>
            <div>
                <h1>Hey! Welcome to the Marcereads blog!</h1>
                <p>{data.attributes.body}</p>

                <div className={headerStyles.btn_group}>
                    <Button text="Browse posts" href="/articles" noNewTab type="primary"></Button>
                    <Button text="@marcereads" href="https://www.instagram.com/marcereads/?hl=en" type="primary-outline" icon={<FaInstagram />}></Button>
                </div>
            </div>
            <div className={headerStyles.image_wrapper}>
                <Image src={data.attributes.profile_image.data.attributes.url} placeholder="blur" blurDataURL={data.attributes.profile_image.data.attributes.formats.thumbnail.url} objectFit="cover" alt="Portait of site's author" layout="fill" ></Image>
            </div>
        </header>


    )
}