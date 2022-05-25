import { SideNavContainer } from './Nav.style';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import navLinks from '../data/navLinks';

const Links = () => {
  const router = useRouter();

  return (
    <ul>
      {navLinks.map((link) => (
        <li
          key={link.title}
          data-selected={router.pathname.includes(link.path) ? true : false}
        >
          <Link href={link.link} passHref>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SideNav = () => {
  return (
    <SideNavContainer>
      <Links />
    </SideNavContainer>
  );
};

export default SideNav;
