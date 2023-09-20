import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';


function ProfilePictureUpload() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isTextVisible, setTextVisibility] = useState(true);

  const onDrop = useCallback((acceptedFiles) => { // essas função ocorre quando o usuario adiciona ou arrasta a imagem
    const file = acceptedFiles[0]; // Pega apenas o primeiro arquivo (imagem)
    setUploadedImage(file); // seta a imagem no estado
    setTextVisibility(false); // Oculta os textos quando uma imagem é carregada, tornando o estado falso
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
          isTextVisible && ( //isso é um if, somente se o estado isTextVisible for verdadeiro, o paragrafo sera renderizado
            <p>Arraste e solte uma imagem aqui ou clique para selecionar uma.</p>
          )
        )}

        {uploadedImage && (
          <div className="image-preview">
            <img src={URL.createObjectURL(uploadedImage)} alt="Imagem de perfil" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
