import styles from './test.module.scss';

export default function Test() {
  return ( <h1 className={`${styles.test} ${styles.circle}`}>{console.log(styles)} IMMA TEST</h1>)
}
