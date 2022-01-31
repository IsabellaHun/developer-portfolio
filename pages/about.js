import Head from 'next/head';
import Image from 'next/image';
import headshot from '../public/self-portrait.jpeg';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

export default function About() {
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
        <title>IVE | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.block} ${styles.block2}`}></div>
      <div className={`${styles.block} ${styles.block3}`}></div>
      <div className={`${styles.block} ${styles.block4}`}></div>
      <div className={`${styles.block} ${styles.block5}`}></div>
      <div className={styles.aboutPage}>
        <div className={styles.row}>
          <div className={styles.col2}>
            <Image src={headshot} alt='Isabella Photo' width={800} height={500}/>
          </div>
          <div className={styles.col2}>
            <h4 className={styles.colorHead}>Who I Am</h4><br/>
            <h2 className={styles.sectionHead}>About Me</h2>
            <br/>
            <p className={styles.aboutPar}>I'm Isabella van Eck, a professional and talented web developer with front end and back end skills. I am passionate about solving modern day problems in a creative way. I pride myself on being a quick learner - never back down from a challenge!</p><br/>

            <p className={styles.aboutPar}>My skills in web development include: HTML, CSS, JavaScript, JQuery, Bootstrap, Git version control, ReactJS, Node.js, Express, MongoDB - NoSQL database, Next.js, REST API's and UI planning with Adobe XD.</p><br/>

            <p className={styles.aboutPar}>Being a dilligent, hardworking, competitive and result oriented woman, I always work towards achieving the best possible results on each project I get the pleasure of working on.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}