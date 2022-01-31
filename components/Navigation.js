import navStyles from '../styles\/Navigation.module.css';
import Image from 'next/image';
import logo from '../public/IVE-logos_white.png';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className={navStyles.navContainer}>
            <Image src={logo} alt='IVE Logo' width={70} height={40}/>
            <nav className={navStyles.nav}>
                <ul className={navStyles.ul}>
                    <li className={navStyles.li}>
                        <Link href='/'><span className={navStyles.a}>Home</span></Link>
                    </li>
                    <li className={navStyles.li}>
                        <Link href='/about'><span className={navStyles.a}>About</span></Link>
                    </li>
                    <li className={navStyles.li}>
                        <Link href='/projects'><span className={navStyles.a}>Projects</span></Link>
                    </li>
                    <li className={navStyles.li}>
                        <Link href='/contact'><span className={navStyles.a}>Contact Me</span></Link>
                    </li>
                </ul>
            </nav>
            <a href='IsabellaCV.pdf' download><button className={navStyles.btn}>Download Resume</button></a>
        </div>

    )
}

export default Navigation;