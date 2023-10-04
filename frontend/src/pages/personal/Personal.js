import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export default function Home() {
  const apiStaticProfilePicsFolder = "http://localhost:8000/static/user_profile_pics/"

  const style = {
    window:{
      fontFamily: 'Copperplate',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    mediumProfileImageStyle: {
      borderRadius: '100%',
      height: '35%',
      marginTop: '10px',
      aspectRatio: '1',
      marginBottom: '10px',
      marginRight: 'auto',
      marginLeft: 'auto',
      backgroundImage: `url(${apiStaticProfilePicsFolder + "default.jpg"})`,
      backgroundSize: 'cover',
      borderStyle: 'solid',
      borderColor: 'white',
    }
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

	const [file, setFile] = useState();
	function handleFileChange(e) {
		setFile(URL.createObjectURL(e.target.files[0]));
	}

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    // Use fetch or Axios to send the file to the backend
    fetch('http://localhost:8000/api/change_image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the response from the backend
    })
    .catch(error => {
        console.error(error);
    });
};

	return (
		<div style = {style.window}>
      <div style={style.mediumProfileImageStyle}></div>
      <div style = {{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div style={{fontSize:'30px', marginRight: '10px'}}>name</div>
        <IconButton size='small' style={{ color: 'white'}}>
          <EditIcon />
        </IconButton>
        {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button> */}
      </div>
      <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
			{/* <input type="file" onChange={handleChange} /> */}
			{/* <img src={file} alt="" /> */}

		</div>

	);
}