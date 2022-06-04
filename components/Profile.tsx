import metadata from 'data/metadata';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProfileContainer, ProfileImage, ProfileDesc } from './Profile.style';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage>
        <Image
          src={metadata.home.image}
          width={180}
          height={180}
          alt={metadata.home.name}
        />
      </ProfileImage>
      <ProfileDesc>
        <span>{metadata.home.name}</span>
        <p>{metadata.home.description}</p>
      </ProfileDesc>
    </ProfileContainer>
  );
};

export default Profile;
