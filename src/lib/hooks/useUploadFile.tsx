import { ChangeEvent, useState } from 'react';

const useUploadFile = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string | ArrayBuffer | undefined | null>();

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const uploadedFile = files[0];
    const reader = new FileReader();

    if (files.length === 0) return;

    reader.onload = e => {
      const file = e.target?.result;
      setUploadedFiles(file);
    };

    reader.readAsDataURL(uploadedFile);
  };

  const handleDeleteFile = () => {
    setUploadedFiles('');
  };

  return { uploadedFiles, handleUploadFiles, handleDeleteFile };
};

export default useUploadFile;
