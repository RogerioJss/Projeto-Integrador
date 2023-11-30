import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {firebaseStorage} from '../../../services/firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useAppContext } from '../../../Contexts/contextHome';
import styled from 'styled-components';

const ImagemEstilizida = styled.img`
 width: 500px;
 height: 500px;
`

function ProfilePictureUpload() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [progress, setProgress] = useState(0)
  const { updateUrl,imgUrl } = useAppContext();

  const onDrop = useCallback((acceptedFiles) => { // essas função ocorre quando o usuario adiciona ou arrasta a imagem
    const file = acceptedFiles[0]; // Pega apenas o primeiro arquivo (imagem)
    setUploadedImage(file); // seta a imagem no estado
    if(imgUrl === ""){
      setTextVisibility(true)
    }


    const storageRef = ref(firebaseStorage, `images/${file.name}` )
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress  = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url=>{
          updateUrl(url)
        })
      }
    )
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
          isTextVisible  &&( //isso é um if, somente se o estado isTextVisible for verdadeiro, o paragrafo sera renderizado
            <p>Arraste e solte uma imagem aqui ou clique para selecionar uma.</p>
          )
        )}
        {imgUrl && (
          <div className="image-preview">
            <ImagemEstilizida src={imgUrl} alt="Imagem de perfil" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
