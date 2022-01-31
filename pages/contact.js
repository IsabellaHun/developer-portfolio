import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div  initial='hidden' animate='visible' variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: .3
        }
      },
    }}>
      <Head>
        <title>IVE | Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.block} ${styles.block8}`}></div>
      <div className={`${styles.block} ${styles.block9}`}></div>
      <div className={`${styles.block} ${styles.block10}`}></div>
      <div className={`${styles.block} ${styles.block11}`}></div>
            {/* Contact Page */}
      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <div className={styles.centerText}>
              <h4 className={styles.colorHead}>Contact Me</h4>
              <h2 className={styles.sectionHead}>Get In Touch</h2><br/>
              <p>I am available to work on projects and<br/> bring your ideas to life.</p>
          </div>
          <div className={styles.rowIcons}>
            <p className={styles.icons}><span className={styles.iconCustom1}><MdLocationPin/></span> South Africa, Gauteng</p>
            <p className={styles.icons}><span className={styles.iconCustom2}><AiFillPhone/></span> (+27)61 406 9432</p>
            <p className={styles.icons}><span className={styles.iconCustom3}><AiFillMail/></span> itsbella2204@gmail.com</p>
          </div>
          
          {/* contact form */}
          <div className={styles.contactForm}>
            <form className={styles.form}> 
              <input className={styles.input} type='text' placeholder='Full Name' />
              <input className={styles.input} type='email' placeholder='Email' />
              <input className={styles.inputMsg} type='text' placeholder='Message' />
              <button type='submit' className={styles.formBtn}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}