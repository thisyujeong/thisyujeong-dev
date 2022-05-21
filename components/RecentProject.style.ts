import styled from '@emotion/styled';

export const RecentProjectContaner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  a {
    flex: 1;
    display: block;
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
  width: 180px;
  img {
    position: absolute;
    height: 100%;
  }
`;
export const ProjectCardCopy = styled.div`
  margin-left: 12px;
  margin-top: 4px;
`;
export const ProjectCardTitle = styled.h3`
  font-size: 16px;
  transition: all 0.2s ease;
`;
export const ProjectCardDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  opacity: 0.5;
`;
