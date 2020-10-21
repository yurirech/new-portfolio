import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Navbar from "../components/navbar/navbar";
import ProjectDisplay from "../components/project-display/project-display";
import Chip from "../components/chip/chip";


export default function Home() {
  return (
    <div>
      <Head>
        <title>YR - Web Design and Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{position: 'absolute', width: '100%'}}>
        <Navbar />
      </header>



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
                I design and build amazing websites for businesses around the world. If you need a sleek and powerful website,
                send me an email. If we are a good fit, I will give you a time and cost estimate.</p>
              <div className={utilStyles.buttonBox}>
                <a href="#Portfolio" className={utilStyles.button}>check out my work</a>
                <div className={utilStyles.buttonBorder}> </div>
              </div>
            </div>
          </section>
        </div>

        <section id='Portfolio' className={`${utilStyles.container} ${utilStyles.fullHeightContainer}`}>
          <ProjectDisplay title='Latest Work' description='This is a homepage design and build for a concept project – a chat application. I designed the page
            first then built a responsive web page using Webflow.' >
            <div className={utilStyles.flexContainer}>
              <Chip title='Website Design'/>
              <Chip title='Concept'/>
              <Chip title='React Development'/>
            </div>
          </ProjectDisplay>
        </section>

        <section className={`${utilStyles.container} ${utilStyles.fullHeightContainer}`}>
          <ProjectDisplay title='Latest Work' description='This is a homepage design and build for a concept project – a chat application. I designed the page
            first then built a responsive web page using Webflow.' >
            <div className={utilStyles.flexContainer}>
              <Chip title='Website Design'/>
              <Chip title='Concept'/>
              <Chip title='React Development'/>
            </div>
          </ProjectDisplay>
        </section>

        <section>
          <div className="left-block">
            <h1>What <span>I do</span></h1>
          </div>
          <div className="right-block">
            <div className="right-block-item">
              <h3>Design</h3>
              <p>I design beautiful and powerful websites for modern businesses. Any business today needs a website that
                wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.</p>
            </div>
            <div className="right-block-item">
              <h3>Development</h3>
              <p>I build websites with React or Webflow where I can create responsive, powerful and fully custom websites.
                Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.</p>
            </div>
          </div>
        </section>

        <div className={utilStyles.background}>
          <section className={utilStyles.container}>
            <div className={utilStyles.flexContainer}>
              <div className="left-block">
                <h1>Want to Work?</h1>
              </div>
              <div className="right-block">
                <p>If you need a modern and powerful website for your business, startup or yourself, I am available for
                  work. You can email me directly at <span>yurirechr@gmail.com</span>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer style={{position: 'absolute'}}>
        © All rights reserved – Yuri Ramalho Rech
      </footer>
    </div>
  )
}
