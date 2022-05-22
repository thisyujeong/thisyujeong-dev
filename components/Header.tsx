import Link from 'next/link';
import SideNav from './Nav';
import { HeaderContainer } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <h1>
          <Link href="/">thisyujeong</Link>
        </h1>
        <SideNav />
      </div>
    </HeaderContainer>
  );
};

export default Header;
