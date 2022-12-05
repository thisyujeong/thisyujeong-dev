import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const RecentTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;
  margin-top: 50px;
  ${mq({
    marginTop: ['50px', '50px', '30px'],
  })}
`;

export const RecentTitleText = styled.h2`
  font-weight: 500;
  text-transform: capitalize;
  ${mq({
    fontSize: ['28px', '26px', '24px'],
  })}
`;

export const RecentMore = styled.div`
  margin-bottom: 10px;
  padding: 4px 6px;
  border-radius: 4px;
  &:hover {
    background-color: var(--hover-base);
    a {
      opacity: 1;
    }
  }

  a {
    color: var(--accent);
    padding: 0 6px;
    transition: opacity 0.2s ease;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    opacity: 0.8;
  }
`;
