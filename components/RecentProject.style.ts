import styled from '@emotion/styled';

export const RecentProjectContaner = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    flex: 1;
  }
  a + a {
    margin-left: 10px;
  }
`;
export const ProjectCard = styled.div`
  display: flex;
  height: 100px;
  padding: 8px;
  background: #f5f5f7;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background: #fff9f7;
    border-color: #ffbaa7;

    h3 {
      color: #fb673e;
    }
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;
  flex: 1;

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
  flex: 2;
  margin-left: 12px;
  margin-top: 4px;
`;

export const ProjectCardTitle = styled.h3`
  font-size: 16px;
  transition: all 0.2s ease;
`;

export const ProjectCardDesc = styled.p`
  margin-top: 8px;
  height: 3.14em;
  opacity: 0.5;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
