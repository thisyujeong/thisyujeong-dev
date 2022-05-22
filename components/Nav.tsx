import { SideNavContainer } from './Nav.style';
import Link from 'next/link';
import React from 'react';
import navLinks from '../data/navLinks';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Links = ({ setSelected }: { setSelected: Function }) => {
  const router = useRouter();

  return (
    <ul>
      {navLinks.map((link) => (
        <li
          key={link.title}
          data-selected={router.pathname.includes(link.path) ? true : false}
          onClick={() => setSelected(link.title)}
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
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SideNavContainer>
      <Links setSelected={setSelected} />
    </SideNavContainer>
  );
};

export default SideNav;
