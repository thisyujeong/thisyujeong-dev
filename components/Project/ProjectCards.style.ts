import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  a {
    display: block;
    width: 33.3333%;
    padding: 12px 8px;

    ${mq({
      width: ['33.3333%', '33.3333%', '50%', '100%'],
      padding: ['12px 8px', '12px 8px', '8px', '12px 8px'],
    })}
  }
`;
export const ProjectCard = styled.div`
  position: relative;
  &:hover {
    transition: all 0.2s ease;
    h2 {
      color: var(--accent);
    }
    p {
      opacity: 1;
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  padding-bottom: 60%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ececf3;
  img {
    position: absolute;
    height: 100%;
  }
`;

export const ProjectCardCopy = styled.div``;

export const ProjectCardTitle = styled.h2`
  margin-top: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  overflow: hidden;
  color: var(--text-base);
  ${mq({
    fontSize: ['14px', '14px', '18px'],
  })};
`;

export const ProjectCardDesc = styled.p`
  opacity: 0.5;
  height: 3.14em;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: all 0.2s ease;
  color: var(--text-base);
  ${mq({
    fontSize: ['13px', '13px', '15px'],
  })};
`;
