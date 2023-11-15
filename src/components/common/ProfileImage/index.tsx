import useUploadFile from '@/src/lib/hooks/useUploadFile';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

const ProfileImage = ({ ...rest }: ComponentPropsWithoutRef<'input'>) => {
  const { uploadedFiles, handleUploadFiles } = useUploadFile();
  return (
    <label className="relative w-[10rem] h-[10rem] rounded-full shadow-lg">
      <input
        type="file"
        className="sr-only"
        onChange={handleUploadFiles}
        value={uploadedFiles as string}
        {...rest}
      />
      <Image
        width={200}
        height={200}
        className="bg-red-100 rounded-full w-[10rem] h-[10rem]"
        src={(uploadedFiles as string) || ''}
        alt="user-profile"
      />
    </label>
  );
};

export default ProfileImage;
