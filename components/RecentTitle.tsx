import { RecentTitleProps } from 'lib/types';
import Link from 'next/link';
import { RecentTitleContainer, RecentTitleText, RecentMore } from './RecentTitle.style';

const RecentTitle = ({ title, path }: RecentTitleProps) => {
  return (
    <>
      <RecentTitleContainer>
        <RecentTitleText>Recent {title}</RecentTitleText>
        <RecentMore>
          <Link href={path} passHref>
            <a>all {title}s</a>
          </Link>
        </RecentMore>
      </RecentTitleContainer>
    </>
  );
};

export default RecentTitle;
