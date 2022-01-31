import Image from 'next/image';
import logo from '../public/IVE-logos_white.png';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <Image src={logo} alt='IVE Logo' width={70} height={40}/>
            <p>Copyright 2022 | Isabella van Eck</p>
            {/* Social Links */}
            <div>
                <a href='https://github.com/IsabellaHun' target='_blank' className={styles.socials}><AiFillGithub/></a>
                <a href='https://www.linkedin.com/in/isabellavaneck/' target='_blank' className={styles.socials}><AiFillLinkedin/></a>
                <a href='https://www.facebook.com/profile.php?id=100073926841078' target='_blank' className={styles.socials}><AiFillFacebook/></a>
            </div>
        </div>
    )
}

export default Footer;