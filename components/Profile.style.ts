import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.div`
  position: relative;

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

export const ProfileDesc = styled.div`
  text-align: center;

  span {
    display: inline-block;
    color: #2c3e50;
    font-size: 18px;
    text-transform: capitalize;
  }

  p {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 300;
  }
`;