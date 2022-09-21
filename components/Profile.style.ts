import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  width: 100%;
  position: relative;

  ${mq({
    flexDirection: ['row', 'row', 'row', 'column-reverse'],
    marginBottom: [0, 0, 0, '50px'],
  })}
`;

export const ProfileDesc = styled.div`
  text-align: left;
  margin-right: 50px;
  ${mq({
    marginRight: ['50px', '50px', '50px', 0],
  })}
`;

export const ProfileTitle = styled.div`
  display: inline-block;
  color: var(--text-base);
  font-size: 38px;
  font-family: 'SecularOne';
  text-transform: capitalize;
`;

export const ProfileMainDesc = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
`;

export const ProfileSubDesc = styled.div`
  margin-top: 0.5em;
  font-size: 16px;
  opacity: 0.6;
`;

export const ProfileImage = styled.div`
  position: relative;
  display: block;
  min-width: 180px;
  height: 180px;
  transform: rotateY(180deg);
  ${mq({
    marginBottom: [0, 0, 0, '20px'],
  })}

  &:after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 10%;
    left: -5%;
    background-image: url('/home/ios-emoji-cloud.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: 2;
    animation: cloud 1.5s infinite ease-in;
    animation-direction: alternate;

    ${mq({
      width: ['100px', '100px', '80px'],
      height: ['100px', '100px', '80px'],
    })}
  }

  &:before {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: 15%;
    right: -5%;
    background-image: url('/home/ios-emoji-cloud.png');
    transform: rotateY(180deg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    animation: cloud 2s infinite ease-in;
    animation-direction: alternate;
    ${mq({
      width: ['80px', '80px', '60px'],
      height: ['80px', '80px', '60px'],
    })}
  }

  @keyframes cloud {
    from {
      transform: translateY(-5px) rotateY(180deg);
    }
    to {
      transform: translateY(5px) rotateY(180deg);
    }
  }
`;
