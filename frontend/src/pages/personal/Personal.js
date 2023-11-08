import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import StatsContainer from "../../components/stats/Stats";
import { useOutletContext } from "react-router-dom";
import "./Personal.css"


export default function Personal() {
  const [games,] = useOutletContext();
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
      height: '30%',
      marginTop: '10px',
      aspectRatio: '1',
      marginBottom: '10px',
      marginRight: 'auto',
      marginLeft: 'auto',
      backgroundImage: `url(${apiStaticProfilePicsFolder + "default.jpg"})`,
      backgroundSize: 'cover',
      borderStyle: 'solid',
      borderColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    editButtonStyle: { 
      color: 'black',
      backgroundColor: 'white',
      marginTop:'auto',
      marginRight: 'auto', 
      marginLeft: '10px',
      marginBottom: '10px'
    },
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

  let stats = [{'name':'score', 'value': 1234}, {'name':'time played', 'value': '2H'}, {'name':'games won', 'value': 44}, {'name':'games lost', 'value': 12}, {'name': 'random stat', 'value': 'random value'}]
	return (
		<div style = {style.window}>
      <button className="profileImage" style={style.mediumProfileImageStyle}>
      <IconButton className="editButton" size='small' style={style.editButtonStyle}>
          <EditIcon />
        </IconButton>
      </button>
      <div style = {{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div style={{fontSize:'30px', marginRight: '10px', color: 'white'}}>name</div>
        {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button> */}
      </div>
      {/* <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div> */}
			{/* <input type="file" onChange={handleChange} /> */}
			{/* <img src={file} alt="" /> */}
        <StatsContainer stats={stats} games={games}></StatsContainer>
		</div>

	);
}