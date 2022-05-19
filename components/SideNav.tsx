import { SideNavContainer } from './SideNav.style';
import Link from 'next/link';
import React from 'react';
import navLinks from '../data/navLinks';
import { useRouter } from 'next/router';

const Links = () => {
  const router = useRouter();
  return (
    <ul>
      {navLinks.map((link) => (
        <li key={link.title}>
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
