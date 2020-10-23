import utilStyles from "../../styles/utils.module.scss";
import styles from "../../styles/home.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={utilStyles.background}>
        <section className={`${utilStyles.container} ${styles.footerContainer}`}>
          <div className={`${utilStyles.flexContainer} ${styles.flexContainer}`}>
            <div className={`${styles.leftBlock} ${utilStyles.leftBlock}`}>
              <h1>Want to&nbsp;
                <div className={utilStyles.highlightBox}>
                  <div className={utilStyles.highlight}> </div>
                  <span>Work?</span>
                </div>
              </h1>
            </div>
            <div className={`${styles.rightBlock} ${utilStyles.rightBlock}`}>
              <p className={utilStyles.homeParagraph}>I can build the perfect website for you so hit me up!
                You can email me directly at &nbsp;
                <div className={utilStyles.highlightBox}>
                  <div className={utilStyles.highlight}> </div>
                  <span>
                      <strong>
                        <a href="mailto: yurirechr@gmail.com">yurirechr@gmail.com</a>
                      </strong>.
                    </span>
                </div>
              </p>
            </div>
          </div>
          <span>© All rights reserved – Yuri Ramalho Rech</span>
        </section>
      </div>
    </footer>
  );
}
