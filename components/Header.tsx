import Link from 'next/link';
import Nav from './Nav';
// import ThemeToggle from './ThemeToggle';
import styles from './Header.module.scss';

const Header = () => {
  return (
    // <HeaderContainer>
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <h1 className={styles.header_logo}>
          <Link href="/">
            <span>thisyujeong</span>.dev
          </Link>
        </h1>
        <Nav />
        {/* TODO: <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Header;
