import Link from 'next/link';
import { TopBarContainer } from './TopBar.style';

const TopBar = () => {
  return (
    <TopBarContainer>
      <div className="container">
        <h1>
          <Link href="/">thisyujeong</Link>
        </h1>
      </div>
    </TopBarContainer>
  );
};

export default TopBar;
