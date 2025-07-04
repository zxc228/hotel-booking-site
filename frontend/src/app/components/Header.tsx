import styles from './../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Querencia<br />De Sevilla
      </div>
      <nav className={styles.nav}>
        <a href="#">overview</a>
        <a href="#">suites</a>
        <a href="#">experiences</a>
        <a href="#">restaurant</a>
        <a href="#">gallery</a>
        <button className={styles.bookButton}>Book</button>
      </nav>
    </header>
  );
}