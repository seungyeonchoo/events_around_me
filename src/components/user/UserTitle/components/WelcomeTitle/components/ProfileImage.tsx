import Image from 'next/image';

interface ProfileImageProps {
  profileImage: string | undefined;
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return (
    <Image
      width={200}
      height={200}
      src={profileImage || '/svgs/icon_profile.svg'}
      alt="프로필 이미지"
      className="w-[5rem] h-[5rem] rounded-full bg-red-100"
      priority={true}
    />
  );
};

export default ProfileImage;
