import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const RecentProjectContaner = styled.div`
  display: flex;

  a {
    flex: 1;
  }

  a + a {
    ${mq({
      marginLeft: ['10px', '10px', '0'],
    })}
  }

  ${mq({
    flexDirection: ['row', 'row', 'column'],
  })}
`;
export const ProjectCard = styled.div`
  display: flex;
  padding: 8px;
  height: 100px;
  transition: all 0.2s ease;
  background: var(--hover-base);
  border-radius: 4px;

  ${mq({
    padding: ['8px', '8px', '12px 8px'],
    marginBottom: [0, 0, '12px'],
  })}

  @media screen and (min-width: 577px) {
    &:hover {
      h3 {
        color: var(--accent);
      }
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  width: 33.333%;
  border-radius: 4px;
  overflow: hidden;

  &:before {
    content: '';
    position: relative;
    display: block;
    padding-bottom: 64%;
  }

  img {
    position: absolute;
    height: 100% !important;
  }
`;
export const ProjectCardCopy = styled.div`
  position: relative;
  width: 66.666%;
  margin-left: 12px;
  margin-top: 4px;
`;

export const ProjectCardTitle = styled.h3`
  width: 100%;
  display: block;
  font-size: 16px;
  transition: all 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProjectCardDesc = styled.p`
  margin-top: 4px;
  height: 3.14em;
  opacity: 0.5;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
