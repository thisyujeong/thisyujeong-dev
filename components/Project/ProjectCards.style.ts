import styled from '@emotion/styled';

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  a {
    display: block;
    width: 33.3333%;
    padding: 12px 8px;
  }
`;
export const ProjectCard = styled.div`
  position: relative;
  &:hover {
    transition: all 0.2s ease;
    h2 {
      color: var(--accent);
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  padding: 33.3333%;
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
  color: #cecedc;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  overflow: hidden;
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
`;
