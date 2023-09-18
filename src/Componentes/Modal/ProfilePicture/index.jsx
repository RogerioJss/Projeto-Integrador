import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function ProfilePictureUpload() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; // Pega apenas o primeiro arquivo (imagem)
    setUploadedImage(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte a imagem aqui...</p>
        ) : (
          <p>Arraste e solte uma imagem aqui ou clique para selecionar uma.</p>
        )}
      </div>
      {uploadedImage && (
        <div>
          <p>Imagem carregada:</p>
          <img src={URL.createObjectURL(uploadedImage)} alt="Imagem de perfil" />
        </div>
      )}
    </div>
  );
}

export default ProfilePictureUpload;
