import Head from 'next/head'
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div initial='hidden' animate='visible' variants={{
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
        <title>IVE | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.block} ${styles.block5}`}></div>
      <div className={`${styles.block} ${styles.block6}`}></div>
      <div className={`${styles.block} ${styles.block7}`}></div>
      <div className={`${styles.block} ${styles.block8}`}></div>
      {/* Projects Page - Yet to add projects*/}
      <div className={styles.projectsPage}>
        <div className={styles.centerText}>
          <h4 className={styles.colorHead}>My Work</h4><br/>
          <h2 className={styles.sectionHead}>Projects</h2><br/>
        </div>

        {/* first row */}
        <div className={styles.row3}>
          <motion.div className={`${styles.col3} ${styles.boxPink}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            <a href='#'>
              <video width={'100%'} height={'100%'} autoPlay muted>
                <source src='Adora_project1.mp4' type='video/mp4'/>
              </video>
            </a>
          </motion.div>
          <motion.div className={`${styles.col3} ${styles.boxBlue}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            <a href='#'>
              <video width={'100%'} height={'100%'} autoPlay muted>
                <source src='Minesweeper_project2.mp4' type='video/mp4'/>
              </video>
            </a>
          </motion.div>
          <motion.div className={`${styles.col3} ${styles.boxYellow}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            <a href='#'>
              <video width={'100%'} height={'100%'} autoPlay muted>
                <source src='Tracker_project3.mp4' type='video/mp4'/>
              </video>
            </a>
          </motion.div>
        </div>
        {/* second row */}
        <div className={styles.row3}>
        <motion.div className={`${styles.col3} ${styles.boxOrange}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            <a href='#'>
              <video width={'100%'} height={'100%'} autoPlay muted>
                <source src='ITunesInterfacer_project4.mp4' type='video/mp4'/>
              </video>
            </a>
          </motion.div>
          <motion.div className={`${styles.col3} ${styles.boxGreen}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            Nothing to show yet
          </motion.div>
          <motion.div className={`${styles.col3} ${styles.boxPurple}`} whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.4,
            transition: {
              duration: .4
            }
          }}>
            Nothing to show yet
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
}