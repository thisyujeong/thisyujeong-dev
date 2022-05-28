import metadata from 'data/metadata';
import Image from 'next/image';
import { ProfileContainer, ProfileImage, ProfileDesc } from './Profile.style';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage>
        <Image
          src={metadata.home.image}
          width={200}
          height={200}
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
