// import profileDefault from '@/public/default_profile.jpg';
import useUploadFile from '@/src/lib/hooks/useUploadFile';
import { IUser, SignupInput } from '@/src/lib/types';
import Image from 'next/image';
import { useEffect } from 'react';

type InputType = IUser | SignupInput;
interface ProfileImageProps<T> {
  input: T;
  setInput: React.Dispatch<React.SetStateAction<T>>;
}

const ProfileImage = <T extends InputType>({ input, setInput }: ProfileImageProps<T>) => {
  const { uploadedFiles, handleUploadFiles } = useUploadFile();

  useEffect(() => {
    setInput({ ...input, profileImage: uploadedFiles as string });
  }, [uploadedFiles]);

  return (
    <label className="relative rounded-full shadow-lg mx-auto cursor-pointer">
      <input type="file" name="profileImage" className="sr-only" onChange={handleUploadFiles} />
      <Image
        width={200}
        height={200}
        className="bg-gray-200 rounded-full w-[5rem] h-[5rem]"
        src={(uploadedFiles as string) || '/svgs/icon_profile.svg'}
        alt="user-profile"
      />
    </label>
  );
};

export default ProfileImage;
