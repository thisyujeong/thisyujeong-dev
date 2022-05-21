import styled from '@emotion/styled';

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  a {
    display: block;
    width: 33.3333%;
    padding: 8px;
  }
`;
export const ProjectCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ececf3;
  transition: all 0.2s ease;
  &:hover {
    background: #f5f5f7;
    transform: translateY(-8px);
    h2 {
      color: #fb673e;
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  padding: 33.3333%;

  img {
    position: absolute;
    height: 100%;
  }
`;

export const ProjectCardCopy = styled.div`
  max-height: 90px;
  min-height: 90px;
  padding: 8px;
  border-top: 1px solid #ececf3;
`;

export const ProjectCardTitle = styled.h2`
  font-size: 18px;
  transition: all 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProjectCardDesc = styled.p`
  opacity: 0.5;
  height: 3.14em;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
