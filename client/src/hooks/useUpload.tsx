import { useRef, useState } from 'react';
import { makeRequest } from '../utils/axios';

function useUpload() {
  const [uploadFile, setUploadFile] = useState<string | ArrayBuffer | null>('');
  const [previewImage, setPreviewImage] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);

  function chooseImage() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {


    if (e.target.files) {
      const imgURL = URL.createObjectURL(e.target?.files[0]);
      setPreviewImage(imgURL);

      const reader = new FileReader();
      reader.readAsDataURL(e.target?.files[0]);
      reader.onloadend = () => {
        setUploadFile(reader.result);
      };
    }
  }

  async function submitUpload() {
      let imgUrl = '';

      if (uploadFile) {
        const imageUploadResponse = await makeRequest.post('/api/cloudinary/upload', {
          data: uploadFile,
        });
        imgUrl = imageUploadResponse.data.url;
      }

      setUploadFile('');
      setPreviewImage && setPreviewImage('');
      return imgUrl;
  }

  return {previewImage, inputFileRef, chooseImage, handleFileInputChange, submitUpload}
}

export { useUpload };
