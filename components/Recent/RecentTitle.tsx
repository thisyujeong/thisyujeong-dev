import { RecentTitleProps } from 'lib/types';
import Link from 'next/link';
import { RecentTitleContainer, RecentTitleText, RecentMore } from './RecentTitle.style';

const RecentTitle = ({ title, engTitle, path }: RecentTitleProps) => {
  return (
    <>
      <RecentTitleContainer>
        <RecentTitleText>최신 {title}</RecentTitleText>
        <RecentMore>
          <Link href={path} passHref>
            {`all ${engTitle}s`}
          </Link>
        </RecentMore>
      </RecentTitleContainer>
    </>
  );
};

export default RecentTitle;
