import React from "react";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./project-display.module.scss";

export interface ProjectDisplay {
  title: String,
  children: any,
  description: String
}

const ProjectDisplay: React.FC<ProjectDisplay> = ({title, children, description}) => {
  return (
      <div className={styles.container}>
        <div className={utilStyles.flexContainer}>
          <div className={styles.leftBlock}>
            <small>{title}</small>
            <h1>Chat App Website</h1>
            {children}
            <p className={utilStyles.homeParagraph}>{description}</p>

            <div className={utilStyles.buttonBox}>
              <div className={utilStyles.buttonBorder}> </div>
              <a href="#" className={utilStyles.button}>see this project</a>
            </div>
          </div>

          <div className={styles.rightBlock}>
            <section className={styles.images}>
              <div className={styles.imgWrapper}>
                <img src="img/35239431.jpg" alt="Project Image"/>
              </div>
              <div className={styles.dots}>
                <img src="img/dot-patterns.png" alt="Project Image"/>
              </div>
              <small>see project</small>
            </section>
          </div>
        </div>
      </div>
  );
};

export default ProjectDisplay;
