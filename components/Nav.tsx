import { NavContainer, DropNavContainer } from './Nav.style';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';
import navLinks from '../data/navLinks';

const Links = ({
  setIsOpenMenu,
}: {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <ul>
      {navLinks.map((link) => (
        <li
          key={link.title}
          data-selected={router.pathname.includes(link.path) ? true : false}
        >
          <Link href={link.link} passHref>
            <a onClick={() => setIsOpenMenu(false)}>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <>
      <NavContainer>
        <Links setIsOpenMenu={setIsOpenMenu} />
        <svg
          className={isOpenMenu ? 'active' : ''}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 20 20"
        >
          <g transform="matrix(-1,0,0,1,20,0)">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m3 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h12c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289h-12c-.26522 0-.51957-.10536-.70711-.29289-.18753-.18754-.29289-.44189-.29289-.70711zm0 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h6c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929h-6c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071zm0 5c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929h12c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929h-12c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071z"
            ></path>
          </g>
        </svg>
      </NavContainer>
      <DropNavContainer visible={isOpenMenu}>
        <Links setIsOpenMenu={setIsOpenMenu} />
      </DropNavContainer>
    </>
  );
};

export default Nav;
