import styles from './navbar.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";


export default function Navbar() {

  const router = useRouter();

  return (
    <header style={{position: 'absolute', width: '100%'}}>
      <menu id='menu' className={`${utilStyles.container} ${styles.container}`}>
        <Link href='/'>
          <a><h2>Yuri.</h2></a>
        </Link>
        <div>
          {
            router.route !== '/' ?
              <Link href='/'>
                <a className={utilStyles.linkAnimation}>back to home</a>
              </Link>
              :
              <Link href='#Portfolio'>
                <a className={utilStyles.linkAnimation}>my work</a>
              </Link>
          }
          <a href="mailto: yurirechr@gmail.com" className={utilStyles.linkAnimation}>get in touch</a>
        </div>
      </menu>
    </header>
  );
}
