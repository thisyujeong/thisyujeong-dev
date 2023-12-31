'use client';
import Link from 'next/link';
import navLinks from '../data/navLinks';
import styles from './Nav.module.scss';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const Nav = ({ params }: Props) => {
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setHamburgerToggle(false);
  }, [pathname]);

  console.log('pathname', pathname);
  return (
    <div className={styles.nav}>
      {/* PC, Tabletl Nav */}
      <ul className={styles.nav_list}>
        {navLinks.map((link) => (
          <li
            className={`
            ${styles.nav_item}
            ${
              link.link === pathname || (link.link === '/' && pathname.includes('/blog'))
                ? styles.active
                : link.link !== '/' && pathname.includes(link.link)
                ? styles.active
                : ''
            }
          `}
            key={link.title}
          >
            <Link href={link.link} passHref>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      {hamburgerToggle && (
        <div className={styles.m_nav_container}>
          <ul className={styles.m_nav_list}>
            {navLinks.map((link) => (
              <li
                className={`
                  ${styles.m_nav_item} 
                  ${
                    link.link === pathname ||
                    (link.link === '/' && pathname.includes('/blog'))
                      ? styles.active
                      : link.link !== '/' && pathname.includes(link.link)
                      ? styles.active
                      : ''
                  }
                `}
                key={link.title}
              >
                <Link href={link.link} passHref>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Hamburder Button */}
      <button
        className={styles.hamburger}
        onClick={() => setHamburgerToggle(!hamburgerToggle)}
      >
        <svg id="Layer_1" viewBox="0 0 64 64">
          <g id="Navicon" transform="translate(330.000000, 232.000000)">
            <polygon points="-321.8,-219 -274.3,-219 -274.3,-212.7 -321.8,-212.7    " />
            <polygon points="-321.8,-203.2 -274.3,-203.2 -274.3,-196.8 -321.8,-196.8    " />
            <polygon points="-321.8,-187.3 -274.3,-187.3 -274.3,-181 -321.8,-181    " />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Nav;
