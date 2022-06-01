import Link from 'next/link';
import Nav from './Nav';
import { HeaderContainer } from './Header.style';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <h1>
          <Link href="/">thisyujeong</Link>
        </h1>
        <Nav />
        <ThemeToggle />
      </div>
    </HeaderContainer>
  );
};

export default Header;
