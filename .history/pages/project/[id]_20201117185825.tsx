import utilStyles from '../../styles/utils.module.scss';
import styles from './[id].module.scss';

import { getAllItemsIds, getProjectData } from "../../lib/items";
import {useEffect} from "react";

export async function getStaticPaths() {
  try {
    const paths = await getAllItemsIds()
  } catch
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, title, description, isSiteOn, link, image }) {
  const projectData = await getProjectData(params.id, title, description, isSiteOn, link, image)
  return {
    props: {
      projectData
    }
  }
}


const Project = ({ projectData }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <div className={utilStyles.background}>
        <header className={`${utilStyles.container} ${styles.container}`}>
          <div className={styles.headerContent}>
            <small className={utilStyles.smallHeader}>project showcase</small>
            <h1>{projectData.title}</h1>
            <p className={utilStyles.homeParagraph}>{projectData.description}</p>
            {
              projectData.isSiteOn ?
                <a href={projectData?.link} target='_blank' className={utilStyles.linkAnimation}>visit live site</a>
                :
                null
            }
          </div>
        </header>
      </div>

        <main>
         <section className={styles.imageWrapper}>
           <img src={projectData.image} alt="Project Screen"/>
         </section>
        </main>
      </>
  )
}

export default Project;
