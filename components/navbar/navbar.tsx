import styles from './navbar.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from "next/link";

export default function Navbar() {
  return (
    <menu id='menu' className={`${utilStyles.container} ${styles.container}`}>
      <h2>Yuri.</h2>
      <div>
        <Link href='#'>
          <a className={utilStyles.linkAnimation}>get in touch</a>
        </Link>
       <Link href='#'>
         <a className={utilStyles.linkAnimation}>my work</a>
       </Link>
      </div>
    </menu>
  );
}
