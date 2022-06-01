import metadata from 'data/metadata';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProfileContainer, ProfileImage, ProfileDesc } from './Profile.style';

const Profile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
    });
  }, []);

  return (
    <ProfileContainer>
      <ProfileImage>
        <Image
          src={metadata.home.image}
          width={!isMobile ? 200 : 150}
          height={!isMobile ? 200 : 150}
          alt={metadata.home.name}
        />
      </ProfileImage>
      <ProfileDesc>
        <span>Yujeong Lee</span>
        {/* <h2>{metadata.home.name}</h2> */}
        <p>{metadata.home.description}</p>
      </ProfileDesc>
    </ProfileContainer>
  );
};

export default Profile;
