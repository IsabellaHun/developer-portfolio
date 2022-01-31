import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import headshot from '../public/self-portrait.jpeg';
import styles from '../styles/Home.module.css';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineArrowRight, AiFillPhone, AiFillMail } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVE | Home</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      {/* Adding the colored blocks */}
      <motion.div initial='hidden' animate='visible' variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              delay: .5
            }
          },
        }}>
      <div className={`${styles.block} ${styles.block1}`}></div>
      <div className={`${styles.block} ${styles.block2}`}></div>
      <div className={`${styles.block} ${styles.block3}`}></div>
      <div className={`${styles.block} ${styles.block4}`}></div>
      <div className={`${styles.block} ${styles.block5}`}></div>
      <div className={`${styles.block} ${styles.block6}`}></div>
      <div className={`${styles.block} ${styles.block7}`}></div>
      <div className={`${styles.block} ${styles.block8}`}></div>
      <div className={`${styles.block} ${styles.block9}`}></div>
      <div className={`${styles.block} ${styles.block10}`}></div>
      <div className={`${styles.block} ${styles.block11}`}></div>
        </motion.div>

      {/* Home Page */}
      <div className={styles.homePage}>
        <motion.div className={styles.intro} initial='hidden' animate='visible' variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              delay: .5
            }
          },
        }}>
            <h1 className={styles.heading}>I'm Isabella van Eck</h1>
            <h3 className={styles.subHead}>Full-Stack Web Developer</h3>
            <br/>

            <p className={styles.par}>Junior Web Developer, capable of designing eye catching, innovative and modern web appliactions.</p><br/>
            <p className={styles.par}>Eager to build out-of-the-box solutions for regional clients. Skilled in the MERN stack to develop the front end and back end for web applications.</p>
            <br/>
            <Link href='/about'><a className={styles.btn}>Learn More About Me <AiOutlineArrowRight/></a></Link>
            <br/><br/>

            {/* Social Links */}
            <a href='https://github.com/IsabellaHun' target='_blank' rel="noreferrer" className={styles.socials}><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/isabellavaneck/' target='_blank' rel="noreferrer" className={styles.socials}><AiFillLinkedin/></a>
            <a href='https://www.facebook.com/profile.php?id=100073926841078' target='_blank' rel="noreferrer" className={styles.socials}><AiFillFacebook/></a>
        </motion.div>
      </div>

      {/* About Page */}
      <div className={styles.aboutPage}>
        <div className={styles.row}>
          <div className={styles.col2}>
            <Image src={headshot} alt='Isabella Photo' width={800} height={500}/>
          </div>
          <div className={styles.col2}>
            <h4 className={styles.colorHead}>Who I Am</h4>
            <h2 className={styles.sectionHead}>About Me</h2>
            <br/>
            <p className={styles.aboutPar}>I'm Isabella van Eck, a professional and talented web developer with front end and back end skills. I am passionate about solving modern day problems in a creative way. I pride myself on being a quick learner - never back down from a challenge!</p><br/>

            <p className={styles.aboutPar}>My skills in web development include: HTML, CSS, JavaScript, JQuery, Bootstrap, Git version control, ReactJS, Node.js, Express, MongoDB - NoSQL database, Next.js, REST API's and UI planning with Adobe XD.</p><br/>

            <p className={styles.aboutPar}>Being a dilligent, hardworking, competitive and result oriented woman, I always work towards achieving the best possible results on each project I get the pleasure of working on.</p>
          </div>
        </div>
      </div>

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
    </div>
  )
}
