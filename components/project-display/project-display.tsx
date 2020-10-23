import React from "react";

import utilStyles from "../../styles/utils.module.scss";
import styles from "./project-display.module.scss";

import Link from "next/link";

import { ProjectDisplay } from "../../models/projects";


const ProjectItem: React.FC<ProjectDisplay> = ({title, children, description, image, id}) => {
  return (
      <div className={styles.container}>
        <div className={utilStyles.flexContainer}>
          <div className={`${styles.leftBlock} ${utilStyles.leftBlock}`}>
            <small className={utilStyles.smallHeader}>Latest work</small>
            <h1>{title}</h1>
            {children}
            <p className={utilStyles.homeParagraph}>{description}</p>

            <Link as={`/project/${id}`} href='/project/[id]'>
              <div className={utilStyles.buttonBox}>
                <div className={utilStyles.buttonBorder}> </div>
                <a className={utilStyles.button}>see this project</a>
              </div>
            </Link>
          </div>

          <div className={`${styles.rightBlock} ${utilStyles.rightBlock}`}>
            <Link as={`/project/${id}`} href='/project/[id]'>
              <section className={styles.images}>
                <div className={styles.imgWrapper}>
                  <img src={image} alt="Project Image"/>
                </div>
                <div className={styles.dots}>
                  <img src="img/dot-patterns.png" alt="Project Image"/>
                </div>
                <small>see project</small>
              </section>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ProjectItem;
