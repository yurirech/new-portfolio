import Head from 'next/head'

import styles from '../styles/home.module.scss'
import utilStyles from '../styles/utils.module.scss'

import ProjectDisplay from "../components/project-display/project-display";
import Chip from "../components/chip/chip";

import { projects } from "../models/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>YR - Web Design and Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilStyles.background}>
          <section className={`${utilStyles.container} ${styles.homeContainer}`}>
            <div>
              <h1>Hi, I’m Yuri,&nbsp;

                <div className={utilStyles.highlightBox}>
                  <div className={utilStyles.highlight}> </div>
                  <span>Front-end</span>
                </div> Developer and&nbsp;

                <div className={utilStyles.highlightBox}>
                  <div className={`${utilStyles.highlight} ${utilStyles.highlightDelay}`}> </div>
                  <span> Web Designer</span>
                </div>
              </h1>

              <p className={utilStyles.homeParagraph}>
                I design and build amazing websites for businesses and people around the world. If you need a sleek and powerful website,
                send me an email. If we are a good fit, I will give you a time and cost estimate.</p>
              <div className={utilStyles.buttonBox}>
                <a href="#Portfolio" className={utilStyles.button}>check out my work</a>
                <div className={utilStyles.buttonBorder}> </div>
              </div>
            </div>
          </section>
        </div>

        {
          projects.map((project, i) => {
            return (
              <section id='Portfolio' key={i} className={`${utilStyles.container} ${utilStyles.fullHeightContainer}`}>
                <ProjectDisplay id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                >
                  <div className={utilStyles.flexContainer}>
                    {
                      project.chips.map(chip => {
                        return <Chip title={chip}/>
                      })
                    }
                  </div>
                </ProjectDisplay>
              </section>
            )}
        )}

        <section  className={`${utilStyles.container} ${styles.whatIDoContainer}`}>
          <div className={utilStyles.flexContainer}>
            <div className={`${styles.leftBlock} ${utilStyles.leftBlock}`}>
              <h1>What&nbsp;
                <div className={utilStyles.highlightBox}>
                  <div className={utilStyles.highlight}> </div>
                  <span> I do</span>
                </div>
              </h1>
            </div>

            <div className={`${styles.rightBlock} ${utilStyles.rightBlock}`}>
              <div className={styles.rightBlockItem}>
                <h2>Design</h2>
                <p className={utilStyles.homeParagraph}>I design beautiful and powerful websites for modern businesses. Any business today needs a website that
                  wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.</p>
              </div>
              <div className={styles.rightBlockItem}>
                <h2>Development</h2>
                <p className={utilStyles.homeParagraph}>I build websites with React (like this one!) or Webflow where I can create responsive,
                  powerful and fully custom websites.
                  Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
