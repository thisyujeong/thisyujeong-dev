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
    borderTop: ['0', '0', '1px solid #d4dae0'],
  })}
`;
export const ProjectCard = styled.div`
  display: flex;
  padding: 8px;
  height: 100px;
  background: #f5f5f730;
  transition: all 0.2s ease;

  ${mq({
    border: ['1px solid #d4dae0', '1px solid #d4dae0', '0'],
    borderBottom: ['auto', 'auto', '1px solid #d4dae0'],
    padding: ['8px', '8px', '12px 8px'],
  })}

  &:hover {
    background: var(--accent-sky);
    border-color: var(--accent-border);

    h3 {
      color: var(--accent);
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  width: 33.333%;
  min-width: 130px;

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
