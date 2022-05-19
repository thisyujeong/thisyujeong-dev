import { PostTitleProps } from 'lib/types';
import { TitleContainer } from './Title.style';

const Title = ({ title, description }: PostTitleProps) => {
  return (
    <TitleContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleContainer>
  );
};

export default Title;
