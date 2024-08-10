import css from './Footer.module.scss';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={css.Footer}>
            <div>
                <Image
                    src='/icons/logo.png'
                    alt='logo'
                    width={60}
                    height={60}
                    className={'mt-[-8px]'}
                />
                <span>Copyright © 2024 BK Movies</span>
            </div>
            <a href='https://github.com/BKhmil' target='_blank' rel='noopener noreferrer'>
                <Image
                    src='/icons/githubIcon.png'
                    alt='github icon'
                    width={40}
                    height={40}
                    className={'cursor-pointer'}
                />
            </a>
        </footer>
    );
}

export default Footer;