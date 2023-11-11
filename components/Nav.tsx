import Link from 'next/link';
import navLinks from '../data/navLinks';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav_list}>
        {navLinks.map((link) => (
          <li className={styles.nav_item} key={link.title}>
            <Link href={link.link} passHref>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
